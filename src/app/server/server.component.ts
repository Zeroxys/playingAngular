import {Component, ViewChild, OnInit} from '@angular/core'
import {ServicesService} from '../services/services.service'
import {ItemComponentComponent} from '../item-component/item-component.component'
import {trigger, state, style, animate, transition} from '@angular/animations'

@Component({
  selector: 'app-server',
  templateUrl : './server.component.html',
  styleUrls: ['./server.component.styl'],
  
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

export class ServerComponent{ 

  constructor( private myservice : ServicesService) {
    this.showConfig();
  }

  data : any[];
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  
  showConfig() {  
    this.myservice.getConfig().subscribe( (data:any) => {
      this.data = data.articles
    })
  }

  myfunction(item) {
    this.isOpen = !this.isOpen;
  }

}
