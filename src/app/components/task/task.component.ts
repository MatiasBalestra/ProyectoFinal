import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itask, Levels } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {


  @Input() task: Itask | undefined;
  @Output() delete: EventEmitter<Itask> = new EventEmitter<Itask>();


  constructor() { }

  ngOnInit(): void {
  }


  deleteTask() {
// Notificamos al componente superior la terea a eliminar
    this.delete.emit(this.task);
  }

}
