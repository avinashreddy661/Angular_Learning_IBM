import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
  @Input() task: Task;
  @Output() onDeletetask: EventEmitter<Task>= new EventEmitter();
  @Output() onToggleReminderTask: EventEmitter<Task>= new EventEmitter();
  faTimes=faTimes;

  constructor() { }

  ngOnInit(): void {
  
  }

  onDelete(task1:Task){
    console.log(task1);
    this.onDeletetask.emit(task1);
  }

  onToggleReminder(task2:Task)
  {
    console.log(task2.reminder);
    this.onToggleReminderTask.emit(task2);

    }



}
