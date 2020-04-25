import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get token(): string{
    return localStorage.getItem('ID_TOKEN');
  }

  set token(token: string){
    localStorage.setItem('ID_TOKEN', token);
  }

  get accessToken(): string {
    return localStorage.getItem('ACCESS_TOKEN')
  }

  set accessToken(accessToken: string) {
    localStorage.setItem('ACCESS_TOKEN', accessToken);
  }

  get expiresIn(): number {
    return parseInt(localStorage.getItem('ACCESS_TOKEN'));
  }

  set expiresIn(expiresIn: number){
    localStorage.setItem('EXPIRES_IN', expiresIn.toString());
  }
}
