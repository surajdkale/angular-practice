import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {

  public color = ""
  public displayColorName:any;
  getColorName(event:Event){
      this.color = (event.target as HTMLInputElement).value;
  }
  displayColor(){
    this.displayColorName = this.color;
  }
}
