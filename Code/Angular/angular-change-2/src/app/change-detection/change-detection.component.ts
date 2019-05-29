import { Component, OnInit, Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeDetectionComponent implements OnInit {

  @Input() inObject:any;

  constructor() { }

  ngOnInit() {
  }



}