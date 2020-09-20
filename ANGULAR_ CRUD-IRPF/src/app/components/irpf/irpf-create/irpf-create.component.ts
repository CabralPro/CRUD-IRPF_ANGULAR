import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Irpf } from "./irpf.model";
import { REGEX_CPF_CNPJ, REGEX_TITULO_ELEITOR } from '../../../constant';
import { FormComponent } from 'app/components/_generics/form/form.component';
import { Irpf } from '../irpf.model';
import { IrpfService } from '../irpf.service';

@Component({
  selector: 'app-irpf-create',
  templateUrl: './irpf-create.component.html',
  styleUrls: ['./irpf-create.component.css']
})
export class IrpfCreateComponent implements OnInit {

  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    // cpfCnpj: new FormControl('', [Validators.required, Validators.pattern(REGEX_CPF_CNPJ)]),
    cpfCnpj: new FormControl('', [Validators.required]),
    // email: new FormControl('', [Validators.required, Validators.email]),
    // dt_nascimento: new FormControl('', [Validators.required]),
    // tituloEleitoral: new FormControl('', [Validators.required, Validators.pattern(REGEX_TITULO_ELEITOR)]),
    // rendimentosTributaveis: new FormControl('', [Validators.required]),
    // endereco: new FormControl('', [Validators.required]),
    // cidade: new FormControl('', [Validators.required]),
    // bairro: new FormControl('', [Validators.required]),
    // cep: new FormControl('', [Validators.required]),
  });

  constructor(private irpfService: IrpfService) { }

  ngOnInit(): void {
  }

  createIrpf = () => {
    this.irpfService.create(this.form.value).subscribe(() => {
      this.irpfService.showMessage('Irpf criado!')
      // this.router.navigate(['/products'])
    })
  }

}
