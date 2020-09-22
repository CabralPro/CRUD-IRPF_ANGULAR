import { Component, OnInit, Input } from '@angular/core';
import { Irpf } from '../irpf.model';

@Component({
  selector: 'app-irpf-update',
  templateUrl: './irpf-update.component.html',
  styleUrls: ['./irpf-update.component.css']
})
export class IrpfUpdateComponent implements OnInit {
  @Input() _object: Irpf;

  constructor() { }

  ngOnInit(): void {
    console.log('this._object : UPDATE COMPONENT >> ', this._object);
  }

}
