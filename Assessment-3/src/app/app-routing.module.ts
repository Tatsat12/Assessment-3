import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const route : Route[] = [
  {path:'list',component:ListComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'',redirectTo:'/list',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
