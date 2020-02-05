import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rank'
})
export class RankPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('called');

    if (value < 1000) {
      return 'beginner';
    } else {
      return 'expert';
    }
  }
}
