import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})




export class RegisterComponent implements OnInit {

  msg: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regUser(regRef: NgForm) {
    let login = regRef.value;

    var lInfo = new Array(
      login.email,
      login.password,
      login.fName,
      login.lName);
   


    //console.log(login);
    if (login.fName != null && login.lName != null && login.email != null && login.password != null) {
      for (var i = 0; i < localStorage.length + 1; i++) {
        if (localStorage.getItem(String(i)) == null) {
          console.log("setting");
          localStorage.setItem(String(i), JSON.stringify(lInfo));
          break;
        }

      }
      this.router.navigate(['']);
    } else {
      
    }
    regRef.reset();
  }

}
