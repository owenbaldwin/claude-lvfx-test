import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductionBreakdownComponent } from './components/production-breakdown/production-breakdown.component';
import { BreakdownRowComponent } from './components/breakdown-row/breakdown-row.component';

// Services
import { ProductionService } from './services/production.service';

const routes: Routes = [
  { path: '', redirectTo: '/breakdown', pathMatch: 'full' },
  { path: 'breakdown', component: ProductionBreakdownComponent },
  { path: '**', redirectTo: '/breakdown' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductionBreakdownComponent,
    BreakdownRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
