import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overlay-loading',
  templateUrl: './overlay-loading.component.html',
  styleUrls: ['./overlay-loading.component.css']
})
export class OverlayLoadingComponent implements OnInit {
  @Input() isLoading: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
