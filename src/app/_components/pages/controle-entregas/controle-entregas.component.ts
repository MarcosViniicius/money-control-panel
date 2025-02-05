import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RegisEntregaService,
  Entrega,
  Entregador,
} from '../../../_services/regis-entrega.service';
import { ExportDataService } from '../../../_services/export-data.service';

@Component({
  selector: 'app-controle-entregas',
  templateUrl: './controle-entregas.component.html',
  styleUrl: './controle-entregas.component.scss',
})
export class ControleEntregasComponent {
  constructor(
    private regisEntregaService: RegisEntregaService,
    private ExportDataService: ExportDataService
  ) {}
  private entregas: Entrega[] = [];
  ngOnInit(): void {
    // Adiciona o ngOnInit
    this.entregas = this.regisEntregaService.getEntregas();
  }

  exportarParaExcel(): void {
    this.ExportDataService.exportarParaExcel(this.entregas);
  }
}
