import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "transactions-client";

  active: string = "transaction";

  setActive(active: string) {
    debugger;
    this.active = active;
  }
}
