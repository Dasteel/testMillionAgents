import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, TreeNodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tree';

  treeNodes = [
    {
      "id": 1,
      "title": "Значение 1",
      "is_deleted": false,
      "children": [
        {
          "id": 2,
          "title": "Значение 1.1",
          "is_deleted": false,
          "children": [
            {
              "id": 3,
              "title": "Значение 1.1.1",
              "is_deleted": true,
              "children": []
            }
          ]
        },
        {
          "id": 4,
          "title": "Значение 1.2",
          "is_deleted": false,
          "children": [
            {
              "id": 5,
              "title": "Значение 1.2.1",
              "is_deleted": false,
              "children": []
            },
            {
              "id": 6,
              "title": "Значение 1.2.2",
              "is_deleted": false,
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": 7,
      "title": "Значение 2",
      "is_deleted": false,
      "children": [
        {
          "id": 8,
          "title": "Значение 2.1",
          "is_deleted": true,
          "children": [
            {
              "id": 9,
              "title": "Значение 2.1.1",
              "is_deleted": true,
              "children": [
                {
                  "id": 10,
                  "title": "Значение 2.1.1.1",
                  "is_deleted": true,
                  "children": [
                    {
                      "id": 11,
                      "title": "Значение 2.1.1.1.1",
                      "is_deleted": true,
                      "children": [
                        {
                          "id": 12,
                          "title": "Значение 2.1.1.1.1.1",
                          "is_deleted": false,
                          "deleted_at": null,
                          "children": [
                            {
                              "id": 13,
                              "title": "Значение 2.1.1.1.1.1.1",
                              "is_deleted": false,
                              "children": []
                            }
                          ]
                        },
                        {
                          "id": 13,
                          "title": "Значение 2.1.1.1.1.2",
                          "is_deleted": false,
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
      ]
    }
  ];
}
