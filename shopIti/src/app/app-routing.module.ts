import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { CategoryComponent } from './components/mainLayout/prd/product-list/category/category.component';
import { ProductListComponent } from './components/mainLayout/prd/product-list/product-list.component';
import { HomeComponent } from './components/mainLayout/home/home.component';
import { MainLayoutComponent } from './components/mainLayout/main-layout/main-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductDetailsComponent } from './components/mainLayout/prd/product-list/product-details/product-details.component';
import { AuthGuard } from './gaurds/auth.guard';


const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductListComponent},
    {path:'category',component:CategoryComponent},
    {path:'details',component:ProductDetailsComponent},
    {path:'products/:pid',component:ProductDetailsComponent,canActivate:[AuthGuard]},
  ]},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotFoundError}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
