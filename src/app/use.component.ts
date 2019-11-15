import { Component } from '@angular/core';
import { Stationary } from './rahul.services';

@Component({
  selector: 'using',
  template: `<h3>Using Stationary: </h3> <ul type="circle">
  			<li *ngFor ="let st of using">{{st}}
  			  			
  			 </li>
  			</ul>`
})
export class UseCls {

	using;
	constructor(call:Stationary)
	{
	
	this.using = call.provideStat();
	}


}
