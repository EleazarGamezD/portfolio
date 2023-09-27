import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';


const routes: Routes = [
    // { path: '', redirectTo: 'body', pathMatch: 'full' },
    // { path: 'body', component: BodyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
