import { Component, OnInit } from '@angular/core';

//with observables
import { Observable,of } from 'rxjs';

//with serice
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

//without service we use to import and  tasks:Task[]=TASKS;
// import { TASKS } from 'src/app/mock-tasks';
// import { Task } from 'src/app/Task';




@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

//without service
//tasks:Task[]=TASKS;
// constructor() { } 
// ngOnInit(): void { }



//with service
  // tasks:Task[]=[];
  // constructor(private taskservice:TaskService) { } //inorder to use service in component we need to mention in constructor
  // ngOnInit(): void {
  //   this.tasks=this.taskservice.getTasks();
  // }

  //with observable
  tasks:Task[]=[];
  constructor(private taskservice:TaskService) { } //inorder to use service in component we need to mention in constructor
  ngOnInit(): void {
  this.taskservice.getTasks().subscribe
    ((tasks1) => this.tasks=tasks1);
  }

  deleteTask(task:Task){
    this.taskservice
    .deleteTask(task)
    .subscribe(
      () =>(this.tasks =this.tasks.filter((t) => t.id !== task.id))
      );
  }

  togglereminderchange(task:Task)
{
  task.reminder= !task.reminder;
  this.taskservice
  .togglereminderchange(task)
  .subscribe();

}

addTask(task:Task)
{
console.log("Adding task");
this.taskservice.addtask(task).subscribe((task) => (this.tasks.push(task)));
}



}
