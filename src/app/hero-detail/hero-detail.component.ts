import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private messageService:MessageServiceService,private route:ActivatedRoute,private heroService:HeroService,private location:Location)
  { }
  @Input() selectedHero?:Hero;
  getHero():void
  {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);
  }
  ngOnInit(): void {
  }

}
