import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TransactionListModule } from "./transaction-list/transaction-list.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TransactionCreateModule } from "./transaction-create/transaction-create.module";
import { AuthModule } from "./auth/auth.module";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    TransactionListModule,
    TransactionCreateModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    AuthModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
