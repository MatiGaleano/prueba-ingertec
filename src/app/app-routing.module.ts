import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImagePopupComponent } from './components/image-popup/image-popup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'popup', component: ImagePopupComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
