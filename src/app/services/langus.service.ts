import { Injectable } from '@angular/core';
import { findIndex, Observable, of } from 'rxjs';
import { Language } from '../language';
import { LANGUAGE } from '../mock-language';

@Injectable({
  providedIn: 'root'
})
export class LangusService {

  constructor() { }
  myLanguages: Language[] = []
  id: number = 1;


  getLanguages(): Observable<Language[]>{
    return of(LANGUAGE);
  }

  getLanguage(ids: string): Observable<Language>{
    let id = Number(ids)
    for(let i = 0; i < LANGUAGE.length; i++){
      if(id == LANGUAGE[i].id){
        return of(LANGUAGE[i])
      }
    }
    return of();
  }

  addLanguage(data: Language): Observable<null>{
    let withId: Language = {
      id: this.id++,
      name: data.name,
      stars: data.stars
    }
    LANGUAGE.push(withId);
    return of(null)
  }

  deleteLanguage(data: Language): Observable<null>{
    let index = LANGUAGE.indexOf(data);
    LANGUAGE.splice(index, 1);
    console.log("removed")
    return of(null)  
  }

}
