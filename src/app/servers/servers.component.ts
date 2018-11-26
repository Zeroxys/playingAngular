import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.styl'],
  
  animations : [
    trigger('openClose', [
      
      state('open', style({
        opacity: 1,
      })),

      state('closed', style({
        opacity: 0,
      })),

      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),

    ])
  ]

})
export class ServersComponent implements OnInit {

  isOpen = true;
  constructor() { }

  ngOnInit() {
  }

  myfunction(item) {
    this.isOpen = !this.isOpen;
  }

}
