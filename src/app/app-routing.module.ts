import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailRouterLinkComponent} from "./hero-detail-router-link/hero-detail-router-link.component";

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailRouterLinkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
