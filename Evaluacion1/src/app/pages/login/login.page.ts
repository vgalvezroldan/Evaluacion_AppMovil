import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  inicioSesionExitoso: boolean = false;
  formularioLogin : FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private alertController:AlertController) {
    this.formularioLogin = this.fb.group({
      nombre:[''],
      password:['']
   })
  }

  ngOnInit() {
  }

  async iniciarSesion() {
    const nombreIngresado = this.formularioLogin.get('nombre')?.value;
    const passwordIngresado = this.formularioLogin.get('password')?.value;
    
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario') || '{}');
  
    if (nombreIngresado === usuarioGuardado.nombre && passwordIngresado === usuarioGuardado.password) {
      console.log('Bienvenido', nombreIngresado);
      this.router.navigate(['/welcome']); 
    } else {
      console.log('Detalles de inicio de sesión incorrectos');
      
      // Opcional: Muestra una alerta al usuario
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Detalles de inicio de sesión incorrectos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }}
