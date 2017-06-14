import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SecurityService } from '../services/SecurityService';

import { BookingsService } from '../bookings/BookingsService';
import { Booking } from './models/Booking';

@Component({
    selector: 'bookings-edit',
    templateUrl: 'bookings-edit.component.html'
})

export class BookingsEditComponent implements OnInit, OnDestroy   {

    private id: number;
    public message: string;
    private sub: any;
    public Booking: Booking;

    constructor(
        private _dataEventRecordsService: BookingsService,
        public securityService: SecurityService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.message = 'Bookings Edit';
    }

    ngOnInit() {
        console.log('IsAuthorized:' + this.securityService.IsAuthorized());
        console.log('HasAdminRole:' + this.securityService.HasAdminRole);

        this.sub = this._route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            if (!this.Booking) {
                this._dataEventRecordsService.GetById(id)
                    .subscribe(data => this.Booking = data,
                    error => this.securityService.HandleError(error),
                    () => console.log('BookingsEditComponent:Get by Id complete'));
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public Update() {
        // router navigate to BookingsList
        this._dataEventRecordsService.Update(this.id, this.Booking)
            .subscribe((() => console.log('subscribed')),
            error => this.securityService.HandleError(error),
            () => this._router.navigate(['/bookings']));
    }
}
