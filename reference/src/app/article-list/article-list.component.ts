import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../article.service";
import { Router } from "@angular/router";
import { Article } from "../articles";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void {
    this.articleService.getArticles().subscribe(
      response => {
        console.log(response);
        this.articles = response;
      },
      err => {
        console.log(err);
      }
    );
  }

  articleDetails(id: number) {
    this.router.navigate(["article-details", id]);
  }

  updateArticle(id: number) {
    this.router.navigate(["update-article", id]);
  }
}
