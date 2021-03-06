import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagePage } from './package.page';

const routes: Routes = [
  {
    path: '',
    component: PackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagePageRoutingModule { }
