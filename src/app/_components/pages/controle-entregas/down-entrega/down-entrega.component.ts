import { Component } from '@angular/core';
import {
  RegisEntregaService,
  Entrega,
  Entregador,
} from '../../../../_services/regis-entrega.service';

@Component({
  selector: 'app-down-entrega',
  templateUrl: './down-entrega.component.html',
  styleUrl: './down-entrega.component.scss',
})
export class DownEntregaComponent {
  constructor(private regisEntregaService: RegisEntregaService) {}

  entrega: Entrega = {
    valor: null,
    endereco: '',
    observacoes: '',
    entregador: null,
  };

  entregadores: Entregador[] = [];
  entregas: Entrega[] = [];
  entregadorSelecionado: string = ''; // Agora estamos armazenando o nome do entregador

  ngOnInit(): void {
    this.entregadores = this.regisEntregaService.getEntregadores();
    this.entregas = this.regisEntregaService.getEntregas();
  }

  // Agora o filtro compara o nome do entregador
  get entregasFiltradas() {
    if (!this.entregadorSelecionado) return this.entregas; // Se não houver entregador selecionado, exibe todas as entregas
    return this.entregas.filter(
      (entrega) => entrega.entregadorNome === this.entregadorSelecionado
    );
  }

  removerEntrega(index: number): void {
    this.regisEntregaService.removerEntrega(index);
    this.entregas = this.regisEntregaService.getEntregas();
  }
}
