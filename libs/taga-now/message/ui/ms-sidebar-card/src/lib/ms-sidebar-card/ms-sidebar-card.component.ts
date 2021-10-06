import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tgn-ms-sidebar-card',
  templateUrl: './ms-sidebar-card.component.html',
  styleUrls: ['./ms-sidebar-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MsSidebarCardComponent implements OnInit {

  constructor() { }
  position = 'right'
  panels = [
    {
      active: true,
      name: 'Thành viên',
      type: 'customer',
      customStyle: {
        background: '#FAFAFA',
        border: '0px',
        padding:'0px',
        'margin-bottom': '20px',
        'border-radius': '20px',
      },
    },
    {
      active: true,
      name: 'Hình ảnh',
      type: 'image',
      customStyle: {
        background: '#FAFAFA',
        border: '0px',
        padding:'0px',
        'margin-bottom': '20px',
        'border-radius': '20px',
      },
    },
    {
      active: true,
      name: 'Tài liệu',
      type: 'file',
      customStyle: {
        background: '#FAFAFA',
        border: '0px',
        padding:'0px',
        'margin-bottom': '20px',
        'border-radius': '20px',
      },
    },
    {
      active: true,
      name: 'Khác',
      type: 'other',
      customStyle: {
        background: '#FAFAFA',
        border: '0px',
        padding:'0px',
        'margin-bottom': '20px',
        'border-radius': '20px',
      },
    }
    
  ];
  loading = false;
  listMessageLive: any [] = [
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
  ngOnInit() {
  }

}
