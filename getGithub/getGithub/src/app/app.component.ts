import { Component } from '@angular/core';
import { FormControl, ValidatorFn,AbstractControl } from '@angular/forms';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'getGithub';

  users: any[] = [];

  constructor(private userService: UserService) { }
  usernameControl = new FormControl('',[this.usernameValidator()]);

  usernameValidator(): ValidatorFn {
    const regex = /^[a-zA-Z0-9-]+$/;
    return (control: AbstractControl): { [key: string]: any } | null => {
      const valid = regex.test(control.value);
      return valid ? null : { "invalid": true };
    };
  }


  searchUser() {
    if (this.usernameControl.valid) {
      const username = this.usernameControl.value;
      if (username){
      this.userService.getUsers(username).subscribe(
        (data) => {
          this.users = data.items;
          console.log(data);
        }
      );}
    } else {
      console.log('Invalid username');
    }
  }
}
