import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugComponent } from './bug/bug.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BugListComponent,
    BugComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
