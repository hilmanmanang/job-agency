import { Pipe, PipeTransform } from '@angular/core';
import { Vacancy } from '../../vacancy.model'

@Pipe({
  name: 'stateFilter'
})

export class StatePipe implements PipeTransform {

  transform(vacancies: Vacancy[], stateFilter: string): Vacancy[] {
    if (!vacancies || !stateFilter) {
      return vacancies;
    }
    return vacancies.filter(vac =>
      vac.state.toLowerCase().indexOf(stateFilter.toLowerCase()) !== -1); 
  }
}
