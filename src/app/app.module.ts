import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminpanelComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule ,
    AppRoutingModule,MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
