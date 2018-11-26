import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'
import {ContactComponentComponent} from './contact-component/contact-component.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotFoundComponent } from './not-found/not-found.component'

import {ServicesService} from './services/services.service';
import { ItemComponentComponent } from './item-component/item-component.component' // ----> Services 
import { Browser } from 'protractor';

@NgModule({
  declarations: [ // <--- we use declarations for declarated a own components.
    AppComponent,
    ServerComponent,
    ServersComponent,
    ContactComponentComponent,
    AboutMeComponent,
    NotFoundComponent,
    ItemComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
