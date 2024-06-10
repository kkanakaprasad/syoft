import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, UntypedFormControl, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertpopupService } from '../shared/alertPopup/alertpopup.service';
import { RouteConstants } from '../shared/constants/routes.constants';
import { LoginService } from './login.service';
import { StorageService } from 'src/shared/storage-service/storage.service';
import { REG_EXP_PATTERNS } from 'src/enums/regex-pattern.enum';
import { STORAGE_KEYS } from 'src/enums/storage.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  hide: boolean= true
  loginForm!: FormGroup;
  registationForm!: FormGroup;
  isloginPage: boolean = true;
  hideConfirmPassword = true;
  hidePassword = true;
  PwdError: string='';
  phoneNumber: any;
  constructor(private formBuilder: FormBuilder, 
    private loginService:LoginService,
    private storageService:StorageService,
    private alertpopupService: AlertpopupService,
    private changeDetectorRef: ChangeDetectorRef,
    private router:Router) { 
  }

  ngOnInit(): void {
    this.loginFormDetails()
  
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  loginFormDetails(){
    this.loginForm =this.formBuilder.group({
      user_email: ['',[ Validators.required,Validators.pattern(REG_EXP_PATTERNS.EmailPattern)]],
      user_password: ['',[ Validators.required]],
    })
    
  }
 

  registationFormDetails() {
    this.registationForm = this.formBuilder.group({
      user_firstname: ['', [Validators.required]],
      user_email: ['', [Validators.required, Validators.pattern(REG_EXP_PATTERNS.EmailPattern)]],
      user_phone: ['', [Validators.required,Validators.pattern(REG_EXP_PATTERNS.MobilePattern),this.phoneNumberValidator()]],
      user_password: ['',[Validators.required, Validators.pattern(REG_EXP_PATTERNS.PasswordPattern)]],
      user_lastname: ['ni'],
      user_city: ['Hyderabad'],
      user_zipcode: ['500072'],
      confirm_password: ['', [Validators.required]],
    }) 
  }
  
  //returns latest value of phoneNumber
  phoneNumberValidator() {
    return (control: AbstractControl) => {
      this. phoneNumber = control.value;
  }}
  
  toggleLoginPage(arug?:string){
    if(arug ==='login'){
      this.loginForm.reset()
      this.registationFormDetails()
    this.isloginPage =false
  }else{
    this.registationForm.reset()
    this.isloginPage =true
  }
  }
 
  onSubmitRegister(): void {
    if (this.registationForm.valid && !this.PwdError) {
      this.loginService.regiter(this.registationForm.value).subscribe((res)=>{
            this.alertpopupService.open({
              message :res.message,
              action : 'ok'
            })
            this.router.navigate([RouteConstants.DASHBOARD])
            
          },(error)=>{
            this.alertpopupService.open({
              message :error.message ? error.message : 'Server Not Responding Please Try Again',
              action : 'ok'
            })
          })
    } 
  }
  onSubmitLogin(){
    this.loginService.login(this.loginForm.value).subscribe((res)=>{
      this.storageService.clearLocalStorage();
      this.storageService.setDataToLocalStorage(STORAGE_KEYS.ACCESS_TOKEN,res?.accessToken);
      this.storageService.setDataToLocalStorage(STORAGE_KEYS.USER_ID,res?.userId);
      this.alertpopupService.open({
        message :res.message,
        action : 'ok'
      })
      this.router.navigate([RouteConstants.DASHBOARD])
      
    },(error)=>{
      this.alertpopupService.open({
        message :'Invalid Email or Password! Please Try Again',
        action : 'ok'
      })
    })
  }

}
