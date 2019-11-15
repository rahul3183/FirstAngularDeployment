import { Component } from '@angular/core';
import { Participants } from './participants.service';

@Component({
  selector: 'change',
  template: `<h3><hr><br> Change Type Component<br><br>
  Rahul has changed Type to Audience<br>
  <ul>
  			<li *ngFor ="let st of change">{{st}}
  			</li>
  			</ul></h3>`
})
export class Change {

	change;
	constructor()
	{
	let call = new Participants();
	this.change = call.provideDetails();
	}


}
