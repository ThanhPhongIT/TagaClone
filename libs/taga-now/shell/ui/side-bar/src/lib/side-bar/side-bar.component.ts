import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'tgn-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  sideBarLinks!: any[];
  @ContentChild('sidebarContent') sidebarContent!: TemplateRef<any>;
  @Input() expanded!: boolean;
  @Input()
  set sideBar(value) {
    this.sideBarLinks = value;
  }

  get sideBar() {
    return this.sideBarLinks;
  }

  get sidebarWidth(): number {
    return this.expanded ? 289 : 0;
  }

  // project: JProject;
  // sideBarLinks: SideBarLink[];

  // constructor() {}

  // ngOnInit(): void {
  //   // this.sideBarLinks = SideBarLinks;
  // }
}

export class SideBarLink {
  constructor(public name: string, public icon: string, public url?: string) {}
}
