import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioLogin : FormGroup;

  constructor(private fb:FormBuilder, private alertController:AlertController) {
    this.formularioLogin = this.fb.group({
      nombre: [''],
      password: ['']
    });
   }

  ngOnInit() {
  }


  async registrar() {
    const usuario = {
      nombre: this.formularioLogin.get('nombre')?.value,
      password: this.formularioLogin.get('password')?.value,
    }
  
    localStorage.setItem('usuario', JSON.stringify(usuario));
    console.log('Usuario registrado:', usuario);

    this.formularioLogin.reset();

    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'Usuario registrado con éxito',
      buttons: ['OK']
    });
    await alert.present();
    
  }
}
