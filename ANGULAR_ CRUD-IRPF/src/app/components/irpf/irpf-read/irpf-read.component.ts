import { Component, OnInit } from '@angular/core';
import { Irpf } from '../irpf.model';
import { IrpfService } from '../irpf.service';
import { IrpfUpdateComponent } from '../irpf-update/irpf-update.component';
import { IrpfDeleteComponent } from '../irpf-delete/irpf-delete.component';
import { ComponentType } from '@angular/cdk/portal';
import { Observable } from 'rxjs';
import { DataColumnTable } from 'app/components/_generics/table/data-column-table.model';

@Component({
  selector: 'app-irpf-read',
  templateUrl: './irpf-read.component.html',
  styleUrls: ['./irpf-read.component.css']
})
export class IrpfReadComponent implements OnInit {

  updateComponent: ComponentType<unknown> = IrpfUpdateComponent;
  deleteComponent: ComponentType<unknown> = IrpfDeleteComponent;
  loading: Boolean = true;
  irpfs: Irpf[];
  changeIrpfs$: Observable<any>

  headers: DataColumnTable[] = [
    { text: 'Id', value: "id" },
    { text: 'Nome', value: "nome" },
    { text: 'Bairro', value: "bairro" },
    { text: 'Cidade', value: "cidade" },
    { text: 'Salário', value: "rendimentosTributaveis", prefix: 'R$', type: 'money' },
    { text: 'Ações', actions: ['edit', 'delete'] },
  ]

  constructor(private irpfService: IrpfService) { }

  ngOnInit(): void { }

  loadIrpfs = async () => {
    this.irpfs = await this.irpfService.read();
  }
}
