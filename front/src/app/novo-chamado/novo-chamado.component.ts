import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';

import { NovoChamado } from '../../model/novoChamado'

@Component({
  selector: 'app-novo-chamado',
  templateUrl: './novo-chamado.component.html',
  styleUrls: ['./novo-chamado.component.css']
})
export class NovoChamadoComponent implements OnInit {

  model = new NovoChamado()
  motivo = []
  nomePaciente = "";
  nomeinfo = false
  isLoadingResults = false;
  
  constructor(private router: Router, private _api: ApiService) { }


  ngOnInit() {
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

  addChamado(form: NgForm) {
    this.isLoadingResults = true;
    const date = new Date();
    const ano = date.getFullYear();
    const mes = date.getMonth();
    const dia = date.getDate();
    console.log(form)
    this._api.getTotal()
      .subscribe(res => {
        let total = 1000 + res
        const data = {
          id_paciente: form.value.id_paciente,
          nome_paciente: this.nomePaciente,
          descricao: form.value.descricao,
          id_motivo: form.value.motivo.id_motivo,
          data_criacao: `${dia}/${mes}/${ano}`,
          numero_chamado: total,
          status: form.value.status
        }
        this._api.novochamado(data)
          .subscribe(res => {
            this.isLoadingResults = false;
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          });
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });



  }

  buscPaciente(value) {
    if (value != "") {
      this._api.getPacienteId(value)
        .subscribe(res => {
          console.log(res)
          if (res == " ") {
            this.nomeinfo = true
            this.nomePaciente = res
          } else {
            this.nomeinfo = false
            this.nomePaciente = res
          }

        }, err => {
          console.log(err);
        });
    } else {
      this.nomeinfo = false
      this.nomePaciente = ""
    }

    console.log(value);
  }
}
