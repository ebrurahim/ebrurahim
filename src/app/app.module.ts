import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HsComponent } from './hs/hs.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    HsComponent,
    LoginComponent,
    SingupComponent
  ],
  imports: [

    
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
