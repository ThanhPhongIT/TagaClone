import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { getMessagesLoading } from '@taga-now/taga-now/message/data-access';
import { select, Store } from '@ngrx/store';
@Component({
  selector: 'tgn-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageContentComponent implements OnInit {
  id: any;
  messages$ = this.store.pipe(select(getMessagesLoading));
  constructor(private activeRoute:  ActivatedRoute, private store: Store) { 
    
  }

  ngOnInit() {
    this.messages$.subscribe((res) => console.log(res));
    this.activeRoute.params.subscribe((res)=>{
      this.id = res.id;
      console.log(res);
    })

  
  }

}
