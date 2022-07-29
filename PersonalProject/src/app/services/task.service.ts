import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable,of } from 'rxjs';

//local api after download jsonserver and created db.json and 
//after run with npm run server and then get the api url and use it here 
import {HttpClient ,HttpHeaders} from '@angular/common/http'

const httpOptions ={
  headers :new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

 
//  constructor() { }
  // getTasks():Task[]   // similar to task:Task[]=TASKS;
  // {
  //   return TASKS;
  // }


//with mock json
// constructor() { }
  // getTasks():Observable<Task[]>  // similar to task:Task[]=TASKS;
  // {
  //   const tasks1=of(TASKS);
  //   return tasks1;
  // }

  //with local api json server:
  private apiurl='http://localhost:5000/tasks';

  constructor(private httpClient:HttpClient) { }
  getTasks():Observable<Task[]>  // similar to task:Task[]=TASKS;
  {
    
    return this.httpClient.get<Task[]>(this.apiurl);
  }
  
  deleteTask(task :Task): Observable<Task>{
    const url=`${this.apiurl}/${task.id}`;
   return this.httpClient.delete<Task>(url);
  }

  
  togglereminderchange(task:Task):Observable<Task>{
    const url=`${this.apiurl}/${task.id}`;
    return this.httpClient.put<Task>(url,task,httpOptions);
  }

addtask(task:Task):Observable<Task>
{
return this.httpClient.post<Task>(this.apiurl,task,httpOptions);
}

}
