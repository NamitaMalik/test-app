import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'child-route', component: ChildComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
  RouterModule.forRoot(
    appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
