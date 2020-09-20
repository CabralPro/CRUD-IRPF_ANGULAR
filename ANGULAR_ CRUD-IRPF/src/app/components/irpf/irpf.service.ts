import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Irpf } from './irpf.model';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from "rxjs/operators";
import { EMPTY } from 'rxjs/internal/observable/empty';
import { BASE_URL } from 'app/constant';

@Injectable({
  providedIn: 'root'
})

export class IrpfService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  baseUrl = `${BASE_URL}/irpf`;

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(irpf: Irpf): Observable<Irpf> {
    return this.http.post<Irpf>(this.baseUrl, irpf).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Irpf[]> {
    return this.http.get<Irpf[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Irpf> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Irpf>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(irpf: Irpf): Observable<Irpf> {
    const url = `${this.baseUrl}/${irpf.id}`;
    return this.http.put<Irpf>(url, irpf).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Irpf> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Irpf>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

}
