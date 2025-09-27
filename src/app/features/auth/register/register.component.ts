import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/core/models/register';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  model: Register = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    gender: '',
    birthDate: '',
    profileImagePath: ''
  };

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void { }
  
  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.router.navigate(['/login']);
    }, error => {
      console.log(error);
    })
  }
  
}

