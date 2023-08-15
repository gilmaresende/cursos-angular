import { ToastrService } from 'ngx-toastr';
import { TecnicoService } from './../../../services/tecnico.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';
import { Chamado } from 'src/app/models/chamado';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.css']
})
export class ChamadoUpdateComponent implements OnInit {


  titulo: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  prioridade: FormControl = new FormControl(null, [Validators.required])
  descricao: FormControl = new FormControl(null, [Validators.required])
  cliente: FormControl = new FormControl(null, [Validators.required])
  tecnico: FormControl = new FormControl(null, [Validators.required])

  clientes: Cliente[] = []
  tecnicos: Tecnico[] = []

  chamado: Chamado = {
    prioridade: '',
    status: '',
    titulo: '',
    observacoes: '',
    tecnico: '',
    cliente: '',
    nomeCliente: '',
    nomeTecnico: ''
  }

  constructor(private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private chamadoService: ChamadoService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.chamado.id = this.route.snapshot.paramMap.get('id')
    this.findById()

    this.findAllClientes();
    this.findAllTecnicos();



  }

  findById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe(r => {
      this.chamado = r
    },
      ex => {
        this.toast.error(ex.error.error)
      })
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

  update() {
    this.chamadoService.create(this.chamado).subscribe(r => {
      this.toast.success("Chamado Criado com Sucesso", "Sucesso")
      this.router.navigate(['chamados'])
    },
      ex => {
        this.toast.error(ex.error.error);
      }
    )
  }

  retornaStatus(status): string {
    if (status == 0) {
      return 'ABERTO'
    } else if (status == 1) {
      return 'EM ANDAMENTO'
    }
    return 'ENCERRADO'
  }

  retornaPrioridade(prioridade): string {
    if (prioridade == 0) {
      return 'BAIXA'
    } else if (prioridade == 1) {
      return 'MEDIA'
    }
    return 'ALTA'
  }
}
