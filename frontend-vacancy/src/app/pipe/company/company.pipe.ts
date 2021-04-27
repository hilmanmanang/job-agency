import { Pipe, PipeTransform } from '@angular/core';
import { Vacancy } from '../../vacancy.model'

@Pipe({
  name: 'companyFilter'
})

export class CompanyPipe implements PipeTransform {

  transform(vacancies: Vacancy[], searchCompany: string): Vacancy[] {
    if (!vacancies || !searchCompany) {
      return vacancies;
    }
    return vacancies.filter(vac =>
      vac.company.toLowerCase().indexOf(searchCompany.toLowerCase()) !== -1); 
  }

}
 