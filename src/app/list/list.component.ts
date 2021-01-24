import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 public movies;

  constructor() { }

  ngOnInit()
  {
  	
    if(JSON.parse(localStorage.getItem('myList')) == null)
    {
       this.movies = [];
    }

    else
    {
        console.warn("path2");

        let list = JSON.parse(localStorage.getItem('myList'))

        this.movies = list;
    }
  }


toggle(t)
{
  return t["Display"];
}



  clean()
  {

    localStorage.clear();
    window.location.reload();
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


}
