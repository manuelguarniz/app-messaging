import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RoomModel } from '@app/models/room/room.model';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'amg-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss']
})
export class NewRoomComponent implements OnInit {

  reactiveModel: FormGroup;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  constructor(
    private formBuilder: RxFormBuilder
  ) { }

  ngOnInit(): void {
    this.settingForm();
  }

  settingForm(): void {
    this.reactiveModel = this.formBuilder.formGroup(new RoomModel());
    // this.reactiveModel = this.formBuilder.group({
    //   name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/asdfasdf/)]),
    // });
  }

  submit(): void {
    console.log('submit');
  }

}
