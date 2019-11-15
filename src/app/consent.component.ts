import { Component } from '@angular/core';
import { Participants } from './participants.service';

@Component({
  selector: 'consent',
  template: `<h3> Consent Component<br><ul>
  			<li *ngFor ="let st of consent">{{st}}
  			</li>
  			</ul></h3>`
})
export class Consent {

	consent;
	constructor()
	{
	let call = new Participants();
	this.consent = call.provideDetails();
	}


}
