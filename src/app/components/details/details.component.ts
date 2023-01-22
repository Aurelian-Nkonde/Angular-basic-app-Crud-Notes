import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
 import { switchMap } from 'rxjs';
import { Language } from 'src/app/language';
import { LangusService } from 'src/app/services/langus.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private route: ActivatedRoute, private service: LangusService ){
  }

  id?:string;
  language?: Language;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {this.id = String(params.get('id'))})
    this.getLanguage();
  }

  getLanguage(){
    this.service.getLanguage(String(this.id)).subscribe(data => this.language = data)
  }
}
