import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  constructor(
    private readonly transactionService: TransactionService,
  ) { }

  transactions$ = this.transactionService.transactions$;

  ngOnInit(): void {
    this.transactionService.getAllTransactions()
      .subscribe(() => { });
  }


}
