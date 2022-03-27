import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss']
})

export class TodosPage implements OnInit {

  nomeTask!: string
  listaTask: Todo[] = []
  caricamento:boolean=false
  constructor (private taskService: TaskService){}

  getTask(){
    this.listaTask = this.taskService.getTask()
  }

  addTask(nomeTask: string){
    this.caricamento=true
    this.nomeTask=""
    setTimeout(() => {
      this.taskService.addTask(nomeTask)
    }, 2000);
    setTimeout(() => {
      this.caricamento=false
    }, 2000);
  }

  completedTask(id: number) {
    this.caricamento=true
    setTimeout(() => {
    this.taskService.completedTask(id)
    }, 2000);
    setTimeout(() => {
      this.caricamento=false

    }, 2000);

  }

  ngOnInit(){
    this.getTask()
  }
}

