import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { UserComponent } from './userComponent/user.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HelloComponent,UserComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
})
export class AppModule {}
