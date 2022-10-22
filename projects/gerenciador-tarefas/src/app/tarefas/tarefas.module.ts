import { RouterModule } from '@angular/router';
import { TarefaService } from './shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar';
import { FormsModule } from '@angular/forms';
import { CadastroTarefaComponent } from './cadastro';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastroTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [TarefaService]
})
export class TarefasModule { }
