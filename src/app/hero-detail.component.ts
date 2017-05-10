import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';
import { Hero } from './hero';


@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit {
	hero: Hero;

	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}


	// use the params Observable to extract the id parameter value from the ActivatedRoute service and use the HeroService to fetch the hero with that id
	ngOnInit(): void {
	  this.route.params
	    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
	    .subscribe(hero => this.hero = hero);
	}

	save(): void {
	  this.heroService.update(this.hero)
	    .then(() => this.goBack());
	}

	goBack(): void {
	  this.location.back();
	}

}