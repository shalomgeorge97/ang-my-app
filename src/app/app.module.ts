import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { CustomerModule } from "./customers/customers.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    CustomerModule,
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
