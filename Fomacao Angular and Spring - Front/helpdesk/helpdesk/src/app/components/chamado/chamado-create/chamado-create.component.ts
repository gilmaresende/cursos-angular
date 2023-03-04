import { TecnicoService } from './../../../services/tecnico.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

  titulo: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  prioridade: FormControl = new FormControl(null, [Validators.required])
  descricao: FormControl = new FormControl(null, [Validators.required])
  cliente: FormControl = new FormControl(null, [Validators.required])
  tecnico: FormControl = new FormControl(null, [Validators.required])

  clientes: Cliente[] = []
  tecnicos: Tecnico[] = []

  constructor(private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private chamadoService: ChamadoService) { }

  ngOnInit(): void {
    this.findAllClientes();
    this.findAllTecnicos();

  }

  findAllClientes() {
    this.clienteService.findAll().subscribe(r => {
      this.clientes = r
    })
  }

  findAllTecnicos() {
    this.tecnicoService.findAll().subscribe(r => {
      this.tecnicos = r
    })
  }

  validaCampos(): boolean {
    return this.prioridade.valid && this.tecnico.valid && this.cliente.valid
      && this.descricao.valid && this.titulo.valid && this.status.valid
  }

}
