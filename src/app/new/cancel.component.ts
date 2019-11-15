import { Component } from '@angular/core';
import { Booking } from './booking.service';

@Component({
  selector: 'cancel',
  template: `<h3> Canceling Booking <br><br>

  <ul>
  			<li *ngFor ="let st of cancel">{{st}}
  			</li>
  			</ul></h3>`
})
export class Cancel {

	cancel;
	constructor(call:Booking)
	{
	this.cancel = call.bookingDetails();
	}


}
