import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { FilterTextboxComponent } from "./customers-list/filter-list.component";

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  imports: [CommonModule],
  exports: [CustomersComponent, CustomersListComponent, FilterTextboxComponent]
})
export class CustomerModule {}
