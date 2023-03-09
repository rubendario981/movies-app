import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './pages/details/details.component';
import { appRoutingProviders, routing } from './app.routing';
import { ErrorComponentComponent } from './pages/error-component/error-component.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    DetailsComponent,
    ErrorComponentComponent,
    ErrorPageComponent,
    MoviesComponent,
    SeriesComponent,
    TrendingComponent,
    FavoritesComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCarouselModule,
    routing, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
