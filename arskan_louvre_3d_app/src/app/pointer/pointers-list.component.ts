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
  displayedColumns: string[] = ['id', 'title', 'description', 'position','camera', 'actions'];

  ngOnInit(): void {
    this.updateAllPointers();
  }

  ngOnChanges(){
    this.updateAllPointers();
  }

  emitSiloChanged(){
    this.apiService.emitSiloChangedSubject();
  }

  delete(element: Pointer, rowNumber: number) {
    console.log('row to delete : ' + rowNumber);
    this.dataSourcePointers.data.splice(rowNumber,1)
    this.dataSourcePointers.data = this.dataSourcePointers.data;
    if(element.id != 'pending'){
      this.apiService.delete(element.id).subscribe(
        value => {
          this.emitSiloChanged();
        }
      )
    }
  }

  startUpdate(pointer: Pointer) {
    pointer.isCurrentlyUpdated = true;
  }

  update(pointer: Pointer) {
    this.apiService.update(pointer)
      .subscribe(value => {
        this.updateAllPointers();
        this.emitSiloChanged();
      })
    pointer.isCurrentlyUpdated = false;
  }

  addNewRow(){
    const data = this.dataSourcePointers.data;
    const p = new Pointer();
    p.isCurrentlyUpdated = true;
    p.id = 'pending';
    data.push(p);
    this.dataSourcePointers.data = data;
  }

  add(pointer: Pointer){
    this.apiService.add(this.objectId, pointer).subscribe(
      value => {
        this.updateAllPointers();
        this.emitSiloChanged();
      }
    )
    pointer.isCurrentlyUpdated = false;
  }

  updateAllPointers(){
    this.apiService.getAllPointersFrom(this.objectId)
      .subscribe(pointers =>{
        this.dataSourcePointers.data = pointers;
      })
  }
}
