import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../models/person.model';
import { PersonService } from '../services/person.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.scss']
})
export class PersonsTableComponent implements OnInit {


  displayedColumns: string[] = ['firstName', 'age', 'job'];
  public dataSource : MatTableDataSource<Person>;

  constructor(private personsServices : PersonService) { 
    this.dataSource = new MatTableDataSource<Person>();
  }

  ngOnInit(): void {
    this.personsServices.getAll();
    this.dataSource = new MatTableDataSource<Person>(this.personsServices.getAll3());
  }

}
