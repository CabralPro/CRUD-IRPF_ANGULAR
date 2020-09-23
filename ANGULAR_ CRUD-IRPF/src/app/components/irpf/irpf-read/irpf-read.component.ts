import { Component, OnInit } from '@angular/core';
import { Irpf } from '../irpf.model';
import { IrpfService } from '../irpf.service';
import { IrpfUpdateComponent } from '../irpf-update/irpf-update.component';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-irpf-read',
  templateUrl: './irpf-read.component.html',
  styleUrls: ['./irpf-read.component.css']
})
export class IrpfReadComponent implements OnInit {

  updateComponent: ComponentType<unknown> = IrpfUpdateComponent;

  irpfs: Irpf[];
  headers = [
    { text: 'Id', value: "id" },
    { text: 'Nome', value: "nome" },
    { text: 'Bairro', value: "bairro" },
    { text: 'Cidade', value: "cidade" },
    { text: 'Salário', value: "rendimentosTributaveis", prefix: 'R$' },
    { text: 'Ações', actions: ['edit', 'delete'] },
  ]

  constructor(private irpfService: IrpfService) { }

  ngOnInit(): void {
    this.fillTable();
  }

  deleteIrpf = (irpfSelected: Irpf) => {
    return () => {
      this.irpfService.delete(irpfSelected.id).subscribe(() => {
        this.irpfService.showMessage("IRPF excluido com sucesso!");
        this.fillTable();
      });
    }
  }

  fillTable(){
    this.irpfService.read().subscribe(irpfs => this.irpfs = irpfs)
  }
}
