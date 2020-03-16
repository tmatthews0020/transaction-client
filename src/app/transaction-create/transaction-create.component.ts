import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.scss']
})
export class TransactionCreateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionService,
  ) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: this.formBuilder.control(0),
      category: this.formBuilder.control(''),
      currency: this.formBuilder.control(''),
    });
  }

  saveTransaction() {

    if (this.form.invalid) {
      return;
    }

    this.transactionService.createTransactions(
      this.form.value
    ).subscribe(() => {})
  }
}
