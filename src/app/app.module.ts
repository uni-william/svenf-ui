import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EmpresaModule } from './empresa/empresa.module';
import { EmpresaService } from './empresa/empresa.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';


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
    HttpClientModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [EmpresaService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
