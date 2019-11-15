import { Component } from '@angular/core';
import { Stationary } from './rahul.services';

@Component({
  selector: 'items',
  template: `<h3>Items in Stocks: </h3> <ul type="square">
  			<li *ngFor ="let st of items">{{st}}
  			  			</li>
  			</ul>`
})
export class RepCls {

	items;
	constructor(call:Stationary)
	{
	this.items = call.provideStat();
	}


}
