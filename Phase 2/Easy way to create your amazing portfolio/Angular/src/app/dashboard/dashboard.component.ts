import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, Inject, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  checkUser(loginRef: NgForm) {
    var tableContent = ""
    let login = loginRef.value;
    let myElement: HTMLElement | null = document.getElementById("hi")!;
    tableContent = `<div class="card" style="width: 18rem; ">
                            <div class="card-body">
                                <h5 class="card-title" style = "color: black;">`+ login.user + `</h5>
                                <p class="card-text" style = "color: black;">`+ login.number + `</p>
                            </div>
                        </div > </br>`;
    //console.log(login);
    myElement.innerHTML += tableContent;
  }

}
