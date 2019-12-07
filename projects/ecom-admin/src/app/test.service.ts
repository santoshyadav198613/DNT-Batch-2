import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  add(num1: number, num2: number) {
    return num1 + num2;
  }

  sub(num1, num2) {
    return num1 - num2;
  }
}
