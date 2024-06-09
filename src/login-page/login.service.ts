import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpDataService } from 'src/shared/http-service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpDataService : HttpDataService) { }
  login(loginDetails: {
    user_email: string,
    user_password: string
  }): Observable<any> {
    return this.httpDataService.post(`userlogin`,loginDetails);
  }
  regiter(register: {
    user_firstname: string,
    user_email: string,
    user_phone: string,
    user_password:string,
    user_lastname: string,
    user_city: string,
    user_zipcode: string
  }): Observable<any> {
    return this.httpDataService.post(`user_registeration`,register);
  }

}

