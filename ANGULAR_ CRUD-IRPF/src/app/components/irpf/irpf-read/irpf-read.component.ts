import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Irpf } from '../irpf.model';
import { IrpfService } from '../irpf.service';
import { IrpfUpdateComponent } from '../irpf-update/irpf-update.component';
import { IrpfDeleteComponent } from '../irpf-delete/irpf-delete.component';
import { ComponentType } from '@angular/cdk/portal';
import {Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-irpf-read',
  templateUrl: './irpf-read.component.html',
  styleUrls: ['./irpf-read.component.css']
})
export class IrpfReadComponent implements OnChanges {

  updateComponent: ComponentType<unknown> = IrpfUpdateComponent;
  deleteComponent: ComponentType<unknown> = IrpfDeleteComponent;
  loading: Boolean = true;
  irpfs: Irpf[];
  changeIrpfs$ : Observable<any>

  teste: string;


  headers = [
    { text: 'Id', value: "id" },
    { text: 'Nome', value: "nome" },
    { text: 'Bairro', value: "bairro" },
    { text: 'Cidade', value: "cidade" },
    { text: 'Salário', value: "rendimentosTributaveis", prefix: 'R$' },
    { text: 'Ações', actions: ['edit', 'delete'] },
  ]

  constructor(private irpfService: IrpfService, 
    // private store: Store<{changeIrpfs: Boolean}>
    ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes :>> ', changes);
    // throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    // this.changeIrpfs$ = this.store.pipe(select('changeIrpfs'))
  }

  loadIrpfs = async () => {
    const resp = await this.irpfService.read();
    if(resp) this.irpfs = resp;
  }
}
