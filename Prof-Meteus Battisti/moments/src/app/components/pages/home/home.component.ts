import { Moment } from 'src/app/Moment';
import { MomentService } from '../../../services/moment.service';
import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment.prod';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = []
  momentos: Moment[] = []
  baseApiUrl = environment.baseApiUrl
  faSearch = faSearch
  searchTerm: string = ''

  constructor(private momentsService: MomentService) {

  }
  ngOnInit(): void {
    this.momentsService.getMoments().subscribe((itens) => {
      const data = itens.data
      data.map(item => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })
      this.allMoments = data
      this.momentos = data
    })
  }

  search(e: Event) {
    const target = e.target as HTMLInputElement
    const value = target.value

    this.momentos = this.allMoments.filter(m => m.title.toLowerCase().includes(value))
  }



}
