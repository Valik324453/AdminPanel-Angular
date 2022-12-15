import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent{

  @Input() icon:string = '';
  @Input() isCurrency:boolean = false;
  @Input() value:number = 0;
  @Input() color:string = '';
  @Input() title:string = '';
  @Input() text:string = '';
  constructor() { }

}
