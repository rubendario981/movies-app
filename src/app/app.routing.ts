import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "details/:id", component: DetailsComponent, },
  { path: "movies", component: MoviesComponent, },
  { path: "series", component: SeriesComponent, },
  { path: "favorites", component: FavoritesComponent, },
  { path: "trend", component: TrendingComponent, },
  { path: "login", component: LoginComponent, },
  { path: "signup", component: SignupComponent, },
  { path: "**", component: ErrorPageComponent, },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);