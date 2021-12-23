import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForroMainComponent } from './forro-main/forro-main.component';

const routes: Routes = [
  { path: '', component: ForroMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
