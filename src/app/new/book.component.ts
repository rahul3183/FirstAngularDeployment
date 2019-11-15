import { Component } from '@angular/core';
import { Booking } from './booking.service';

@Component({
  selector: 'book',
  template: `<h3> Booking<br><br>

  <ul>
  			<li *ngFor ="let st of book">{{st}}
  			</li>
  			</ul></h3>`
})
export class Booking {

	book;
	constructor(call:Booking)
	{

	this.book = call.bookingDetails();
	}


}
