import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule, routing } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [AppRoutingModule, routing, FormsModule],
  declarations: [
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    DashboardComponent,
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    DashboardComponent,
  ],
})
export class ComponentsModule {}
