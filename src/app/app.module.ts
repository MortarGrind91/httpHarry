import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { CharactersComponent } from './characters/characters.component';

import { HttpClientModule }   from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    CharactersComponent,
    CharacterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
