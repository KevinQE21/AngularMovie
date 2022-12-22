import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  //Oninit es un metodo del ciclo de vida, permite ejecutar antes que el componente se inicialice
  ngOnInit(): void {
      this.peliculasEnCines = [
        {
          titulo: 'Spider-Man',
          fechaLazamiento: new Date(),
          precio: 1400.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Spider-Man_No_Way_Home_-_The_More_Fun_Stuff_Version_poster.jpeg/210px-Spider-Man_No_Way_Home_-_The_More_Fun_Stuff_Version_poster.jpeg',
        },
        {
          titulo: 'Moana',
          fechaLazamiento: new Date('2016-11-14'),
          precio: 300.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg',
        },
      ]; 
  }
  peliculasEnCines;
  peliculasProximosEstrenos = []
}
