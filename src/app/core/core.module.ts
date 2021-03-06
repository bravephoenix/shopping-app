import { NgModule } from '@angular/core';

import { AppRoutingModule } from './../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    // AppRoutingModule
  ],
  providers: [
    ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard
  ]
})
export class CoreModule { }
