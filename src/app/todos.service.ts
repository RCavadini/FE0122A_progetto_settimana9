import { Injectable } from "@angular/core";
import { Todo } from "./models/todo"

@Injectable({
  providedIn: "root"
})

export class TaskService {

  private listaTask: Todo[] = []

  getTask() {
    return this.listaTask;
  }

  addTask(nomeTask: string) {
    this.listaTask.push({
      id: this.listaTask.length,
      title: nomeTask,
      completed: false
    });
    console.log(this.listaTask)
  }

  completedTask(id: number) {
    let elementoCompletato = this.listaTask.find(item => item.id == id)
    elementoCompletato!.completed = true
    console.log(elementoCompletato!.id)
    console.log(id)
  }
}
