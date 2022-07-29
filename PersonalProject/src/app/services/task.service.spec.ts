import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

   beforeEach (async () => {
      TestBed.configureTestingModule({
      
        imports:[ HttpClientModule]
      })
      .compileComponents();
    });
  



});
