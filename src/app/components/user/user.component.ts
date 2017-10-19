import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies:string[];
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) { 
    console.log('constructor started');
  }

  ngOnInit() {
    console.log("Mounted");
    this.name = "Gabriel";
    this.age = 25;
    this.email = "segaz2002@gmail.com";
    this.address = {
      street: "5 Kuldnoka",
      city: "Tallinn",
      state: "Harjuuma"
    };
    this.hobbies = ["code", "eat", "party"]
    
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

  onClick(){
    console.log("hello");
    this.name="Kolawole";
    this.hobbies.push("Read");
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobbyIndex){
    console.log(hobbyIndex);
    let Hobbies = []
    this.hobbies = this.hobbies.splice(hobbyIndex, 1);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit
  }

}

interface Address{
  street: string;
  city: string;
  state: string;
}

interface Post{
  id: number;
  title: string;
  body: string;
  userId: number;
}
