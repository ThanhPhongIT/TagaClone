import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {  Router } from '@angular/router';

export interface ListMessageModel {
  id:number;
  avatarIMG: string;
  name:string;
  content:string;
  numberMessage: number,

}
@Component({
  selector: 'tgn-side-bar-ms',
  templateUrl: './side-bar-ms.component.html',
  styleUrls: ['./side-bar-ms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarMsComponent implements OnInit {
   active: number | undefined;

  constructor(
    private router: Router
  ) { }
  ngOnInit() {
  
  }
  showMessage(id:any){
      this.active = id;
      this.router.navigate(['/message/'+id]);
      
  }
  panels = [
    {
      active: true,
      name: 'Tin nhắn trực tiếp',
      customStyle: {
        background: '#ffffff',
        border: '0px',
        padding:'0px',
        
      },
    },
    {
      active: true,
      name: 'Nhóm',
      customStyle: {
        background: '#ffffff',
        border: '0px',

      }
    },
    {
      active: true,
      name: 'Công việc',
      customStyle: {
        background: '#ffffff',
        border: '0px'
      }
    }
  ];
  loading = false;

  listMessageLive: ListMessageModel [] = [
    {
        id:1,
        avatarIMG: 'assets/message/avt-qa.svg',
        name:'Trần Quang Anh',
        content:'A xem giúp e chưa ạ?',
        numberMessage: 1,
    },
    {
        id:2,
        avatarIMG: 'assets/message/avt-lt.svg',
        name:'Lê Tuyết',
        content:'Chào buổi sáng',
        numberMessage: 1,
    },
    {
        id:3,
        avatarIMG: 'assets/message/avt-ta.svg',
        name:'Nguyễn Thị Thu Anh',
        content:'Làm việc đến đâu rùi?',
        numberMessage: 1,
    }
  ]
  listMessageGroup : ListMessageModel[] = [
      {
          id:4,
          avatarIMG: 'assets/message/avt-group.svg',
          name:'TagaNow',
          content:'Tuyết Trần: A ơi, a ký ...',
          numberMessage: 10,
      },
      {
          id:5,
          avatarIMG: 'assets/message/avt-group.svg',
          name:'TagaNow',
          content:'Tuyết Trần: A ơi, a ký ...',
          numberMessage: 10,
      },
  ]
  listMessageWork : ListMessageModel[] = [
      {
          id:6,
          avatarIMG: 'assets/message/avt-work.svg',
          name:'Trần Quang Anh',
          content:'E làm xong chưa?',
          numberMessage: 1,
      },
  ]

}
