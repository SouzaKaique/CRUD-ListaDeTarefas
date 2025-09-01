// src/app/components/task-list/task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule 
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tarefas: Tarefa[] = [];
  novaTarefa: Tarefa = { descricao: '', concluida: false };

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefaService.getTarefas().subscribe(data => {
      this.tarefas = data;
    });
  }

  adicionarTarefa(): void {
    if (this.novaTarefa.descricao.trim() === '') return;

    this.tarefaService.addTarefa(this.novaTarefa).subscribe(tarefaAdicionada => {
      this.tarefas.push(tarefaAdicionada);
      this.novaTarefa = { descricao: '', concluida: false };
    });
  }

  atualizarStatus(tarefa: Tarefa): void {
    this.tarefaService.updateTarefa(tarefa).subscribe();
  }

  deletarTarefa(id: number | undefined): void {
    if (id === undefined) return;

    this.tarefaService.deleteTarefa(id).subscribe(() => {
      this.tarefas = this.tarefas.filter(t => t.id !== id);
    });
  }

  limparConcluidas(): void {
  this.tarefas
    .filter(t => t.concluida && t.id !== undefined)
    .forEach(t => {
      this.tarefaService.deleteTarefa(t.id!).subscribe(() => {
        this.tarefas = this.tarefas.filter(x => x.id !== t.id);
      });
    });
}

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get tarefasPendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }

  get tarefasConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }
}
