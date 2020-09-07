import { Component } from '@angular/core';
import { ApiService } from './service/api.service';
import { Chamado } from '../model/chamados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularFullstackTeste';

  constructor(private _api: ApiService) { }

  ngOnInit() {
    
  }

  openCall(event) {
    event.preventDefault();
  }
}
