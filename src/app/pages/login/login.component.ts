import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';


import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FloatButtonComponent } from 'src/app/components/float-button/float-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,SocialLoginModule,GoogleSigninButtonModule,
    MatSidenavModule, MatButtonModule,FloatButtonComponent
  
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showFiller = false;

  constructor(public loginS:LoginService,public router:Router) { }


toRegister(){
  this.router.navigate(['empresas'])
  
}





}
