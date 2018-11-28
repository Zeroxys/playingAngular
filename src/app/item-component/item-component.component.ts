import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.styl']
})

export class ItemComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  data: any;
  url:any;

  ngOnInit() {

    this.route.queryParams.subscribe( params => {
      this.url = params.url
      this.data = params.item
      console.log(JSON.parse(JSON.stringify(params.item)))
    })
  
  }

}
