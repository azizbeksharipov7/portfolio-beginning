import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AbautComponent } from './abaut/abaut.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AbautComponent },
  { path: 'my-work', component: MyWorkComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
