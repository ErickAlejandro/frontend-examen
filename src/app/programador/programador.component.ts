import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programador',
  templateUrl: './programador.component.html',
  styleUrls: ['./programador.component.css']
})
export class ProgramadorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  informacion(){
    this.router.navigate(['informacion']);
  }

}
