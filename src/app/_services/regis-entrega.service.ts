import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

export interface Entrega {
  valor: number | null;
  endereco: string;
  observacoes: string;
  entregador: number | null; // Permitir que seja null ou number
  entregadorNome?: string; // Nome do entregador (opcional)
}

export interface Entregador {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root', // Disponibiliza o serviço em toda a aplicação
})
export class RegisEntregaService {
  private entregas: Entrega[] = []; // Lista de entregas
  private entregadores: Entregador[] = [
    { id: 1, nome: 'Edilson' },
    { id: 2, nome: 'Gabriel' },
    { id: 3, nome: 'Alessandro' },
    { id: 4, nome: 'Tiago' },
    { id: 5, nome: 'Outro' },
  ];

  constructor() {
    this.carregarEntregas(); // Carrega as entregas ao inicializar o serviço
  }

  // Carrega as entregas do localStorage
  private carregarEntregas(): void {
    const entregasSalvas = localStorage.getItem('entregas');
    if (entregasSalvas) {
      this.entregas = JSON.parse(entregasSalvas);
    }
  }

  // Retorna a lista de entregas
  getEntregas(): Entrega[] {
    return this.entregas;
  }

  // Retorna a lista de entregadores
  getEntregadores(): Entregador[] {
    return this.entregadores;
  }

  // Adiciona uma nova entrega
  cadastrarEntrega(entrega: Entrega): void {
    if (
      entrega.valor !== null &&
      entrega.endereco.trim() !== '' &&
      entrega.entregador !== null
    ) {
      // Busca o nome do entregador pelo ID
      const entregador = this.entregadores.find(
        (e) => e.id === entrega.entregador
      );
      // Adiciona a entrega à lista
      this.entregas.push({
        ...entrega,
        entregadorNome: entregador ? entregador.nome : 'Desconhecido',
      });
      localStorage.setItem('entregas', JSON.stringify(this.entregas)); // Salva no localStorage
    } else {
      throw new Error('Por favor, preencha todos os campos obrigatórios!');
    }
  }

  // Remove uma entrega da lista
  removerEntrega(index: number): void {
    this.entregas.splice(index, 1); // Remove a entrega pelo índice
    localStorage.setItem('entregas', JSON.stringify(this.entregas)); // Atualiza o localStorage
  }

  // Exporta as entregas para um arquivo Excel
  exportarParaExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.entregas); // Converte os dados para uma planilha
    const workbook = XLSX.utils.book_new(); // Cria um arquivo Excel
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Entregas'); // Adiciona a planilha ao arquivo
    XLSX.writeFile(workbook, 'entregas.xlsx'); // Faz o download do arquivo
  }
}
