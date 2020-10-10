import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-category-create",
  templateUrl: "./category-create.component.html",
  styleUrls: ["./category-create.component.scss"],
})
export class CategoryCreateComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly categoryService: CategoryService
  ) {}

  form: FormGroup;
  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      categoryName: this.formBuilder.control("", Validators.required),
    });
  }

  clearForm() {
    this.form.patchValue({});
  }

  saveCategory() {
    this.subscriptions.push(
      this.categoryService.createCategory(this.form.value).subscribe(() => {})
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
