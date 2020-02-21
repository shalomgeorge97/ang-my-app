import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-customers></app-customers>
  `,
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  title;
  ngOnInit() {}
}
