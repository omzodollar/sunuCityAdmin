import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';


import { AppComponent } from './/app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutModule } from './/layouts/layout.module';
import { ScriptLoaderService } from './_services/script-loader.service';
import   { AngularFireModule }   from   'angularfire2' ; 
import   { AngularFireAuthModule }   from   'angularfire2/auth' ; 
import   { AuthService }   from   './services/auth.service' ; 
import { AuthGuardService } from './services/auth-guard.service';
const firebaseConfig  ={
apiKey: "AIzaSyCOXldPSGWLGI3elAN-naOXfTCxJ6Q_QY4",
authDomain: "sunucity-7c866.firebaseapp.com",
databaseURL: "https://sunucity-7c866.firebaseio.com",
projectId: "sunucity-7c866",
storageBucket: "sunucity-7c866.appspot.com",
messagingSenderId: "1050815094443"
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule . initializeApp ( firebaseConfig ) ,  AngularFireAuthModule 
  ],
  providers: [ScriptLoaderService,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
