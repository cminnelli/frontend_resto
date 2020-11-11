import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestomenuComponent } from './components/restomenu/restomenu.component';

const appRoutes: Routes = [
  { path: '', component: RestomenuComponent},
  { path: ':resto', component: RestomenuComponent},





  // { path: '3dprint/:rub/:sec', component: PrincipalComponent},
  // { path: '3dprint/:rub/:sec/:pro', component: ProductoItemComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

