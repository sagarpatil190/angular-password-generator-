import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  length = 0
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';
  
  onChangeLength(e:any){
    let value = e.target.value

    if(!isNaN(value) && value > 0 ){
      this.length = value;
    }else{
      this.length =0;
    }

  }
  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }
  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onButtonClick(){
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "1234567890";
    let symbols = "!@#$%^&*()";

    let validChars = '';
    if(this.useLetters){
      validChars += letters;
    }
    if(this.useNumbers){
      validChars += numbers;
    }
    if(this.useSymbols){
      validChars += symbols;
    }
    let geneRatedPassword = '';
    for(let i =0; i< this.length; i++){
      const randomNum = Math.floor(Math.random() * validChars.length);
      geneRatedPassword += validChars[randomNum];
    }
    this.password = geneRatedPassword;
  }

}
