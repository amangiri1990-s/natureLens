import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPageService } from '../login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginPageServ: LoginPageService
  ) {}
  loginFormGrp = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  private userList: Array<any> = this.loginPageServ.getUserDetails();
  public displayUserList: Array<any> = [];
  public isUserFieldEmpty: boolean = true;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.loginFormGrp.controls['password'].disable();
  }
  public getUserList(input: any) {
    let inputUser = input.target.value.toLowerCase();
    if (inputUser && inputUser.startsWith('@')) {
      inputUser = inputUser.slice(1);
      this.isUserFieldEmpty = false;
      let list = this.userList;
      list = list.map((x) => x.id);
      this.displayUserList = list.filter((user) => {
        return user.startsWith(inputUser);
      });
    } else {
      this.isUserFieldEmpty = true;
      this.displayUserList = [];
      this.loginFormGrp.patchValue({
        password: '',
      });
    }
  }
  public onUserNameSelection(userName: any): void {
    let user: any = userName.option.value.toLowerCase();
    const password = this.userList.filter((x) => {
      return x.id === user;
    });
    this.loginFormGrp.patchValue({
      password: password[0].password,
    });
  }
  public login(evt: any): void {
    if (this.loginFormGrp.get('userName')) {
      this._snackBar.open('Login Successfully', 'close', {
        duration: 1000,
      });
      this.router.navigate(['../Photos'], {
        queryParams: {
          data: JSON.stringify({
            mode: 'private',
          }),
        },
        relativeTo: this.activatedRoute,
      });
    }
  }
}
