import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Entrega } from './regis-entrega.service'; // Importe a interface Entrega

@Injectable({
  providedIn: 'root',
})
export class ExportDataService {
  private entregas: Entrega[] = [];

  constructor() {}

  exportarParaExcel(entregas: Entrega[]): void {
    // Aceita o array de entregas como argumento
    const worksheet = XLSX.utils.json_to_sheet(entregas);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Entregas');
    XLSX.writeFile(workbook, 'entregas.xlsx');
  }
}
