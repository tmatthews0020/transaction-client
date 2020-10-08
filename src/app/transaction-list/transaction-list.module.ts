import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TransactionListComponent } from "./transaction-list.component";
import { ClarityModule } from "@clr/angular";

@NgModule({
  declarations: [TransactionListComponent],
  imports: [CommonModule, ClarityModule],
  exports: [TransactionListComponent],
})
export class TransactionListModule {}
