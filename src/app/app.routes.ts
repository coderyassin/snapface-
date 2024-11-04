import { Routes } from '@angular/router';
import {FaceSnapListComponent} from './components/face-snap-list/face-snap-list.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {SingleFaceSnapComponent} from './components/single-face-snap/single-face-snap.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent }
];
