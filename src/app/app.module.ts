import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DogsComponent } from './dogs/dogs.component';
import { FoodComponent } from './food/food.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
const routes: Routes = [
{	
 path:'Dogs',
 component: DogsComponent
	},
 {
 path:'Food',
 component: FoodComponent
 },
 {
 path:'Gallery',
 component: GallaryComponent
 },
	{path:'Home',
	component: HomePageComponent},
	{path:'Product',
	component:ProductPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DogsComponent,
    FoodComponent,
    GallaryComponent,
    HomePageComponent,
    ProductPageComponent
  ],
  imports: [
	RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
