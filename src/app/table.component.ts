import { Component } from '@angular/core';

@Component({
  selector: 'stock',
  template: `
  <h1 [textContent]="texts"> </h1>
  <button [style.backgroundColor]="active?'blue':'red'">Search</button>
  <table [border]="bdr" [cellSpacing]="cs" [cellPadding]="cp" >
  <tr>
  <td>No.</td>
  <td>Name</td>
  </tr>
  <tr>
  <td>1</td>
  <td>Rahul</td>
  </table>`
})
export class Table {
 
	bdr = 5;
  cs = 5;
  cp = 5;
	texts = "Hello Their";


}
