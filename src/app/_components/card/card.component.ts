import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true, alias: 'titleCard' }) title: string = '';
  @Input({ required: true, alias: 'textCard' }) text: string = '';
}
