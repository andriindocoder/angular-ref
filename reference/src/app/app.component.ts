import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  userList = [
    { name: 'SPA', points: 1000 },
    { name: 'HTML', points: 850 },
    { name: 'Angular', points: 12250 },
    { name: 'jQuery', points: 1123 },
    { name: 'C Sharp', points: 85 },
    { name: 'Java', points: 1187 },
    { name: 'Javascript', points: 8150 },
    { name: 'Fortran', points: 340 },
    { name: 'F Sharp', points: 8150 },
    { name: 'CSS', points: 8150 }
  ];

  getTitle(points) {
    if (points > 1000) {
      return 'beginner';
    } else {
      return 'expert';
    }
  }
}
