import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransactionListComponent } from "./transaction-list/transaction-list.component";
import { TransactionCreateComponent } from "./transaction-create/transaction-create.component";
import { AuthGuard } from "./auth/auth.guard";
import { TransactionsComponent } from "./view/transactions/transactions.component";
import { CategoriesComponent } from "./view/categories/categories.component";

const routes: Routes = [
  {
    path: "",
    component: TransactionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "categories",
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
