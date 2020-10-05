import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CategoryService } from "../services/category.service";
import { TransactionService } from "../services/transaction.service";

@Component({
  selector: "app-transaction-create",
  templateUrl: "./transaction-create.component.html",
  styleUrls: ["./transaction-create.component.scss"],
})
export class TransactionCreateComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly transactionService: TransactionService,
    private readonly categoryService: CategoryService
  ) {}

  form: FormGroup;
  categories$ = this.categoryService.getCategories();

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm() {
    this.form = this.formBuilder.group({
      amount: this.formBuilder.control(0, Validators.required),
      category: this.formBuilder.control("", Validators.required),
      currency: this.formBuilder.control("USD", Validators.required),
      effectiveDate: this.formBuilder.control(
        new Date().toString(),
        Validators.required
      ),
    });
  }

  saveTransaction() {
    if (this.form.invalid) {
      return;
    }

    let effectiveDate = this.form.get("effectiveDate").value;
    effectiveDate = new Date(effectiveDate).toISOString();

    const req = {
      amount: this.form.get("amount").value,
      category: this.form.get("category").value,
      currency: this.form.get("currency").value,
      effectiveDate,
    };

    this.transactionService.createTransactions(req).subscribe(() => {
      this.resetForm();
    });
  }
}
