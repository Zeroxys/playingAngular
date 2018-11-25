import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.styl']
})
export class ContactComponentComponent implements OnInit {

  
  params : any[];

  constructor(private route: ActivatedRoute,) { }



  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      console.log(params)
    })
  }

}
