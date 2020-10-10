import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoryCreateComponent } from "./category-create.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ClarityModule } from "@clr/angular";

@NgModule({
  declarations: [CategoryCreateComponent],
  imports: [CommonModule, ReactiveFormsModule, ClarityModule],
  exports: [CategoryCreateComponent],
})
export class CategoryCreateModule {}
