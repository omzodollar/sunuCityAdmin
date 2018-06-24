import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import   {   AuthService   }   from   '../../services/auth.service' ; 
import { FormBuilder, FormGroup,FormControl , Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
    siginForm: FormGroup;
  constructor(private  authService:  AuthService,private formBuilder: FormBuilder) { }
  
  erreur:String=this.authService.erreur;

  ngOnInit() {
    $('body').addClass('empty-layout bg-silver-300');
    this.initForm();
  }
  initForm() {

    this.siginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]

    });

  }
  
  signin(){
    const email = this.siginForm.get('email').value;
    const password = this.siginForm.get('password').value;
    this.authService.login(email,password ) ; 

  }
  signOut(){
    this . authService.logout() ; 
  
  }
  
  loginGoogle ( )   {
 
  this.authService.googleLogin() ; 
  } 
  loginFacebook ( )   {
 
    this .authService.signInWithFacebook() ; 
    } 
  ngAfterViewInit() {
    $('#login-form').validate({
        errorClass: "help-block",
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },
        highlight: function(e) {
            $(e).closest(".form-group").addClass("has-error")
        },
        unhighlight: function(e) {
            $(e).closest(".form-group").removeClass("has-error")
        },
    });
  }

  ngOnDestroy() {
    $('body').removeClass('empty-layout bg-silver-300');
  }

}
