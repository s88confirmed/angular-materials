import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  openDialog(){
    let dialogRef = dialog.open(UserProfileComponent, {
      height: '400px',
      width: '600px',
    });
  }
}




