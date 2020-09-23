import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { REGEX_CPF_CNPJ, REGEX_TITULO_ELEITOR, REGEX_CEP } from './regex';
import { IrpfService } from '../irpf.service';
import { Irpf } from '../irpf.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-irpf-form',
  templateUrl: './irpf-form.component.html',
  styleUrls: ['./irpf-form.component.css']
})
export class IrpfFormComponent implements OnInit {

  @Input() _type: string;
  @Input() irpfUpdate: Irpf;

  constructor(private irpfService: IrpfService, private router: Router, private dialogRef: MatDialog) { }

  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    cpfCnpj: new FormControl('', [Validators.required, Validators.pattern(REGEX_CPF_CNPJ)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dt_nascimento: new FormControl('', [Validators.required]),
    tituloEleitoral: new FormControl('', [Validators.required, Validators.pattern(REGEX_TITULO_ELEITOR)]),
    rendimentosTributaveis: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required, Validators.pattern(REGEX_CEP)]),
  });


  ngOnInit(): void {
    if (this.irpfUpdate)
      (<any>Object).entries(this.form.controls).forEach(([key, control]) => {
        control.setValue(this.irpfUpdate[key]);
      })
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

}
