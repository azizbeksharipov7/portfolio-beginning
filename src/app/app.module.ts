import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AbautComponent } from './abaut/abaut.component';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    MyCalculatorComponent,
    CardsComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    AbautComponent,
    HomeComponent,
    MyWorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatCardModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }    





 
