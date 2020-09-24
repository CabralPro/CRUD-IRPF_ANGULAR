import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { REGEX_CPF_CNPJ, REGEX_TITULO_ELEITOR, REGEX_CEP } from './regex';
import { IrpfService } from '../irpf.service';
import { Irpf } from '../irpf.model';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ChangeStateIprfs } from '../irpf-store';

enum TypeForm {
  Create = 'create',
  Update = 'update',
  Delete = 'delete'
}

@Component({
  selector: 'app-irpf-form',
  templateUrl: './irpf-form.component.html',
  styleUrls: ['./irpf-form.component.css']
})
export class IrpfFormComponent implements OnInit {

  @Input() _type: string;
  @Input() irpfSelected: Irpf;
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    // cpfCnpj: new FormControl('', [Validators.required, Validators.pattern(REGEX_CPF_CNPJ)]),
    // email: new FormControl('', [Validators.required, Validators.email]),
    // dt_nascimento: new FormControl('', [Validators.required]),
    // tituloEleitoral: new FormControl('', [Validators.required, Validators.pattern(REGEX_TITULO_ELEITOR)]),
    // rendimentosTributaveis: new FormControl('', [Validators.required]),
    // endereco: new FormControl('', [Validators.required]),
    // cidade: new FormControl('', [Validators.required]),
    // bairro: new FormControl('', [Validators.required]),
    // cep: new FormControl('', [Validators.required, Validators.pattern(REGEX_CEP)]),
  });

  constructor(private irpfService: IrpfService,
    private dialogRef: MatDialog,
    private store: Store<{ changeIrpfs: Boolean }>
  ) { }



  ngOnInit(): void {
    if (this._type != 'create')
      (<any>Object).entries(this.form.controls).forEach(([key, control]) => {
        control.setValue(this.irpfSelected[key]);
      })

    if (this._type == 'delete')
      this.form.disable();

  }

  createIrpf = async () => {
    const resp = await this.irpfService.create(this.form.value);
    if (resp) this.irpfService.showMessage('Irpf criado!')
    return resp;
  }

  updateIrpf = async () => {
    const resp = await this.irpfService.update(this.form.value);
    if (resp) this.irpfService.showMessage("IRPF atualizado com sucesso!");
    this.dialogRef.closeAll()
    return resp;
  }

  deleteIrpf = () => {
    return async () => {
      const resp = await this.irpfService.delete(this.irpfSelected.id);
      if (resp) this.irpfService.showMessage("IRPF excluido com sucesso!");
      this.store.dispatch(new ChangeStateIprfs());
    }
  }

  get labelSubmitButton() {
    switch (this._type) {
      case TypeForm.Create:
        return 'Entregar Declaração';
      case TypeForm.Delete:
        return 'Deletar';
      case TypeForm.Update:
        return 'Salvar Alterações';
    }
  }

  get typeForm() {
    switch (this._type) {
      case TypeForm.Create:
        return 'Cadastro';
      case TypeForm.Delete:
        return 'Deleção';
      case TypeForm.Update:
        return 'Atualização';
    }
  }

  get currentCallback() {
    switch (this._type) {
      case TypeForm.Create:
        return this.createIrpf;
      case TypeForm.Delete:
        return this.deleteIrpf;
      case TypeForm.Update:
        return this.updateIrpf;
    }
  }

}
