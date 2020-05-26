import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';

import { HomeComponent } from './home/home.component';
import { DocumentService } from './services/document.service';
import { SearchComponent } from './search/search.component';

import { Api } from './services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DocumentService]
})
export class AppComponent implements OnInit {
  loggedIn: String;
  hostname: String;
  private sub: Subscription;
  constructor(private _router: Router,
              private cookieService: CookieService,
              private api: Api) {
    // Used for sharing links.
    this.hostname = api.hostnameMEM;
  }

  ngOnInit() {
    this.loggedIn = this.cookieService.get('loggedIn');

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
}
