import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../articles';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  id: number;
  article: Article;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: ArticleService
  ) {}

  ngOnInit() {
    this.article = new Article();

    this.id = this.route.snapshot.params.id;

    this.employeeService.getArticle(this.id).subscribe(
      data => {
        console.log(data);
        this.article = data;
      },
      error => console.log(error)
    );
  }

  updateEmployee() {
    this.employeeService.updateArticle(this.id, this.article).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.article = new Article();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/articles']);
  }
}
