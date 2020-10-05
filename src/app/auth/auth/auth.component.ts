import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-auth",
  template: "",
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.activatedRoute.fragment.subscribe(async (fragment) => {
      const params = fragment.split("&");

      for (const param of params) {
        if (param.includes("access_token=")) {
          this.authService.accessToken = param.replace("access_token=", "");
        } else if (param.includes("id_token=")) {
          this.authService.token = param.replace("id_token=", "");
        } else if (param.includes("expires_in")) {
          this.authService.expiresIn = parseInt(
            param.replace("expires_in=", "")
          );
        }
      }
      debugger;
      await this.router.navigate([""]);
    });
  }
}
