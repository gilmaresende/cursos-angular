import { Component } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {

  constructor(private service: MomentService,
    private messageServeice: MessagesService,
    private router: Router) { }

  btnText = "Compartilhar!"

  async createHandler(moment: Moment) {
    const formdata = new FormData()
    formdata.append('title', moment.title)
    formdata.append('description', moment.description)
    if (moment.image) {
      formdata.append('image', moment.image)
    }

    await this.service.createMoment(formdata).subscribe()
    this.messageServeice.add('Momento Adicionado Com Sucesso')
    this.router.navigate(['/'])
  }
}
