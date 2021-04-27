import { Pipe, PipeTransform } from '@angular/core';
import { Vacancy } from '../../vacancy.model'

@Pipe({
  name: 'statusFilter'
})

export class StatusPipe implements PipeTransform {

  transform(vacancies: Vacancy[], searchStatus: string): Vacancy[] {
    if (!vacancies || !searchStatus) {
      return vacancies;
    }
    return vacancies.filter(vac =>
      vac.company.toLowerCase().indexOf(searchStatus.toLowerCase()) !== -1); 
  }


}
 