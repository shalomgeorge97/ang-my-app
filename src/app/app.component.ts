import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>{{ title }}</h1>
  `,
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  title: string;
  constructor() {}

  ngOnInit() {
    // We call a service that gets us the data
    this.title = "Hello World";
  }
}
