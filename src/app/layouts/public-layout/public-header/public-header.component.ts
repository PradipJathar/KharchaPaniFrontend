import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.css']
})
export class PublicHeaderComponent implements OnInit {

  
    model: any = {};
  
    constructor(public accountService: AccountService) { }
  
    ngOnInit(): void {}
  
    login() {
      this.accountService.login(this.model).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      })
    }
  
    logout() {
      this.accountService.logout();
    }
  

}
