import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

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
    return parseInt(localStorage.getItem("EXPIRES_IN"));
  }

  get expired(): boolean {
    const timeSince = (Date.now() - this.tokenRetrievedAt) / 3600;
    return this.expiresIn < timeSince;
  }

  get tokenRetrievedAt(): number {
    return parseInt(localStorage.getItem("TOKEN_RETRIEVED_AT"));
  }

  set tokenRetrievedAt(time: number) {
    localStorage.setItem("TOKEN_RETRIEVED_AT", Date.now().toString());
  }

  set expiresIn(expiresIn: number) {
    this.tokenRetrievedAt = Date.now();
    localStorage.setItem("EXPIRES_IN", expiresIn.toString());
  }
}
