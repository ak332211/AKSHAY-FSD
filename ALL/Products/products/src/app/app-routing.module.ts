import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [ {path:'', component:AddComponent},
                          {path:'list', component:ListProductsComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
