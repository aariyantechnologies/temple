import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SevasComponent } from './sevas/sevas.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import{ LightgalleryModule } from 'lightgallery/angular';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TemplePicsComponent } from './gallery/temple-pics/temple-pics.component';
import { InaugurationPicsComponent } from './gallery/inauguration-pics/inauguration-pics.component';
import { PoliticalComponent } from './gallery/political/political.component';
import { ConstructionComponent } from './gallery/construction/construction.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, GalleryComponent, ContactComponent, EventsComponent, SevasComponent, TemplePicsComponent, InaugurationPicsComponent, PoliticalComponent, ConstructionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, CommonModule, BrowserAnimationsModule,
    CarouselModule.forRoot(), ModalModule.forRoot(),
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
