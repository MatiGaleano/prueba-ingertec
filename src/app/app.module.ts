import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
