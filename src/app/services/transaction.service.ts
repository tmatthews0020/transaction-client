import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Transaction } from '../common/transaction';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  transactions = new BehaviorSubject<Transaction[]>([]);
  transactions$ = this.transactions.asObservable();

  getAllTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(environment.listTransactionsApiUrl)
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        }),
        tap((transactions) => this.transactions.next(transactions))
      );
  }

  createTransactions(transaction: Transaction) {
    return this.httpClient.post<Transaction>(environment.createTransactionApiUrl, transaction);
  }
}
