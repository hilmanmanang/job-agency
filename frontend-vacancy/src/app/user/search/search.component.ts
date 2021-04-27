import { Component, OnInit } from '@angular/core';
import { Vacancy } from './../../vacancy.model';
import { VacancyService } from './../../vacancy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit { 

  vacancies: any;
  todayDate = new Date();
  searchJobTitle:string;
  searchCompany:string;
  searchState:string;
  searchStatus:string;

  constructor(private vacancyService: VacancyService, private router: Router) { }

  ngOnInit(): void {
    this.fetchVacancies();
  }

  fetchVacancies() {
    this.vacancyService.getVacancies()
      .subscribe((data: Vacancy[]) => {
        this.vacancies = data;
        console.log('Data requested ...');
        console.log(this.vacancies);
      });
  }

  applyVacancy(id) {
    this.router.navigate([`/apply/${id}`]);
  }

  dateStatus() {
    if (this.todayDate <= this.vacancies.closeDate) {
      return true 
    } else {
      return false
    }
  }
}

 