import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FaceSnapListComponent} from './components/face-snap-list/face-snap-list.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
