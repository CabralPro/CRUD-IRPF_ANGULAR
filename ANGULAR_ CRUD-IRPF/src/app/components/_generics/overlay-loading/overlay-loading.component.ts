import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overlay-loading',
  templateUrl: './overlay-loading.component.html',
  styleUrls: ['./overlay-loading.component.css']
})
export class OverlayLoadingComponent implements OnInit {
  @Input() isLoading: Boolean;
  @Input() execute: Function;
  loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.start();
  }

  async start() {
    if (this.execute)
      await this.execute();
    this.loading = false
  }

}
