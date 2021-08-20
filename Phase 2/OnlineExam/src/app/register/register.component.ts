import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import *  as  data from './quiz.json';





@Component({
  selector: 'app-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  stringJson: any;
  stringObject: any;
  public allQ: any;
  public value: any;
  public qtd: any[] = [];
  msg: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.stringJson = JSON.stringify(data);
    this.stringObject = JSON.parse(this.stringJson);
    this.allQ = this.stringObject.questions;
  }

  regUser() {
    let x: number = 0;
    for (let i = 0; i < this.allQ.length; i++) {
      if (this.allQ[i].correctIndex == this.qtd[i]) {
        x++;
      }
    }
    if (x > (this.allQ.length * .7)) {
      this.msg = 'Your score is ' + x + '/' + this.allQ.length + '. You passed!';
    }
    else {
      this.msg = 'Your score is ' + x + '/' + this.allQ.length + '. You failed!';
    }
    
    console.log(this.msg);
  }

}
