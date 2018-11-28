import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ItemComponentComponent} from './item-component/item-component.component'
import {ContactComponentComponent} from './contact-component/contact-component.component'
import {AboutMeComponent} from './about-me/about-me.component'
import {ServersComponent} from './servers/servers.component'
import {NotFoundComponent} from './not-found/not-found.component'

const routes : Routes = [

  { 
    path:'contact', 
    component: ContactComponentComponent
  },

  {
    path:'aboutMe', 
    component : AboutMeComponent
  },

  {
    path : 'item', 
    component :ItemComponentComponent,
    data : {title : 'pasando datos de la ruta'}
  },

  {
    path : 'cards-list', 
    component : ServersComponent,
    data : {title : 'pasando datos de la ruta'}
  },

  { 
    path : '',
    redirectTo : '/cards-list',
    pathMatch : 'full'
  },

  { 
    path : '**',
    component : NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
