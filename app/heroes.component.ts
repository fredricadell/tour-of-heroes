import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero.detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
     constructor(private _heroService: HeroService) {
    }
    private heroes: Hero[];
    selectedHero: Hero;
    title = 'Tour of Heroes';

    getHeroes(isSlow: boolean){
        if (isSlow) {
            this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
        } else {
            this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        }
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
       ngOnInit() {
        this.getHeroes(false);
    }
}
