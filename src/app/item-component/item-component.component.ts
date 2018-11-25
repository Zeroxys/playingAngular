import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.styl']
})
export class ItemComponentComponent implements OnInit {

  @Input()  childMessage : string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe( params => {
      console.log(params)
    })
  
  }

}
