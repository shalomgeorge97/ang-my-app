import { Component, OnInit, Input } from "@angular/core";
import { ICustomer } from "src/app/shared/interfaces";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.sass"]
})
export class CustomersListComponent implements OnInit {
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = "USD";
  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }
  constructor() {}

  ngOnInit() {
    // this.filteredCustomers = this.customers;
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
  }
}
