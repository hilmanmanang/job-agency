import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getVacancies() {
    return this.http.get(`${this.uri}/vacancies`);
  }

  getVacancyById(id) {
    return this.http.get(`${this.uri}/vacancies/${id}`)
  }

  addVacancy(jobId, jobTitle, company, state, closeDate) {
    const vacancy = {
      jobId: jobId,
      jobTitle: jobTitle,
      company: company,
      state: state,
      closeDate: closeDate
    };

    return this.http.post(`${this.uri}/vacancies/add`, vacancy)
  }

  updateVacancy(id, jobId, jobTitle, company, state, closeDate) {
    const vacancy = {
      jobId: jobId,
      jobTitle: jobTitle,
      company: company,
      state: state,
      closeDate: closeDate
    };

    return this.http.post(`${this.uri}/vacancies/update/${id}`, vacancy)
  }

  deleteVacancy(id) {
    return this.http.get(`${this.uri}/vacancies/delete/${id}`)
  }
}
