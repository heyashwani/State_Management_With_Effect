import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  
    {
      path:"",
      redirectTo:"counter",
      pathMatch:"full"
    },
    {
      path:"counter",
      component:MyCounterComponent
    },
    {
      path:"about",
      component:AboutComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
