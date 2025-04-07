import { Component, Input } from '@angular/core';
import { CommonModule, NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, NgClass],
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {
  @Input() node: any;

  toggle(): void {
    if (this.node.children?.length) {
      this.node.expanded = !this.node.expanded;
    }
  }
}
