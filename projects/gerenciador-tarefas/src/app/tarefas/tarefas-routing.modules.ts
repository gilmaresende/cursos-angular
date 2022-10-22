import { ListarTarefaComponent } from './listar';
import { Routes } from '@angular/router';
import { CadastroTarefaComponent } from './cadastro';
export
  const TarefaRoutes: Routes = [
    { path: 'tarefas', redirectTo: 'tarefas/listar' },
    { path: 'tarefas/listar', component: ListarTarefaComponent },
    { path: 'tarefas/cadastrar', component: CadastroTarefaComponent }]
