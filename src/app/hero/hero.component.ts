import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { MessageServiceService } from '../services/message-service.service';
import { Heros } from './../mock-heros';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private heroService:HeroService,private messageService:MessageServiceService) { 
    heroService.getHeros().subscribe(heros=> this.hero=heros);
  }
  hero:Hero[]=[];
  ngOnInit(): void {
  }
  selectedHero?:Hero;
  onSelectHero(hero:Hero)
  {
    this.selectedHero=hero;
    this.messageService.addMessage("selected hero"+this.selectedHero.name);
    console.log(this.selectedHero.name);
  }

}
