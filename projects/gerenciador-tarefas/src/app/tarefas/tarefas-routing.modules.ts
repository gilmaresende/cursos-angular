import { ListarTarefaComponent } from './listar';
import { Routes } from '@angular/router';
export
  const TarefaRoutes: Routes = [
    { path: 'tarefas', redirectTo: 'tarefas/listar' },
    { path: 'tarefas/listar', component: ListarTarefaComponent }]
