import { Injectable } from '@angular/core';

export interface Entrega {
  valor: string | null;
  endereco: string;
  observacoes: string;
  entregador: number | null;
  entregadorNome?: string;
  dataHoraCriacao: Date;
}

export interface Entregador {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class RegisEntregaService {
  private entregas: Entrega[] = [];
  private entregadores: Entregador[] = [
    { id: 1, nome: 'Edilson' },
    { id: 2, nome: 'Gabriel' },
    { id: 3, nome: 'Alessandro' },
    { id: 4, nome: 'Henrique' },
    { id: 5, nome: 'Outro' },
  ];

  constructor() {
    this.carregarEntregas();
  }

  carregarEntregas(): void {
    const entregasSalvas = localStorage.getItem('entregas');
    if (entregasSalvas) {
      try {
        this.entregas = JSON.parse(entregasSalvas);
      } catch (error) {
        console.error('Erro ao carregar entregas do localStorage:', error);
        // Lidar com o erro, por exemplo, definir this.entregas como um array vazio
        this.entregas = [];
      }
    }
  }

  getEntregas(): Entrega[] {
    return this.entregas;
  }

  getEntregadores(): Entregador[] {
    return this.entregadores;
  }

  cadastrarEntrega(entrega: Entrega): void {
    if (
      entrega.valor !== null &&
      entrega.endereco.trim() !== '' &&
      entrega.entregador !== null
    ) {
      const entregador = this.entregadores.find(
        (e) => e.id === entrega.entregador
      );

      const novaEntrega = {
        ...entrega,
        entregadorNome: entregador ? entregador.nome : 'Desconhecido',
      };

      this.entregas.push(novaEntrega);
      localStorage.setItem('entregas', JSON.stringify(this.entregas));
    } else {
      throw new Error('Por favor, preencha todos os campos obrigatórios!');
    }
  }

  removerEntrega(index: number): void {
    this.entregas.splice(index, 1);
    localStorage.setItem('entregas', JSON.stringify(this.entregas));
  }
}
