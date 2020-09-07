import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';

import { NovoChamado } from '../../model/novoChamado'

@Component({
  selector: 'app-chamado-detalhe',
  templateUrl: './chamado-detalhe.component.html',
  styleUrls: ['./chamado-detalhe.component.css']
})
export class ChamadoDetalheComponent implements OnInit {

  model = new NovoChamado()
  motivo = []

  nomeinfo = false
  isLoadingResults = false;
  nrSelect: string
  id_paciente: number;
  data_criacao: string;
  descricao: string;
  id_motivo: number;
  nome_paciente: string;
  numero_chamado: number;
  status: string;
  id: string;

  constructor(private router: Router, private route: ActivatedRoute, private _api: ApiService) { }

  ngOnInit() {

    this.getProduto(this.route.snapshot.params['id']);
    this._api.getMotivo()
      .subscribe(res => {
        this.motivo = res.response;
        console.log(this.motivo);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });

  }

  getProduto(id) {
    console.log(id)
    if (id != undefined) {
      this._api.getChamado(id).subscribe(data => {
        this.id = data.data[0]._id
        let value = data.data[0]._source;

        this.id_paciente = value.id_paciente;
        this.data_criacao = value.data_criacao;
        this.descricao = value.descricao;
        this.id_motivo = value.id_motivo;
        this.nome_paciente = value.nome_paciente;
        this.numero_chamado = value.numero_chamado;
        this.status = value.status;

        this.nrSelect = this.id_motivo.toString()

      });
    }
  }


  updateChamado(form: NgForm) {
    if (form.value.descricao != undefined || form.value.motivo != undefined || form.value.status != undefined) {
      const date = new Date();
      const ano = date.getFullYear();
      const mes = date.getMonth();
      const dia = date.getDate();

      const data = {
        id_paciente: this.id_paciente,
        nome_paciente: this.nome_paciente,
        descricao: form.value.descricao,
        id_motivo: form.value.motivo,
        data_criacao: `${dia}/${mes}/${ano}`,
        numero_chamado: this.numero_chamado,
        status: form.value.status
      }
      console.log(data)
      this._api.updateChamado(data)
        .subscribe(res => {
          this.isLoadingResults = false;
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }

  }
  onClickDelete() {
    this._api.deleteChamado(this.id)
      .subscribe(res => {
        this.isLoadingResults = false;
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
