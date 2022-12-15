import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Person } from '../models/person.model';
import { personData } from './person-data';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons$: BehaviorSubject<Person[]>
  persons : Array<Person> = [];
  constructor() {
    this.persons = personData;
    this.persons$ = new BehaviorSubject<Person[]>([]);
   }

   getAll()
   {
     this.persons$.next(this.persons);
   }
  //  getAll2(): Observable<Person[]>
  // {
  //   return of(this.persons);
  // }
  getAll3(): Person[]
  {
    return this.persons;
  }

  add(person: Person)
  {
    this.persons.push(person);
  }

  edit(person:Person)
  {
    let findPerson = this.persons.find(p => p.id == person.id);

    if(findPerson)
    {
      findPerson.firstName = person.firstName;
      findPerson.age = person.age;
      
      findPerson.job = person.job;
    }
    this.persons$.next(this.persons);
  }

  delete(id: number)
  {
    this.persons = this.persons.filter(p => {
      return p.id != id
    });

    this.edit;
    this.persons$.next(this.persons);
  }
}
