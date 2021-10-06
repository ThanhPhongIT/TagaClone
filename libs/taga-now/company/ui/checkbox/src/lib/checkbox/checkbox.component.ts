import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
@Component({
  selector: 'tgn-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements OnInit {
  listEmployee: Array<any> = [
    { name: 'Trần Quang Anh', id: 1 },
    { name: 'Hoàng Thế Tài', id: 2 },
    { name: 'Duy Phương', id: 3 },
    { name: 'Thanh Phong', id: 4 },
  ];
  // showRadioList = false;
  subList = [];
  formMovie: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formMovie = this.fb.group({ checkboxes: [] });
  }
  ngOnInit() {
    const controlsConfig: { [key: string]: any } = {};

    const config = this.listEmployee.map(() => [false]);

    controlsConfig.checkboxes = this.fb.array(config);

    this.formMovie = this.fb.group(controlsConfig);
    this.formMovie.valueChanges
      .pipe(map((x) => x.checkboxes))
      .subscribe((x) => {
        this.subList = [];
        x.forEach((e: any, index: number) => {
          if (e == true) {
            this.subList.push(this.listEmployee[index]);
          }
        });
      });
  }
  uncheck(listBack) {
    const subCheck = new Array<boolean>(this.listEmployee.length).fill(false);
    listBack.forEach((x: any) => {
      this.listEmployee.find((element, index) => {
        if (element === x) {
          subCheck[index] = true;
        }
      });
    });
    this.formMovie.get('checkboxes')?.setValue(subCheck);
  }
  // getControl(i: number) {
  //   const boxes: FormArray = this.formMovie.controls['checkboxes'] as FormArray;
  //   return boxes.at(i);
  // }
}
