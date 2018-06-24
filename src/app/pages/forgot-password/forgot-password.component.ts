import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import   {   AuthService   }   from   '../../services/auth.service' ; 
import { FormBuilder, FormGroup,FormControl , Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit, OnDestroy {
  emailValue: FormGroup;

  constructor(private  authService:  AuthService,private formBuilder: FormBuilder) { }
  ngOnInit() {
    $('body').addClass('empty-layout bg-silver-300');
    this.initForm();
  }
  initForm() {

    this.emailValue = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]

    });

  }
  
  resetPassword() {
    const email = this.emailValue.get('email').value;
    this.authService.resetPassword(email);
}

  ngAfterViewInit() {
    $('#forgot-form').validate({
        errorClass: "help-block",
        rules: {
            email: {
                required: true,
                email: true
            },
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
