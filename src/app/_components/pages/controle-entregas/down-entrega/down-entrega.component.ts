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
    dataHoraCriacao: new Date(),
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

  imprimirControle(): void {
    let conteudo = '<div style="width: 70mm; font-size: 19px;">';
    this.entregas.forEach((entrega) => {
      conteudo += `<p style="font-family: Courier New, monospace; word-wrap: break-word;">${entrega.endereco} - R$${entrega.valor} - ${entrega.entregadorNome}</p>`;
    });
    conteudo += '</div>';

    const janelaImpressao = window.open('', '', 'width=300,height=600');
    if (janelaImpressao) {
      janelaImpressao.document.write(
        '<html><head><title>Controle de Entregas</title></head><body>'
      );
      janelaImpressao.document.write(conteudo);
      janelaImpressao.document.write('<script>window.print();</script>');
      janelaImpressao.document.write('</body></html>');
      janelaImpressao.document.close();
    }
  }
}
