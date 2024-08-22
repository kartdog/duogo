import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Aquí podemos crear variables, constantes, listas, arreglos, json... etc.

  // Variable: (Se debe definir el valor de la variable.)
  titulo: string = "Autentificación de usuario";
  fecha: Date = new Date();
  nombres: string[] = ["Pedro","Juan","Diego"];
  persona: any = {"nombre":"Jeison", "edad": 25}

  // NgModel:
  email: string = "";

  constructor() { }

  ngOnInit() {
  }

}
