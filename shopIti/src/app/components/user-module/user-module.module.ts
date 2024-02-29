import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { AuthGuard } from 'src/app/gaurds/auth.guard';
const routes:Routes=[
  {path:'',redirectTo:'/user/user',pathMatch:'full'},
  {path:'user',component:UserProfileComponent,canActivate:[AuthGuard]},
  {path:'edit',component:EditUserProfileComponent,canActivate:[AuthGuard]}
]


@NgModule({
  declarations: [
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModuleModule { }
