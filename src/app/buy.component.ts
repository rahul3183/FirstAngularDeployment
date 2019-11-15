import { Component } from '@angular/core';
import { Stationary } from './rahul.services';

@Component({
  selector: 'stock',
  template: `<h3>Purchases Stock: </h3> <ol type="i" start="3">
  			<li *ngFor ="let st of stock">{{st}}
  			</li>
  			</ol>`
})
export class BuyCls {

	stock;
	constructor(call:Stationary)
	{

	this.stock = call.provideStat();
	}


}
