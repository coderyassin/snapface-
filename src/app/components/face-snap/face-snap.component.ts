import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../../models/face-snap';
import {NgClass, NgStyle, UpperCasePipe} from '@angular/common';
import {FaceSnapsService} from '../../services/face-snaps.service';
import {SnapType} from '../../models/snap-type.type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
