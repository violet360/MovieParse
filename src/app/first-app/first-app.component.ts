import { Component, OnInit } from '@angular/core';

import {UsersService} from '../users.service';



@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.css'],

})

export class FirstAppComponent implements OnInit {


 public movies = [];
 MoveM:boolean = false;
  constructor(private usersService:UsersService){  }

Mnaag = "warning"
toggle(t)
{
  return t["Display"];
}



  clean()
  {
    localStorage.clear();
  }

  SaveBook(t)
  {

    t["Display"] = !t["Display"];
    console.log(t["Display"]);

    if(t["Display"] == true)
    {

      if(JSON.parse(localStorage.getItem('myList')) == null)
      {
          console.warn("path")
          let list = [];
          list.push(t);
          localStorage.setItem('myList', JSON.stringify(list));
          console.log(JSON.parse(localStorage.getItem('myList')))
      }

      else
        {
          console.warn("path2");
          let list = JSON.parse(localStorage.getItem('myList'))
          list.push(t);
          localStorage.setItem('myList', JSON.stringify(list));
          console.log(JSON.parse(localStorage.getItem('myList')));
        }
      }

      else
      {
        let list = JSON.parse(localStorage.getItem('myList'));
        let arr = [];
        for(let i=0; i<(list.length); ++i)
        {
          if(list[i].Title != t.Title && list[i].Released != t.Released)
          {
              arr.push(list[i]);
          }
        }
        localStorage.setItem('myList', JSON.stringify(arr));
        console.log(arr)
      }
    }


  ngOnInit()
  {
    
  }

  TellMe(t)
  {
    let list = JSON.parse(localStorage.getItem('myList'));

    

    if(list == null)
      return [];


      let ret = [];

    list.forEach(function (value) {
      if(t.Title == value.Title)
          ret.push(value);
      });

      return ret;
  }

  DisplayMov(t)
  {
    this.movies = []
    this.usersService.getMovies(t)
    .subscribe(data =>
    {
      let received = this.TellMe(data);

      console.warn(received, "----");

      if(received.length == 0)
      {
        data["Display"] = false;
        this.movies.push(data);
      }

      else
      {
        for(let i=0; i<(received.length); ++i)
        {
          (this.movies).push(received[i]);
        }
      }

      console.log(this.movies);
    })
  }

  getUserVal(anmed)
  {
    let t = anmed.username;
    this.DisplayMov(t);
  }

}
