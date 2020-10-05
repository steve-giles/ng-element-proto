import { Component } from '@angular/core';
import {DtsService} from './dts.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = '';
  template = '';
  editTemplate: FormGroup;

  constructor(
    private dtsService: DtsService,
    private formBuilder: FormBuilder) {
    this.dtsService.getStatus().subscribe(response => {
      this.status = response;
    });

    this.editTemplate = this.formBuilder.group({
      templateId: new FormControl(),
      templateText: new FormControl()
    });

    this.onTemplateChanges();
  }

  lookup() {
    this.dtsService.getTemplate(this.editTemplate.value.templateId).subscribe(response => {
      this.editTemplate.controls['templateText'].setValue(response);
      this.template = response;
    });
  }

  save() {
  }

  onTemplateChanges() {
    this.editTemplate.valueChanges.subscribe(val => {
      this.template = val.templateText;
    });
  }
}
