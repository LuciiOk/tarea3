import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerServiceComponent } from './pages/customer-service/customer-service.component';
import { HomeComponent } from './pages/home/home.component'
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'noticias', component: NewsComponent},
  {path: 'servicio-al-cliente', component: CustomerServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
