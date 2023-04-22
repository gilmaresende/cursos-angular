import { Component, OnInit } from '@angular/core';
import { MomentService } from '../../services/moment.service';
import { Moment } from '../../Moment';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-moments',
  templateUrl: './edit-moments.component.html',
  styleUrls: ['./edit-moments.component.css']
})
export class EditMomentsComponent implements OnInit {

  moment!: Moment;
  btnText: string = 'Editar'

  constructor(private serviceMoment: MomentService,
    private activate: ActivatedRoute,
    private router: Router,
    private messageService: MessagesService) { }


  ngOnInit(): void {
    const id = Number(this.activate.snapshot.paramMap.get('id'))
    this.serviceMoment.getMoment(id).subscribe(item => {
      this.moment = item.data
    })
  }

  async editHandler(momentData: Moment): Promise<void> {
    const id = this.moment.id
    const formData = new FormData()

    formData.append('title', momentData.title)
    formData.append('description', momentData.description)
    if (momentData.image) {
      formData.append('image', momentData.image)
    }
    await this.serviceMoment.updateMoment(id!, formData).subscribe()

    this.messageService.add(`Moment of ID: ${id}, wad update with sucess`)

    this.router.navigate(['/'])
  }
}
