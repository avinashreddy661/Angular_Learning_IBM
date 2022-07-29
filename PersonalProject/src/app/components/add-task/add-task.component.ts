import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task>=new EventEmitter();

  text:string;
  day:string;
  reminder:boolean =false;

  showAddtask:boolean;
  subscription:Subscription;

  constructor(private uiservice: UiService) {
    this.subscription=this.uiservice.onToggle().subscribe((value) =>(this.showAddtask=value));
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("from onsubmit() in add-task component ")
    if(! this.text)
    {
      alert("Please add the task");
    } else{
  
  const newtask ={
    text:this.text,
    day:this.day,
    reminder:this.reminder
  }

  this.onAddTask.emit(newtask);

  this.text="";
  this.day="";
  this.reminder=false;

  }
}


}
