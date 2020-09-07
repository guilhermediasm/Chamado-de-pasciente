import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Chamado } from '../../model/chamados';
import { NovoChamado } from '../../model/novoChamado';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:3081';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getPacienteId(id: number) {
        const url = `${apiUrl}/paciente/buscarPacienteId?id_paciente=${id}`;

        return this.http.get<string>(url)
    }

    getChamado(id: number) {

        const url = `${apiUrl}/chamado/buscarChamados?numero_chamado=${id}`;

        return this.http.get<any>(url)

    }

    getTotal() {
        const url = `${apiUrl}/chamado/totalChamados`;
        return this.http.get<number>(url)
    }

    getListChamado(): Observable<Chamado[]> {
        const url = `${apiUrl}/chamado/lista`;
        return this.http.get<Chamado[]>(url)
            .pipe(
                tap(chamados => console.log('GET chamados certo')),
                catchError(this.handleError('getChamado', []))
            );
    }

    getBusca(numero_chamado: number){
        const url = `${apiUrl}/chamado/buscarChamados?numero_chamado=${numero_chamado}`;
        return this.http.get<any>(url)
            .pipe(
                tap(chamados => console.log('GET chamados certo')),
                catchError(this.handleError('getChamado', []))
            );
    }

    getMotivo(): Observable<any> {
        const url = `${apiUrl}/motivo`;
        return this.http.get<any>(url)

    }

    novochamado(novochamado) {
        const url = `${apiUrl}/chamado/criarChamado`;
        return this.http.post<NovoChamado>(url, novochamado, httpOptions).pipe(
            // tslint:disable-next-line:no-shadowed-variable
            tap((novochamado: Chamado) => console.log(`criou um novo chamado`)),
            catchError(this.handleError<NovoChamado>('novoChamado'))
        );
    }

    updateChamado(form): Observable<any> {
        const url = `${apiUrl}/chamado/editarChamado`;
        return this.http.put(url, form, httpOptions).pipe(
            tap(_ => console.log(`atualizado`)),
            catchError(this.handleError<any>('updateProduto'))
        );
    }

    deleteChamado(id: string): Observable<any> {
        const url = `${apiUrl}/chamado/excluirChamado?id=${id}`;

        return this.http.delete<Chamado>(url, httpOptions).pipe(
            tap(_ => console.log(`remove o produto com id=${id}`)),
            catchError(this.handleError<Chamado>('deleteProduto'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error);

            return of(result as T);
        };
    }
}