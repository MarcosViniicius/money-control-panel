import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true, alias: 'buttonText' }) text: string = '';
  @Input({ alias: 'buttonStyle' }) style: 'green' | 'red' | 'blue' = 'green';
}
