import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VacancyService } from '../../vacancy.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private vacancyService: VacancyService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm = this.formBuilder.group({
      jobId: ['', Validators.required],
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      state: ['', Validators.required],
      closeDate: ''
    });
  }

  addVacancy(jobId, jobTitle, company, state, closeDate) {
    this.vacancyService.addVacancy(jobId, jobTitle, company, state, closeDate).subscribe(() => {
      this.router.navigate(['/list']);
    })
  }
 
  ngOnInit(): void {
  }

}
