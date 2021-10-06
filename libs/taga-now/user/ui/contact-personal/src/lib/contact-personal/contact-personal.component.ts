import {
  ChangeDetectionStrategy, Component, Input, OnInit
} from '@angular/core';
import { UserInterface } from '@consult-indochina/auth';

@Component({
  selector: 'tgn-contact-personal',
  templateUrl: './contact-personal.component.html',
  styleUrls: ['./contact-personal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPersonalComponent implements OnInit {
  @Input() userDetail!: UserInterface;
  constructor() {}

  ngOnInit() {}
}
