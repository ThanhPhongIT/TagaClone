import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'tgn-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  expanded: boolean;
  expandedLv2 = true;
  constructor(private cdref: ChangeDetectorRef, private socketService: SocketService) {
    // private _authService: AuthService // private _projectService: ProjectService,
    this.expanded = true;
  }

  ngOnInit(): void {
    // this._authService.login(new LoginPayload());
    // this._projectService.getProject();
    this.socketService.connect();
    setTimeout(() => {
    this.socketService.sendMessage(JSON.stringify({Action:"message",data:"s"}))
    }, 1000);
    this.handleResize();
  }

  handleResize() {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', (e) => {
      this.expanded = e.matches;
      this.expandedLv2 = e.matches;
      this.cdref.markForCheck();
    });
  }

  manualToggle(): boolean {
    if (this.expanded === false && this.expandedLv2 === true) {
      return (this.expandedLv2 = false);
    }

    if (this.expanded === false && this.expandedLv2 === false) {
      this.expanded = !this.expanded;
      return (this.expandedLv2 = true);
    }

    return (this.expanded = !this.expanded);
  }

  manualToggle2() {
    this.expandedLv2 = !this.expandedLv2;
  }
}
