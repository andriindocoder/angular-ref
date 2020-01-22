import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../articles';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  id: number;
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.article = new Article();

    this.id = this.route.snapshot.params.id;

    this.articleService.getArticle(this.id).subscribe(
      data => {
        this.article = data;
      },
      error => console.log(error)
    );
  }

  list() {
    this.router.navigate(['articles']);
  }
}
