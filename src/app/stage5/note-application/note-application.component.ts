import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-note-application',
  imports: [],
  templateUrl: './note-application.component.html',
  styleUrl: './note-application.component.css',
})
export class NoteApplicationComponent {
  private readonly STORAGE_KEY = 'notes_app';

  constructor() {
    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.notes()));
    });
  }

  notes = signal<string[]>(this.loadNotes());
  search = signal('');

  addNote(note: string, input?: HTMLInputElement) {
    if (!note.trim()) return;
    this.notes.update((list) => [...list, note]);
    if (input) input.value = '';
  }

  deleteNote(index: number) {
    this.notes.update((list) => list.filter((_, noteIndex) => noteIndex !== index));
  }

  filteredNotes = computed(() =>
    this.notes().filter((n) => n.toLowerCase().includes(this.search().toLowerCase())),
  );

  private loadNotes(): string[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
}
