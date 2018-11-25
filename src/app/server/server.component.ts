import {Component, ViewChild, OnInit} from '@angular/core'
import {ServicesService} from '../services/services.service'
import {ItemComponentComponent} from '../item-component/item-component.component'


@Component({
  selector: 'app-server',
  templateUrl : './server.component.html',
  styleUrls: ['./server.component.styl']
})

export class ServerComponent{ 

  @ViewChild(ItemComponentComponent) child;

  data : any[];

  constructor( private myservice : ServicesService) {
    this.showConfig();
  }

  showConfig() {
    this.myservice.getConfig().subscribe( (data:any) => {
      console.log(data.articles);
      this.data = data.articles
    })
  }

  myfunction(item) {
    console.log(item)
  }

}
