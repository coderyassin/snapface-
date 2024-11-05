import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {filter, from, interval, map, Observable, tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  stringList: string[] = ['Hello', 'World', 'Angular'];
  stringObservable: Observable<string> = from(this.stringList);
  interval$!: Observable<string>;

  ngOnInit(): void {
    this.stringObservable.pipe(
      map(value => value + 'p1'),
      tap(value => this.logger(value))
    ).pipe(
      map(value => value + 'p2'),
      tap(value => this.logger(value))
    ).subscribe();
  }

  logger(text: string): void {
    console.log(`Log: ${text}`);
  }

}
