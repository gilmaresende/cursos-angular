import { Moment } from '../../Moment';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Moment>
  @Input() btnText!: string
  @Input() momentData: Moment | null = null

  momentForm!: FormGroup

  submit() {
    if (this.momentForm.invalid) {
      return
    }
    this.onSubmit.emit(this.momentForm.value)
  }

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData!.id : ''),
      title: new FormControl(this.momentData ? this.momentData!.title : '1', [Validators.required]),
      description: new FormControl(this.momentData ? this.momentData!.description : '', [Validators.required]),
      image: new FormControl('')
    })
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  onFilesSelected(event: any) {
    const file: File = event.target.files[0]
    this.momentForm.patchValue({ image: file })
  }

}
