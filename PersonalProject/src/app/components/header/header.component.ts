import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titlename:string = "Task tracker" ;
  

  showAddtask:boolean=false;
  subscription:Subscription;

  constructor(private uiservice: UiService, private router:Router) {
    this.subscription=this.uiservice.onToggle().subscribe((value) => (this.showAddtask=value));
   }
  
  ngOnInit(): void {
  }
  
  toggleAddtask()
  {
    console.log("toggele in header after click on btn");
    this.uiservice.toggleAddTask();
    
  }

  hasRoute(route : string){
    return this.router.url === route;
  }

}
