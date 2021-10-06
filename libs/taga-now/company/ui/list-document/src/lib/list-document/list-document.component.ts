import { NzPlacementType } from 'ng-zorro-antd/dropdown';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';

interface FileNode {
  name: string;
  owner: string;
  updateOn: string;
  size: string;
  disabled?: boolean;
  children?: FileNode[];
}



/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  owner: string;
  updateOn: string;
  size: string;
  level: number;
  disabled: boolean;
}

@Component({
  selector: 'tgn-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDocumentComponent implements AfterViewInit, OnInit {

  @Input() TREE_DATA!: FileNode[];
  @Output() callBack = new EventEmitter();
  @Input() listButton!: any;
  positionDropdown: NzPlacementType = 'bottomRight';

  private transformer = (node: FileNode, level: number) => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    owner: node.owner,
    updateOn: node.updateOn,
    size: node.size,
    level,
    disabled: !!node.disabled
  });
  selectListSelection = new SelectionModel<ExampleFlatNode>();

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new NzTreeFlatDataSource((this.treeControl as any), this.treeFlattener);

  constructor() {
   
  }

  ngOnInit():void {
    console.log(this.TREE_DATA);
    this.dataSource.setData(this.TREE_DATA);
    
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngAfterViewInit(): void {
    setTimeout(() => {
      // this.treeControl.expand(this.getNode('Vegetables')!);
    }, 300);
  }

  getNode(name: string, owner: string,  updateOn: string, size: string): ExampleFlatNode | null {
    return this.treeControl.dataNodes.find(n => {
      n.name === name;
      n.owner === owner;
      n.updateOn === updateOn;
      n.size === size;
    }) || null;
  }
}