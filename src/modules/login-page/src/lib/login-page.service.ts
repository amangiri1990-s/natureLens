import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginPageService {
  constructor() {}
  getUserDetails() {
    return [
      { id: 'aman.giri@gmail.com', password: 'Aman@123123' },
      { id: 'rahul.chouhan@gmail.com', password: 'Aman@123433' },
      { id: 'raj.sharma@gmail.com', password: 'Aman@122333' },
      { id: 'simran.verma123@gmail.com', password: 'Aman@123423' },
      { id: 'susheel.singh1234@gmail.com', password: 'Aman@12344323' },
      { id: 'sundar.gupta12345@gmail.com', password: 'Aman@124433' },
      { id: 'suman.raj1232@gmail.com', password: 'Aman@1223433' },
    ];
  }
}
