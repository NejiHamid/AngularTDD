import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxJsonapiModule} from 'ngx-jsonapi';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/authors',
    pathMatch: 'full'
  },
  {
    path: 'authors',
    loadChildren: './authors/authors.module#AuthorsModule'
  },
  ];
@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    NgxJsonapiModule.forRoot({
      url: environment.jsonapi_url
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
