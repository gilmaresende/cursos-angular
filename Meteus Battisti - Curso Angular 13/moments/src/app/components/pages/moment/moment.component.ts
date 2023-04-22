import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';
@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment?: Moment
  baseApiUrl = environment.baseApiUrl
  faTimes = faTimes
  faEdit = faEdit

  constructor(private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.momentService.getMoment(id).subscribe(res => this.moment = res.data);
  }

  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe()

    this.messageService.add("Momento Excluido Com Sucesso!")
    this.router.navigate(["/"])
  }
}
