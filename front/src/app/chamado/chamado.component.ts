import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Chamado } from '../../model/chamados';

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.component.html',
  styleUrls: ['./chamado.component.css']
})
export class ChamadoComponent implements OnInit {
  id: string
  isLoadingResults = true
  displayedColumns: string[] = ['numero_chamado', 'id_paciente', 'nome_paciente', 'id_motivo', 'descricao', 'status', 'acoes'];
  mydataSource: Chamado[];

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this.getchamado()
  }

  getchamado(){
    this._api.getListChamado()
      .subscribe(res => {
        this.mydataSource = res;
        console.log(this.mydataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  onKey(event: any) {
    this.id = event.target.value
    if(this.id == null || this.id == ''){
      this.getchamado()
    }
  }

  openCall(event) {
    event.preventDefault();
  }

  busca() {
    this._api.getBusca(parseInt(this.id))
      .subscribe(res => {
        this.mydataSource = res;
        console.log(this.mydataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
