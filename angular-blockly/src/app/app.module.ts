import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlocklyComponent } from './components/blockly/blockly.component';
import { CodeComponent } from './components/code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocklyComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BlocklyComponent]
})
export class AppModule { }
