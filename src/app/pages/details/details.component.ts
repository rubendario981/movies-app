import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public id: string = "";
  constructor(private routeActive: ActivatedRoute){

  }
  ngOnInit(): void {
    this.routeActive.params.subscribe((params: Params)=>{
      this.id = params['id'];
    })
      
  }
}
