import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { IrpfService } from '../irpf.service';


@Component({
  selector: 'app-irps-dashboard',
  templateUrl: './irps-dashboard.component.html',
  styleUrls: ['./irps-dashboard.component.css']
})
export class IrpsDashboardComponent implements OnInit {

  iprfsCount: number;

  constructor(private irpfService: IrpfService) { }

  ngOnInit() {}

  loadIrpfs = async () => {
    const resp = await this.irpfService.read();
    if(resp) this.iprfsCount = resp.length;
  }

}
