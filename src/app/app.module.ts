import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module'; // <-- use your AppRoutingModule
import { AppComponent } from './app.component';

import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PublicHeaderComponent } from './layouts/public-layout/public-header/public-header.component';
import { PublicFooterComponent } from './layouts/public-layout/public-footer/public-footer.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,           
    BrowserAnimationsModule,
    HttpClientModule, 
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      timeOut: 3000,                        
      progressBar: true,                    
      closeButton: true,                    
      easing: 'ease-in',                    
      easeTime: 300,                        
      toastClass: 'ngx-toastr animated fadeInDown'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
