import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  msg: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkUser(loginRef: NgForm) {
    let login = loginRef.value;
    //console.log(login);
    for (var i = 0; i < localStorage.length; i++) {

      let empObj = localStorage.getItem(String(i));
      let empJson = JSON.parse(empObj!)
      console.log(empJson[0])
      console.log(login.user)
      if (login.user === empJson[0] && login.pass === empJson[1]) {
        this.msg = "Successfully Login!"
        console.log('y')
        this.router.navigate(['dashboard']);
      }
    }
    this.msg = "Login information not found!"
  }

}
