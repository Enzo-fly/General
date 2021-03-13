import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from "./components/error/error.component";
import {FormComponent} from "./components/form/form.component";

const routes: Routes = [
  {path:'', component: FormComponent},
  {path:'form', component: FormComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
