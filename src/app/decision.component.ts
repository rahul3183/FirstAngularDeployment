import { Component } from '@angular/core';
import { Participants } from './participants.service';

@Component({
  selector: 'decision',
  template: `<h3><hr><br>  Change Decision Component<br><br>
  Rahul has changed his Decision to No<br>
  <ul>
  			<li *ngFor ="let st of decision">{{st}}
  			</li>
  			</ul></h3>`
})
export class Decision {

	decision;
	constructor()
	{
	let call = new Participants();
	this.decision = call.provideDetails();
	}


}
