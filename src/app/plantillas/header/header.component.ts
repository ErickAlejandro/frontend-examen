import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  salir(){
    this.router.navigate(['dashboard']);
  }

  image(){
    this.router.navigate(['informacion']);
  }

  programador(){
    this.router.navigate(['programador']);
  }

  informacion(){
    this.router.navigate(['informacion']);
  }

}
