import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sessions = [{ name: '', type: '' }];
  model = {
    name: '',
    type: '',
  };

  @ViewChild('form') form!: ElementRef;

  showForm() {
    this.form.nativeElement.classList.remove('d-none');
  }

  createSession() {
    this.sessions.push({ name: this.model.name, type: this.model.type });
    alert(
      'A sessão com o nome:' +
        this.sessions[this.sessions.length - 1].name +
        ' e tipo:' +
        this.sessions[this.sessions.length - 1].type +
        ' foi criado com sucesso!'
    );
    // Aqui você pode enviar `sessions.name` para uma API ou usá-lo conforme necessário
  }
}
