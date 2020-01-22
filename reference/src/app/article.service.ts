import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Article } from "./articles";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://server.asia-note.com/api/articles");
  }

  createArticles(article: Article): Observable<Article> {
    return this.http.post<Article>(
      "http://server.asia-note.com/api/article",
      article
    );
  }

  getArticle(id: number): Observable<any> {
    return this.http.get(`http://server.asia-note.com/api/article/${id}`);
  }

  updateArticle(id: number, value: any): Observable<object> {
    return this.http.put(
      `http://server.asia-note.com/api/article/${id}`,
      value
    );
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`http://server.asia-note.com/api/article/${id}`, {
      responseType: "text"
    });
  }
}
