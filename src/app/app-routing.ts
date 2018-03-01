import { NgModule } from '@angular/core';
import { Routes, RouterModule,LoadChildren } from '@angular/router';
import { HomeComponent} from './pages/home/home.component'
import { NotFoundComponent} from './pages/not-found/not-found.component'
import { OperationsComponent} from './views/operations/operations.component'


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "operations",
   /**loadChildren: "./views/operations/operations.module#OperationsModule"/** */
   component:OperationsComponent
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
