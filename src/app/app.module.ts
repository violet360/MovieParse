import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

import { RouterModule } from '@angular/router'; 

import { NbCardModule, 
NbSidebarModule, 
NbButtonModule,
NbToggleModule, 
NbCheckboxModule,
NbTabsetModule,
NbActionsModule} from '@nebular/theme';

import {FormsModule} from '@angular/forms'

import { FirstAppComponent } from './first-app/first-app.component';


import { ListComponent } from './list/list.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FirstAppComponent,
    ListComponent
  ],
  imports: [
  NbActionsModule,
  NbTabsetModule,
      NbCheckboxModule,
    NbToggleModule,
    HttpClientModule,    
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    // RouterModule.forRoot(routes,{useHash:true}), 
    NbLayoutModule,
    NbSidebarModule.forRoot(), 
    NbCardModule,
    NbButtonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
