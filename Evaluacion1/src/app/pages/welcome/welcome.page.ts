import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  nombreUsuario : string | null = null;
  constructor() { }

  ngOnInit() {
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.nombreUsuario = usuarioGuardado.nombre;
  }

}
