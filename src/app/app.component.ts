import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCMVzDwE5rCS9mL89YkvnKz8piLq-dqX0k',
      authDomain: 'ng-recipe-book-5e065.firebaseapp.com'
    });

    if (firebase.auth().currentUser != null) {
      firebase.auth().currentUser.getIdToken()
        .then(
        (token: string) => {
          this.authService.token = token;
          }
        );
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(
          (token: string) => this.authService.token = token
        );
      }
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
