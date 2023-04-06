import { Component } from '@angular/core';
import { Region } from './data/Region';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo-app';

  public onOpenModal( mode :String){
    const container=document.createElement('main-container');
 const button=document.createElement('button');
 button.type='button';
 button.style.display='none';
 button.setAttribute('data-toggle','modal');
 if(mode === 'add'){
  button.setAttribute('data-target','#addRegion');
 }
 container.appendChild(button);
 button.click();

  }
}
