import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  @Input() greetMessage? : string; 
  @Output() sendMessageEvent = new EventEmitter<string>();
  name? : string; 
  constructor() { }

  ngOnInit(): void {
  }

  sayHello(): void{
    this.sendMessageEvent.emit(this.name);
  }

}

@NgModule({
 declarations:[GreetComponent],
 imports:[FormsModule]
})
class GreetModule {

}
