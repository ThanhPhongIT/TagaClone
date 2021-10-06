import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface FileNode {
  name: string;
  owner: string;
  updateOn: string;
  size: string;
  disabled?: boolean;
  children?: FileNode[];
}
@Component({
  selector: 'tgn-company-document',
  templateUrl: './company-document.component.html',
  styleUrls: ['./company-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyDocumentComponent implements OnInit {
  tabs = ['Thông tin', 'Lịch sử'];
  isSider: boolean = false;
  setIndextab: number = 1;
  listButton = [
    {
      label: 'Tải lên',
      svgKey: 'upLoadFile',
      name: 'upload',
    },
    {
      label: 'Chia sẻ',
      svgKey: 'createTable',
      name: 'createTable',
    },
    {
      label: 'Đổi tên',
      svgKey: 'addEmployee',
      name: 'creatFolder',
    }
  ];
  listButtonHis = [
    {
      label: 'Tải xuống',
      svgKey: 'iconDowload',
      name: 'download',
    },
    {
      label: 'Xóa',
      svgKey: 'iconDelete',
      name: 'delete',
    }
  ];
  listAction = [
    {
      label: 'Mở',
      svgKey: 'iconFile',
      name: 'open',
    },
    {
      label: 'Chia sẻ',
      svgKey: 'iconShared',
      name: 'share',
    },
    {
      label: 'Đổi tên',
      svgKey: 'iconEdit',
      name: 'editName',
    },
    {
      label: 'Lịch sử chỉnh sửa',
      svgKey: 'iconHistoryEdit',
      name: 'history',
    },
    {
      label: 'Chi tiết file',
      svgKey: 'iconDetailFile',
      name: 'detail',
    },
    {
      label: 'Tải xuống',
      svgKey: 'iconDowload',
      name: 'dowload',
    },
    {
      label: 'Đánh dấu sao',
      svgKey: 'iconStart',
      name: 'bookmark',
    },
    {
      label: 'Xóa',
      svgKey: 'iconDelete',
      name: 'delete',
    },
  ];
  TREE_DATA_PDF: FileNode[] = [
  {
    name: 'PDF',
    owner: '',
    updateOn : '',
    size: '',
    children: [
      {
        name: 'Sản xuất áo dài tay TagaNow',
        owner: 'Trần Quang Anh',
        updateOn : '17:24 24/03/2021',
        size: '125,357 KB'
      }, 
      {
        name: 'Sản xuất áo dài tay TagaNow',
        owner: 'Trần Quang Anh',
        updateOn : '17:24 24/03/2021',
        size: '125,357 KB'
      }]
  }
];
TREE_DATA_WORD: FileNode[] = [
  {
    name: 'Word',
    owner: '',
    updateOn : '',
    size: '',
    children: [
      {
        name: 'Sản xuất áo dài tay TagaNow',
        owner: 'Trần Quang Anh',
        updateOn : '17:24 24/03/2021',
        size: '125,357 KB'
      }, 
      {
        name: 'Sản xuất áo dài tay TagaNow',
        owner: 'Trần Quang Anh',
        updateOn : '17:24 24/03/2021',
        size: '125,357 KB'
      }]
  }
];
TREE_DATA_CSV: FileNode[] = [
  {
    name: 'CSV',
    owner: '',
    updateOn : '',
    size: '',
    children: [
      {
        name: 'Sản xuất áo dài tay TagaNow',
        owner: 'Trần Quang Anh',
        updateOn : '17:24 24/03/2021',
        size: '125,357 KB'
      }, 
      {
        name: 'Sản xuất áo dài tay TagaNow',
        owner: 'Trần Quang Anh',
        updateOn : '17:24 24/03/2021',
        size: '125,357 KB'
      }]
  }
];

  constructor() {

  }

  ngOnInit() {

  }

  handle(ev: string){
    console.log(ev);
  }

  handle_data(ev: string){
    console.log(ev);
    if(ev === 'detail'){
      this.isSider = true;
      this.setIndextab = 0;
    }
    if(ev === 'history'){
      this.isSider = true;
      this.setIndextab = 1;
    }
    if(ev === 'open'){

    }
  }

}
