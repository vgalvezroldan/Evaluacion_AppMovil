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
    const nombre = this.formularioLogin.get('nombre')?.value;
    const password = this.formularioLogin.get('password')?.value;
  
    if (!nombre || !password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Todos los campos son requeridos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    
    const usuario = { nombre, password };
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    console.log('Usuario registrado:', usuario);
  
    this.formularioLogin.reset();  // Esto limpiará los campos del formulario
  
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Usuario registrado correctamente.',
      buttons: ['OK']
    });
    await alert.present();
  }
  
}
