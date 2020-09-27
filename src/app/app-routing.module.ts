import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { DmtComponent } from './DMTmodule/dmt/dmt.component';

const routes: Routes = [
  { path: 'admin', component: AdminpanelComponent },
  { path: 'dmt', component: DmtComponent },
  { path: '',   redirectTo: '/admin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
