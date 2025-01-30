import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RegisEntregaService,
  Entrega,
  Entregador,
} from '../../../_services/regis-entrega.service';

@Component({
  selector: 'app-controle-entregas',
  templateUrl: './controle-entregas.component.html',
  styleUrl: './controle-entregas.component.scss',
})
export class ControleEntregasComponent {
  constructor(private regisEntregaService: RegisEntregaService) {}
  exportarParaExcel(): void {
    this.regisEntregaService.exportarParaExcel();
  }
}
