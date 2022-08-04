import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Heros } from '../mock-heros';
import {HttpClientModule,HttpHeaders,HttpClient} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { MessageServiceService } from './message-service.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient,private messageService:MessageServiceService) { }
  getHeros():Observable<Hero[]>
  {
    this.messageService.addMessage("fetched heros");
    return of(Heros);
  }
}
