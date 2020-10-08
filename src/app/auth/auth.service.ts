import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  tokenRetrievedTime: number;

  get token(): string {
    return localStorage.getItem("ID_TOKEN");
  }

  set token(token: string) {
    localStorage.setItem("ID_TOKEN", token);
  }

  get accessToken(): string {
    return localStorage.getItem("ACCESS_TOKEN");
  }

  set accessToken(accessToken: string) {
    localStorage.setItem("ACCESS_TOKEN", accessToken);
  }

  get expiresIn(): number {
    this.tokenRetrievedTime = Date.now();
    return parseInt(localStorage.getItem("ACCESS_TOKEN"));
  }

  get expired(): boolean {
    const timeSince = (this.tokenRetrievedTime - Date.now()) / 3600;
    return this.expiresIn < timeSince;
  }

  set expiresIn(expiresIn: number) {
    localStorage.setItem("EXPIRES_IN", expiresIn.toString());
  }
}
