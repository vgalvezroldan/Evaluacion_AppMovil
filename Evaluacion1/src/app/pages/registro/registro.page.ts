import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioLogin : FormGroup;

  constructor(private fb:FormBuilder) {
    this.formularioLogin = this.fb.group({
      nombre: [''],
      password: ['']
    });
   }

  ngOnInit() {
  }


  registrar() {
    const usuario = {
      nombre: this.formularioLogin.get('nombre')?.value,
      password: this.formularioLogin.get('password')?.value,
    }
  
    localStorage.setItem('usuario', JSON.stringify(usuario));
    console.log('Usuario registrado:', usuario);
  }
}
