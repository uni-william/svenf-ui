import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EmpresaModule } from './empresa/empresa.module';
import { EmpresaService } from './empresa/empresa.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    EmpresaModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
