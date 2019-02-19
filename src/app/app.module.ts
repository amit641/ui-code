import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { GetInTouchComponent } from './getInTouch/getInTouch';
import { HomeComponent } from './home/home';
import { InvestorsComponent } from './investors/investors';
import { SourcingComponent } from './sourcing/sourcing';
import { RentToBuyComponent } from './rentToBuy/rentToBuy';
import { ContactComponent } from './contact/contact';
import { ROUTINGS } from './app-routings';
import { GetInTouchService } from './getInTouch/getInTouchService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GetInTouchComponent,
    HomeComponent,
    InvestorsComponent,
    SourcingComponent,
    RentToBuyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ROUTINGS
  ],
  providers: [GetInTouchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
