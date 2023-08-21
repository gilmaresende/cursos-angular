import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  taskList: Array<TaskList> = [
    { task: 'Task One', checked: true },
    { task: 'Task Two', checked: false },
  ];

  deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1)
  }

  deleteAll(): void {
    const confirm = window.confirm("Você deseja realmente Deletar tudo?")
    if (confirm) {
      this.taskList = []
    }
  }
}
