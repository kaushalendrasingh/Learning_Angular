import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap}  from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You Selected department  with id = {{departmentId}}</h3>

    <p>

    <button (click) = "showOverview()"> Overview </button>
    <button (click)="showContact()" > Contact </button>

    </p>

    <router-outlet> <router-outlet>

    <p>
    <button (click)="goPrevious()"> Previous </button>
    <button (click)="goNext()" > Next </button>
</p>  
    <div>

    <button (click)="gotoDepartment()" > Back </button>    

    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

public departmentId;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // let id =parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.departmentId =id;
    });
  }

  goPrevious(){
    let previousID = this.departmentId-1;
    this.router.navigate(['/departments', previousID]);
  }
  goNext(){
    let NextID = this.departmentId+1;
    this.router.navigate(['/departments', NextID]);
  }

  gotoDepartment(){ 
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id:selectedId  } /* Optional route {}*/])

    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});

  }

  showOverview(){

    this.router.navigate(['overview'], {relativeTo: this.route});

  }

  showContact() {
     
    this.router.navigate(['contact'], {relativeTo: this.route});

  }
}
