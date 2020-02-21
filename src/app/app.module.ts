import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CustomerModule } from "./customers/customers.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CustomerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
