import { Component, OnInit } from '@angular/core';
import {
  RegisEntregaService,
  Entrega,
  Entregador,
} from '../../../../_services/regis-entrega.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ENDERECOS } from '../enderecos'; // Importando a lista de endereços do arquivo externo

@Component({
  selector: 'app-new-entrega',
  templateUrl: './new-entrega.component.html',
  styleUrls: ['./new-entrega.component.scss'],
})
export class NewEntregaComponent implements OnInit {
  entrega: Entrega = {
    valor: null,
    endereco: '',
    observacoes: '',
    entregador: null,
  };

  entregadores: Entregador[] = [];
  entregas: Entrega[] = [];
  enderecoControl: FormControl = new FormControl();
  filteredEnderecos!: Observable<string[]>;
  enderecos: string[] = ENDERECOS; // Usando a lista do arquivo externo

  constructor(private regisEntregaService: RegisEntregaService) {}

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

    // Obtém os endereços das entregas já cadastradas
    const enderecosDinamicos = this.entregas.map((entrega) => entrega.endereco);

    // Concatena os endereços fixos (do arquivo externo) com os dinâmicos (das entregas cadastradas)
    return [...this.enderecos, ...enderecosDinamicos].filter((endereco) =>
      endereco.toLowerCase().includes(filterValue)
    );
  }

  cadastrarEntrega(): void {
    try {
      this.entrega.endereco = this.enderecoControl.value || '';
      this.regisEntregaService.cadastrarEntrega(this.entrega);
      this.entregas = this.regisEntregaService.getEntregas();

      this.entrega = {
        valor: null,
        endereco: '',
        observacoes: '',
        entregador: null,
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
    this.regisEntregaService.exportarParaExcel();
  }

  selecionarEndereco(endereco: string): void {
    this.enderecoControl.setValue(endereco);
  }

  onEntregadorChange(): void {
    if (!this.entrega.entregador) {
      this.entrega.entregador = null;
    }
  }
}
