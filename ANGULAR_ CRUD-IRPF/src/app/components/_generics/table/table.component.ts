import { Component, OnInit, Input } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { DataColumnTable } from './data-column-table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() list: any;
  @Input() headers: DataColumnTable[];
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

  convertMoney(value: number ): string{
    return value.toFixed(2).replace('.',',');
  }
}
