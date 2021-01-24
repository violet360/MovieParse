import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import { FirstAppComponent } from './first-app/first-app.component';


const routes: Routes = [
	{path:'list', component:ListComponent},
	{path:'', component:FirstAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
