import { Component, OnInit } from '@angular/core';
import {
  RegisEntregaService,
  Entrega,
  Entregador,
} from '../../../../_services/regis-entrega.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ENDERECOS } from '../enderecos';
import { ExportDataService } from '../../../../_services/export-data.service'; // Importe o serviço ExportDataService

@Component({
  selector: 'app-new-entrega',
  templateUrl: './new-entrega.component.html',
  styleUrls: ['./new-entrega.component.scss'],
})
export class NewEntregaComponent implements OnInit {
  entrega: Entrega = {
    valor: '',
    endereco: '',
    observacoes: '',
    entregador: null,
    dataHoraCriacao: new Date(),
  };

  entregadores: Entregador[] = [];
  entregas: Entrega[] = [];
  enderecoControl: FormControl = new FormControl();
  filteredEnderecos!: Observable<string[]>;
  enderecos: string[] = ENDERECOS; // Usando a lista do arquivo externo

  constructor(
    private regisEntregaService: RegisEntregaService,
    private exportDataService: ExportDataService // Injete o serviço ExportDataService
  ) {}

  ngOnInit(): void {
    this.entregadores = this.regisEntregaService.getEntregadores();
    this.entregas = this.regisEntregaService.getEntregas();

    this._configurarFiltro();
  }

  private _configurarFiltro(): void {
    this.filteredEnderecos = this.enderecoControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const enderecosDinamicos = this.entregas.map((entrega) => entrega.endereco);
    return [...this.enderecos, ...enderecosDinamicos].filter((endereco) =>
      endereco.toLowerCase().includes(filterValue)
    );
  }

  cadastrarEntrega(): void {
    try {
      this.entrega.endereco = this.enderecoControl.value || '';
      this.entrega.dataHoraCriacao = new Date(); // Atribui a data/hora atual no momento do cadastro
      this.regisEntregaService.cadastrarEntrega(this.entrega);
      this.entregas = this.regisEntregaService.getEntregas();

      this.entrega = {
        valor: '',
        endereco: '',
        observacoes: '',
        entregador: null,
        dataHoraCriacao: new Date(), // Reseta o novo campo
      };
      this.enderecoControl.setValue('');
    } catch (error) {
      alert(error);
    }
  }

  removerEntrega(index: number): void {
    this.regisEntregaService.removerEntrega(index);
    this.entregas = this.regisEntregaService.getEntregas();
  }

  exportarParaExcel(): void {
    this.exportDataService.exportarParaExcel(this.entregas); // Passe o array de entregas para o serviço
  }

  selecionarEndereco(endereco: string): void {
    this.enderecoControl.setValue(endereco);
  }

  onEntregadorChange(): void {
    if (!this.entrega.entregador) {
      this.entrega.entregador = null;
    }
  }

  formatarValor(): void {
    if (this.entrega && this.entrega.valor) {
      let valorFormatado = this.entrega.valor.replace(/\D/g, ''); // Remove tudo que não for número
      if (valorFormatado.length > 2) {
        valorFormatado =
          valorFormatado.slice(0, -2) + ',' + valorFormatado.slice(-2);
      }
      this.entrega.valor = valorFormatado;
    }
  }
}
