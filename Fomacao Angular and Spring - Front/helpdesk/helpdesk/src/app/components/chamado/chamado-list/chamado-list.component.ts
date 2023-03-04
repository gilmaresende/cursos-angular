import { Chamado } from './../../../models/chamado';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {

  ELEMENT_DATA: Chamado[] = [{
    id: 0,
    dataAbertura: '21/06/2023',
    dataFechamento: '21/06/2023',
    prioridade: 'ALTA',
    status: 'ANDAMENTO',
    titulo: 'Chamdo 1',
    descricao: 'teste chamdo 1',
    cliente: 6,
    nomeCliente: 'Fulado',
    tecnico: 1,
    nomeTecnicno: 'tecnocp fulado'
  }]

  displayedColumns: string[] = ['id', 'titulo', 'nomeCliente', 'nomeTecnicno', 'dataAbertura', 'status', 'prioridade', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
