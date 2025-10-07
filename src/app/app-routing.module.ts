import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CataloguePageComponent } from './pages/catalogue-page/catalogue-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'catalogue', component: CataloguePageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
