import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Configuration } from './app.constants';

import { SecurityService } from './services/SecurityService';
import { SecureFileService } from './securefile/SecureFileService';
import { BookingsService } from './bookings/BookingsService';
import { Booking } from './bookings/models/Booking';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { SecureFilesComponent } from './securefile/securefiles.component';

import { BookingsListComponent } from './bookings/bookings-list.component';
import { BookingsCreateComponent } from './bookings/bookings-create.component';
import { BookingsEditComponent } from './bookings/bookings-edit.component';

import './app.component.css';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    constructor(public securityService: SecurityService) {
    }

    ngOnInit() {
        console.log('ngOnInit _securityService.AuthorizedCallback');

        if (window.location.hash) {
            this.securityService.AuthorizedCallback();
        }
    }

    public Login() {
        console.log('Do login logic');
        this.securityService.Authorize();
    }

    public Logout() {
        console.log('Do logout logic');
        this.securityService.Logoff();
    }
}