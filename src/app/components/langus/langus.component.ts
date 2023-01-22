import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Language } from 'src/app/language';
import { LangusService } from 'src/app/services/langus.service';

@Component({
  selector: 'app-langus',
  templateUrl: './langus.component.html',
  styleUrls: ['./langus.component.css']
})
export class LangusComponent {

  constructor(private languService: LangusService, private fb: FormBuilder)
  {}

  ngOnInit(){
    this.getLanguages();
  }

  allLanguages: Language[] = []

  myForm = this.fb.group({
    name: ['', Validators.required],
    stars: ['', Validators.required]
  })

  getLanguages(){
    this.languService.getLanguages().subscribe(data => this.allLanguages = data);
  }

  infoMe(data: Language): void{
    console.log(data);
  }

  deleteMe(data: Language): void{
    this.languService.deleteLanguage(data).subscribe(a => a);
  }
  
  addLanguage(): void{
    let data: Language = {
      name: String(this.myForm.value.name),
      stars: Number(this.myForm.value.stars)
    }
    this.languService.addLanguage(data).subscribe(a => a);
    this.myForm.setValue({name: '', stars: ''})
  }

}
