import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test } from './test/test';
import { Emp } from './emp/emp';

const routes: Routes = [
  { path: 'testpath', component: Test  },
  { path: 'emppath', component: Emp  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
