import {Component, Input} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const transformer = (node, level: number) => {
  return {
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level,
    routerLink: node.routerLink
  };
};

@Component({
  selector: 'app-tree-ng',
  templateUrl: './tree-ng.component.html',
  styleUrls: ['./tree-ng.component.scss']
})
export class TreeNgComponent {
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    transformer, node => node.level, node => node.expandable, node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  @Input() public set treeData(treeData: []) {
    this.dataSource.data = treeData;
  }

  constructor() {}

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
