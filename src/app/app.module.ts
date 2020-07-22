import { EmpresaModule } from './empresa/empresa.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmpresaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
