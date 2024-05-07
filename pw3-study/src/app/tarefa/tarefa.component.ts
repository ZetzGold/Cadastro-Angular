import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  constructor(private formularioReativo2: FormBuilder){}

  cadastroForm2 = this.formularioReativo2.group({
    resumo: [null],
    problema: [null],
    prioridade: [null],
    prazo: [null],
    descricao: [null]
  });

  onEnviar(){
    console.table(this.cadastroForm2.value);
  }
}
