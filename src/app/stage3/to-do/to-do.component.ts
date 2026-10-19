import { Component, signal } from '@angular/core';

import { ChildComponent } from '../child/child.component';

interface Todo {
  id: number;
  title: string;
}

@Component({
  selector: 'app-to-do',
  imports: [ChildComponent],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  todos = signal<Todo[]>([]);

  newTodos = signal('');

  inputData(event: Event) {
    this.newTodos.set((event.target as HTMLInputElement).value.trim());
  }

  addItem() {
    if (!this.newTodos()) {
      return;
    }

    this.todos.update((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: this.newTodos(),
      },
    ]);
    this.newTodos.set('');
  }

  deleteItem(idToDelete: number) {
    this.todos.update((prev) => prev.filter((item) => item.id !== idToDelete));
  }
}
