import { Component, OnInit } from "@angular/core";

declare var $;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Assidq Articles";

  ngOnInit() {}
}
