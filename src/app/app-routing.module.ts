import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SevasComponent } from './sevas/sevas.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { TemplePicsComponent } from './gallery/temple-pics/temple-pics.component';
import { InaugurationPicsComponent } from './gallery/inauguration-pics/inauguration-pics.component';
import{ LightgalleryModule } from 'lightgallery/angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConstructionComponent } from './gallery/construction/construction.component';
import { PoliticalComponent } from './gallery/political/political.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'sevas', component: SevasComponent},
  {path:'events', component: EventsComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'gallery/temple', component: TemplePicsComponent},
  {path:'gallery/inauguration', component: InaugurationPicsComponent},
  {path:'gallery/construction', component: ConstructionComponent},
  {path:'gallery/political', component: PoliticalComponent},

  {path:'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LightgalleryModule, ModalModule.forRoot(),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
