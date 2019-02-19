import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GetInTouchService } from './getInTouchService';

@Component({
  selector: 'app-getInTouch',
  templateUrl: './getInTouch.html',
  styleUrls: ['./getInTouch.css']
})
export class GetInTouchComponent implements OnInit {
  getInTouchForm: FormGroup;
  submitted = false;
  public responseMessage = '';

  constructor(private formBuilder: FormBuilder, private getInTouchService: GetInTouchService) { }

  ngOnInit() {
    this.getInTouchForm = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }
  get f() { return this.getInTouchForm.controls; }

  onChangeInput() {
    this.submitted = false;
  }

  onSubmit() {
    this.getInTouchService.contact(this.getInTouchForm.value)
      .subscribe(
        (res: any) => {
          this.submitted = true;
          this.getInTouchForm.reset();
          this.responseMessage = res.message;
        },
        err => {
          this.submitted = true;
          this.responseMessage = err.message;
        });
  }
}

