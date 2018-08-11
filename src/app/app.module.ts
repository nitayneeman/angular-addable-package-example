import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MadeWithLoveModule } from 'angular-made-with-love';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MadeWithLoveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
