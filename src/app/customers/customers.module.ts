import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers.component";
// import { CustomersListComponent } from "./customers-list/customers-list.component";

@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule],
  providers: []
})
export class CustomerModule {}
