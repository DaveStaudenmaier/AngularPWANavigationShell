import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderMobileComponent } from './navigation/header-mobile/header-mobile.component';
import { FooterMobileComponent } from './navigation/footer-mobile/footer-mobile.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';

import { HomeComponent } from './features/home/home.component';
import { ForumsComponent } from './features/forums/forums.component';
import { MessagesComponent } from './features/messages/messages.component';
import { AboutComponent } from './features/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
    HomeComponent,
    ForumsComponent,
    MessagesComponent,
    SidenavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
