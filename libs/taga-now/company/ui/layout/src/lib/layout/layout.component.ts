import {
  ChangeDetectionStrategy, Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { getDeepestChildSnapshot } from '@consult-indochina/auth';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'tgn-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  isActiveChild!: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setupRouteTitleListener();
    this.isActiveChild = this.route.firstChild?.firstChild?.snapshot.params.id;
  }

  private setupRouteTitleListener() {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe(() => {
        this.isActiveChild = getDeepestChildSnapshot(
          this.route.root.snapshot
        ).params.id;
      });
  }
}
