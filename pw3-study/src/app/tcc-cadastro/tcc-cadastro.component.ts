import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tcc-cadastro',
  templateUrl: './tcc-cadastro.component.html',
  styleUrls: ['./tcc-cadastro.component.css']
})
export class TCCCadastroComponent {
  ocultarSenha:boolean = true;
  constructor(private formularioReativo: FormBuilder){}

  cadastroForm = this.formularioReativo.group({
    nome: this.formularioReativo.control('',[Validators.required]),
    email: this.formularioReativo.control('',[Validators.required, Validators.email]),
    usuario: this.formularioReativo.control('',[Validators.required]),
    senha: this.formularioReativo.control('',[Validators.required, Validators.minLength(2), Validators.maxLength(17)]),
    confirmarSenha: [null]
  });

  onEnviar(){
    console.table(this.cadastroForm.value);
  }
}
