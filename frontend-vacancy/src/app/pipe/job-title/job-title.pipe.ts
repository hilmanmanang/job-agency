import { Pipe, PipeTransform } from '@angular/core';
import { Vacancy } from '../../vacancy.model'

@Pipe({
  name: 'jobTitleFilter'
})

export class JobTitlePipe implements PipeTransform {

  transform(vacancies: Vacancy[], searchJobTitle: string): Vacancy[] {
    if (!vacancies || !searchJobTitle) {
      return vacancies;
    }
    return vacancies.filter(vac =>
      vac.jobTitle.toLowerCase().indexOf(searchJobTitle.toLowerCase()) !== -1); 
  }
} 
 