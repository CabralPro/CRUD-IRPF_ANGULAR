import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() content: ComponentType<unknown>;
  @Input() callbackContinue: Function;
  @Input() _type: string;
  @Input() _object: object;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog() {
    if (this._type == 'confirmation') {
      let dialogRefConf: MatDialogRef<ConfirmationComponent, any>;
      dialogRefConf = this.dialog.open(ConfirmationComponent);
      dialogRefConf.componentInstance.callback = this.callbackContinue;
    } else {
      let dialogRef: any;
      dialogRef = this.dialog.open(this.content, { height: '85vh' });
      dialogRef.componentInstance._object = this._object;
    }
  }
}

