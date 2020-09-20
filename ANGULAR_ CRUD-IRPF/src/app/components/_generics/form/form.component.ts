import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() callback: Function;

  constructor() { }

  ngOnInit(): void { }

  async submit() {
    if (!this.formGroup.valid) return;
    const resp = await this.callback();
    console.log('resp :>> ', resp);
    // if (resp.status == 200)
    // else
    //   alert("erro")
  }

}
