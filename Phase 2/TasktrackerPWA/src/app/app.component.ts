import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {


  public items = [];


  constructor() { }
  public newID;// @ts-ignore
  public newName;// @ts-ignore
  public newTask;// @ts-ignore
  public newLine;// @ts-ignore
  ngOnInit(): void {
  }


  public addToList() {

    let data = {
      ID: this.newID,
      Name: this.newName,
      Task: this.newName,
      Deadline: this.newLine
    };

    if (this.newTask == '') {

    }
    else {
      this.items.push(data);
      this.newTask = '';
      this.newID = '';
      this.newName = '';
      this.newLine = '';
    }
  }


  public deleteTask(index: number) {
    this.items.splice(index, 1);
  }
}
