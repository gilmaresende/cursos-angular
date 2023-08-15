import { Chamado } from './../../../models/chamado';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {

  ELEMENT_DATA: Chamado[] = []
  FILTER_DATA: Chamado[] = []

  displayedColumns: string[] = ['id', 'titulo', 'nomeCliente', 'nomeTecnico', 'dataAbertura', 'status', 'prioridade', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: ChamadoService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.service.findAll().subscribe(r => {
      this.ELEMENT_DATA = r
      this.dataSource = new MatTableDataSource<Chamado>(r);
      this.dataSource.paginator = this.paginator
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  orderByStatus(status: any): void {
    let list: Chamado[] = []
    if (3 == status) {
      list = this.ELEMENT_DATA
    } else {
      this.ELEMENT_DATA.forEach(e => {
        if (e.status == status) {
          list.push(e)
        }
      })
    }

    this.FILTER_DATA = list
    this.dataSource = new MatTableDataSource<Chamado>(list);
    this.dataSource.paginator = this.paginator
  }

}
