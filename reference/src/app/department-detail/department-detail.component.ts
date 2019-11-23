import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You selected department with id = {{ departmentId }} </h3>
    <a (click)="goPrevious()">Previous</a> |
    <a (click)="goNext()">Next</a>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      this.departmentId = id;
    });
  }

  goPrevious() {
    const previousId = this.departmentId  - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    const nextId = this.departmentId  + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    const selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}])
  }

}
