import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinoListComponent } from './dino-list/dino-list.component';
import { DinoDetailsComponent } from './dino-details/dino-details.component';
import { NewDinoComponent } from './new-dino/new-dino.component';
import { FormsModule } from '@angular/forms';
import { DinoModule } from './dino.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DinoListComponent,
    DinoDetailsComponent,
    NewDinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DinoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
