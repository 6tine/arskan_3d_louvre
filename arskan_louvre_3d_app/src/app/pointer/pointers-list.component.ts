import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Pointer} from "../model/pointer";
import {ApiServiceService} from "../services/api-service.service";

@Component({
  selector: 'app-pointer-list',
  templateUrl: './pointers-list.component.html',
  styleUrls: ['./pointers-list.component.css']
})
export class PointersListComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }
  @Input() objectId: string | undefined;
  dataSourcePointers = new MatTableDataSource<Pointer>();
  displayedColumns: string[] = ['id', 'title', 'description', 'position'];

  ngOnInit(): void {
    this.apiService.getAllPointersFrom(this.objectId)
      .subscribe(
        pointers => {
          /*let newList: Pointer[] = []
          console.log(pointers)
          pointers.forEach((p: Pointer)=>{
            newList.push(p)
          })*/
          this.dataSourcePointers.data = pointers;
        }
      )
  }

}
