import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AccountComponent } from './Components/account/account.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ComingSoonComponent } from './Components/coming-soon/coming-soon.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FaqComponent } from './Components/faq/faq.component';
import { GoogleLocationComponent } from './Components/google-location/google-location.component';
import { HomeComponent } from './Components/home/home.component';
import { NewsDetailsComponent } from './Components/news-details/news-details.component';
import { NewsGridComponent } from './Components/news-grid/news-grid.component';
import { NewsComponent } from './Components/news/news.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { PortfolioDetailsComponent } from './Components/portfolio-details/portfolio-details.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ShopDetailsComponent } from './Components/shop-details/shop-details.component';
import { ShopGridComponent } from './Components/shop-grid/shop-grid.component';
import { ShopComponent } from './Components/shop/shop.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'' , redirectTo:"home" , pathMatch:"full"},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'portfolio' , component:PortfolioComponent},
  {path:'portfolio-details' , component:PortfolioDetailsComponent},
  {path:'locations' , component:GoogleLocationComponent},
  {path:'coming-soon' , component:ComingSoonComponent},
  {path:'shop' , component:ShopComponent},
  {path:'shop-grid' , component:ShopGridComponent},
  {path:'shop-details' , component:ShopDetailsComponent},
  {path:'news' , component:NewsComponent},
  {path:'news-grid' , component:NewsGridComponent},
  {path:'news-details' , component:NewsDetailsComponent},
  {path:'contact' , component:ContactComponent},
  {path:'cart' , component:CartComponent},
  {path:'checkout' , component:CheckoutComponent},
  {path:'faq' , component:FaqComponent},
  {path:'brands' , component:BrandsComponent},
  {path:'account' , component:AccountComponent},
  {path:'wishlist' , component:WishlistComponent},
  {path:'**' , component:NotfoundComponent},
  {path:'404' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
