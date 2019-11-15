import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Participants } from './participants.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Booking } from './book.component';
import { Cancel } from './cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    Booking,
    Cancel
  ],
  imports: [

    BrowserModule,
    AppRoutingModule
  ],
  providers: [Booking],
  bootstrap: [AppComponent]
})
export class AppModule { }
