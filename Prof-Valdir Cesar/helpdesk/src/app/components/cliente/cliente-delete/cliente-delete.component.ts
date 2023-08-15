import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {



  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3))
  cpf: FormControl = new FormControl(null, Validators.required)
  email: FormControl = new FormControl(null, Validators.email)
  senha: FormControl = new FormControl(null, Validators.minLength(3))


  constructor(private clienteService: ClienteService,
    private toast: ToastrService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id')
    this.findById()
  }

  findById(): void {
    this.clienteService.findById(this.cliente.id).subscribe(r => {
      r.perfis = []
      this.cliente = r
    })
  }

  delete(): void {
    this.clienteService.delete(this.cliente.id).subscribe(() => {
      this.toast.success("Cliente Deletado com Sucesso!", "Sucesso")
      this.router.navigate(['clientes'])
    }, ex => {
      if (ex.error.errors) {
        ex.error.errors.forEach(e => {
          this.toast.error(e.message)
        });
      } else {
        this.toast.error(ex.error.message)
      }
    })
  }


}
