import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { ArticleListComponent } from "./article-list/article-list.component";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { UpdateArticleComponent } from "./update-article/update-article.component";
import { ArticleDetailsComponent } from "./article-details/article-details.component";

const routes: Routes = [
  { path: "", redirectTo: "employees", pathMatch: "full" },
  { path: "employees", component: EmployeeListComponent },
  { path: "add", component: CreateEmployeeComponent },
  { path: "update/:id", component: UpdateEmployeeComponent },
  { path: "details/:id", component: EmployeeDetailsComponent },
  { path: "articles", component: ArticleListComponent },
  { path: "add-article", component: CreateArticleComponent },
  { path: "update-article/:id", component: UpdateArticleComponent },
  { path: "article-details/:id", component: ArticleDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
