import { Component, OnInit } from '@angular/core';
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
    this.iprfsCount = resp.length;
  }

}
