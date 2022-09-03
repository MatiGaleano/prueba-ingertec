import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { HomeComponent } from './components/home/home.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImagePopupComponent } from './components/image-popup/image-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent,
    HomeComponent,
    TextareaComponent,
    ImagePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
