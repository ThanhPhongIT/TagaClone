import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { getDeepestChildSnapshot } from '@consult-indochina/auth';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'tgn-company-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit {
  currentId!: number;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentId = this.route.firstChild?.firstChild?.snapshot.params.id;
    this.setupRouteTitleListener();
    // console.log();
    // this.route.parent.params.subscribe((params) => {
    //   console.log(params.accountid);
    // });
  }

  private setupRouteTitleListener() {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe((res) => {
        console.log(res );

        this.currentId = getDeepestChildSnapshot(
          this.route.root.snapshot
        ).params.id;
      });
  }

  routeTo(link: string) {
    this.router.navigate(['/company', link, this.currentId]);
  }
}
