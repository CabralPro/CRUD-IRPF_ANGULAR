import { Component, OnInit, Input } from '@angular/core';
import { IrpfService } from '../irpf.service';
import { Irpf } from '../irpf.model';

@Component({
  selector: 'app-irpf-delete',
  templateUrl: './irpf-delete.component.html',
  styleUrls: ['./irpf-delete.component.css']
})
export class IrpfDeleteComponent implements OnInit {
  @Input() _object: Irpf;
  
  constructor(private irpfService: IrpfService) { }

  ngOnInit(): void {
  }



}
