import { Component, OnInit, Input } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() list: any;
  @Input() headers: object[];
  @Input() title: string;
  @Input() subtitle: string;
  @Input() loadItems: Function;
  @Input() updateComponent: ComponentType<unknown>;
  @Input() deleteComponent: ComponentType<unknown>;

  loading: Boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.executeLoadItems();
  }

  async executeLoadItems(){
    this.loading = true;
    await this.loadItems();
    this.loading = false;
  }
}
