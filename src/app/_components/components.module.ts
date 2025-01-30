import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ControleEntregasComponent } from './pages/controle-entregas/controle-entregas.component';
import { NewEntregaComponent } from './pages/controle-entregas/new-entrega/new-entrega.component';
import { DownEntregaComponent } from './pages/controle-entregas/down-entrega/down-entrega.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    AppRoutingModule,
  ],
  declarations: [
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    DashboardComponent,
    ControleEntregasComponent,
    NewEntregaComponent,
    DownEntregaComponent,
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    DashboardComponent,
    ControleEntregasComponent,
    NewEntregaComponent,
    DownEntregaComponent,
  ],
})
export class ComponentsModule {}
