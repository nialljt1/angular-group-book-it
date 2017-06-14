import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';

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

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        ForbiddenComponent,
        HomeComponent,
        UnauthorizedComponent,
        SecureFilesComponent,
        BookingsListComponent,
        BookingsCreateComponent,
        BookingsEditComponent
    ],
    providers: [
        SecurityService,
        SecureFileService,
        BookingsService,
        Configuration
    ],
    bootstrap:    [AppComponent],
})

export class AppModule {}