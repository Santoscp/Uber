import { Injectable } from '@angular/core';
import { User } from '../model/IUser';
import { Observable } from 'rxjs';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  checked=false;
  user!: SocialUser;
  loggedIn!: boolean;
  originalPath!:string;

  constructor(private authService: SocialAuthService,
    private router:Router) {

      
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        if(this.originalPath){
          this.router.navigate(['empresas'])
          this.originalPath='';
        }else
            this.router.navigate(['empresas'])
      }else{
        this.router.navigate(['login']);
      }
    });
   }
  isAuth():boolean{
    return this.loggedIn;
  }
  async refreshToken(): Promise<void> {
    return this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  
  async signInWithGoogle():Promise<SocialUser> {
    this.router.navigate(['empresas']);
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  
  }
  async signOut(): Promise<void> {
  
    return await this.authService.signOut();
    
  }

}