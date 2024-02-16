import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './components/mainLayout/home/home.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapCart4, bootstrapTrash3, bootstrapInfoCircleFill, bootstrapList } from '@ng-icons/bootstrap-icons';
import { cssAdd } from '@ng-icons/css.gg';
import { ProductListComponent } from './components/mainLayout/prd/product-list/product-list.component';
import { LightBoxDirective } from './directive/light-box.directive';
import { DolarToEgyPipe } from './pipe/dolar-to-egy.pipe';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './components/mainLayout/prd/product-list/category/category.component';
import { MainLayoutComponent } from './components/mainLayout/main-layout/main-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductDetailsComponent } from './components/mainLayout/prd/product-list/product-details/product-details.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    DolarToEgyPipe,
    CategoryComponent,
    MainLayoutComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent
    

  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ bootstrapCart4, bootstrapTrash3, bootstrapInfoCircleFill,bootstrapList,cssAdd}),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
