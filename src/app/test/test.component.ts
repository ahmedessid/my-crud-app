import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name = "Ahmed";
  situation=true;
  bookList=['Ahmed','zied','amira','sofien'];
  

  constructor() { }

  ngOnInit(): void {
  }

  hello(username: string) {
    alert('hello ' + username + '!');
  }

}
