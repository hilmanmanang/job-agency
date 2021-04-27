import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacancy } from '../../vacancy.model';
import { VacancyService } from '../../vacancy.service'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  vacancies: Vacancy[];
  displayedColumn = ['jobId', 'jobTitle', 'company', 'state', 'closeDate', 'action'];

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
 
  editVacancy(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteVacancy(id) {
    this.vacancyService.deleteVacancy(id).subscribe(() => {
      this.fetchVacancies();
    });
  }
}
