import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionCreateComponent } from './transaction-create.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TransactionCreateComponent],
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
  ]
})
export class TransactionCreateModule { }
