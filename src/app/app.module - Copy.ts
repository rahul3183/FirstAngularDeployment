import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Participants } from './participants.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Consent } from './consent.component';
import { Change } from './change.component';
import { Decision } from './decision.component';

@NgModule({
  declarations: [
    AppComponent,
    Consent,
    Change,
    Decision
  ],
  imports: [

    BrowserModule,
    AppRoutingModule
  ],
  providers: [Participants],
  bootstrap: [AppComponent]
})
export class AppModule { }
