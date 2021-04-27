import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(log) {
    log.preventDefault();
    var username = log.target.elements[0].value;
    var password = log.target.elements[1].value;

    if (username == "admin" && password == 1234) {
      this.router.navigate(['/list']);
    } else {
      return alert("Your username or password did not match!")
    }
  }
}
