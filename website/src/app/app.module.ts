import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do.component';
import { FormsModule } from '@angular/forms';
import { ItiTracksComponent } from './components/iti-tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ItiTracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
