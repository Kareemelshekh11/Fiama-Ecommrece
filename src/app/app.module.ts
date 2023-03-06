import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './Components/slider/slider.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './Components/portfolio-details/portfolio-details.component';
import { GoogleLocationComponent } from './Components/google-location/google-location.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ComingSoonComponent } from './Components/coming-soon/coming-soon.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ShopGridComponent } from './Components/shop-grid/shop-grid.component';
import { ShopDetailsComponent } from './Components/shop-details/shop-details.component';
import { NewsComponent } from './Components/news/news.component';
import { NewsGridComponent } from './Components/news-grid/news-grid.component';
import { NewsDetailsComponent } from './Components/news-details/news-details.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { ScrollTopComponent } from './Components/scroll-top/scroll-top.component';
import { FaqComponent } from './Components/faq/faq.component';
import { AccountComponent } from './Components/account/account.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SliderProductsComponent } from './slider-products/slider-products.component';
import { SliderNewsComponent } from './slider-news/slider-news.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PortfolioComponent,
    PortfolioDetailsComponent,
    GoogleLocationComponent,
    NotfoundComponent,
    ComingSoonComponent,
    ShopComponent,
    ShopGridComponent,
    ShopDetailsComponent,
    NewsComponent,
    NewsGridComponent,
    NewsDetailsComponent,
    ContactComponent,
    CartComponent,
    CheckoutComponent,
    BrandsComponent,
    ScrollTopComponent,
    FaqComponent,
    AccountComponent,
    WishlistComponent,
    QuickViewComponent,
    AddToCartComponent,
    SliderProductsComponent,
    SliderNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
