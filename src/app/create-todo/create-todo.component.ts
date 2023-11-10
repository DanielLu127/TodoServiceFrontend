import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../service/todo.service';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private todoHttpService: TodoHttpService
  ) {}

  toDoForm = this.formBuilder.group({
    title: "",
    description: ""
  })

  onSubmit() {
    const formValues = this.toDoForm.value
    if (formValues.title && formValues.description) {
      this.todoHttpService.create(formValues.title,formValues.description).subscribe(() =>{
        this.toDoForm.reset
      })
    }
    
  }
}
