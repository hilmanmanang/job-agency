import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VacancyService } from '../../vacancy.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: String;
  vacancy: any = {};
  updateForm: FormGroup;

  constructor(private vacancyService: VacancyService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private formBuilder: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.updateForm = this.formBuilder.group({
      jobId: '',
      jobTitle: '',
      company: '',
      state: '',
      closeDate: '',
      status: ''
    });
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.vacancyService.getVacancyById(this.id).subscribe(res => {
        this.vacancy = res;
        this.updateForm.get('jobId').setValue(this.vacancy.jobId);
        this.updateForm.get('jobTitle').setValue(this.vacancy.jobTitle);
        this.updateForm.get('company').setValue(this.vacancy.company);
        this.updateForm.get('state').setValue(this.vacancy.state);
        this.updateForm.get('closeDate').setValue(this.vacancy.closeDate);
      });
    });
  }

  updateVacancy(jobId, jobTitle, company, state, closeDate) {
    this.vacancyService.updateVacancy(this.id, jobId, jobTitle, company, state, closeDate).subscribe(() => {
      this.snackBar.open('Vacancy updated successfully!', 'OK', { duration: 3000 });
      this.router.navigate(['/list']);
    })
  }

}
