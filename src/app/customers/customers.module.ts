import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

import { CustomersComponent } from "./customers.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { FilterTextboxComponent } from "./customers-list/filter-list.component";
import { from } from "rxjs";

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [CustomersComponent, CustomersListComponent, FilterTextboxComponent]
})
export class CustomerModule {}
