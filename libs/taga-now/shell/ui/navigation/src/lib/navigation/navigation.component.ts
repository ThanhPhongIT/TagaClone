import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  NavigationEnd,
  ResolveEnd,
  Router,
  RoutesRecognized,
} from '@angular/router';
import { getDeepestChildSnapshot } from '@consult-indochina/auth';
import { SideBarStore, SideBarType } from '@taga-now/shared/data-access/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'tgn-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {
  @Input() expanded!: boolean;
  @Input() expandedLv2!: boolean;
  @Output() manualToggle = new EventEmitter();
  sideType = SideBarType;
  sideBarData!: Observable<Record<string, unknown>[]>;
  sideBarType!: Observable<SideBarType>;
  constructor(private sideBarStore: SideBarStore, private router: Router) {}
  toggleLevel = 0;

  ngOnInit() {
    this.setupRouteTitleListener();
    this.sideBarType = this.sideBarStore.sideBarType$;
    this.sideBarData = this.sideBarStore.sideBarItems$;    
  }

  toggle() {
    this.manualToggle.emit();
  }

  private setupRouteTitleListener() {
    this.router.events
      .pipe(filter((ev) => ev instanceof ResolveEnd))
      .subscribe((ev) => {
        const { data } = getDeepestChildSnapshot((ev as ResolveEnd).state.root);
        const typ = data.type as SideBarType;

        this.sideBarStore.patchState({
          type: typ,
        });
      });
  }
}
