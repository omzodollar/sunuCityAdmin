import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class AuthService {
  erreur:String;
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private authStatus:Boolean=false;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router,private afAuth: AngularFireAuth) {
      this.user = _firebaseAuth.authState;

  
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
}
resetPassword(email: string) {
  var auth = firebase.auth();
  return auth.sendPasswordResetEmail(email)
    .then(() => console.log("email sent"))
    .catch((error) => console.log(error))
}
  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigateByUrl('index');
        this.erreur="Nice, it worked!";
        this.authStatus=true;


      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
        this.erreur="email ou mot de pase invalide";
        this.authStatus=false;

      });
  }
  
signInWithTwitter() {
  return this._firebaseAuth.auth.signInWithPopup(
    new firebase.auth.TwitterAuthProvider()
  )
}

signInWithFacebook() {
  return this._firebaseAuth.auth.signInWithPopup(
    new firebase.auth.FacebookAuthProvider()
  )
}
 
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
        console.log('Sucess', value),
          console.log('The given name is'),
          this.router.navigateByUrl('index');
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }
  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/pages', 'login']);
    });
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}