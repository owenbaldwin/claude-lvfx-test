import { Component, Input, OnInit } from '@angular/core';
import { Sequence, Scene, ActionBeat, Shot } from '../../models/production.model';

@Component({
  selector: 'app-breakdown-row',
  templateUrl: './breakdown-row.component.html',
  styleUrls: ['./breakdown-row.component.scss']
})
export class BreakdownRowComponent implements OnInit {
  @Input() item!: Sequence | Scene | ActionBeat | Shot;
  @Input() type!: 'sequence' | 'scene' | 'action' | 'shot';
  @Input() level: number = 0;

  constructor() { }

  ngOnInit(): void {
    if (!this.item.hasOwnProperty('isCollapsed')) {
      this.item.isCollapsed = false;
    }
  }

  toggleCollapse(): void {
    this.item.isCollapsed = !this.item.isCollapsed;
  }

  // Type guards to properly access properties
  isSequence(item: any): item is Sequence {
    return this.type === 'sequence';
  }

  isScene(item: any): item is Scene {
    return this.type === 'scene';
  }

  isActionBeat(item: any): item is ActionBeat {
    return this.type === 'action';
  }

  isShot(item: any): item is Shot {
    return this.type === 'shot';
  }

  // Helpers to get the right icon based on collapsed state
  getToggleIcon(): string {
    if (this.item.isCollapsed) {
      return 'fa-chevron-right';
    } else {
      return 'fa-chevron-down';
    }
  }

  getRowClass(): string {
    let classes = 'breakdown-row';
    
    switch (this.type) {
      case 'sequence':
        classes += ' sequence-row';
        break;
      case 'scene':
        classes += ' scene-row';
        break;
      case 'action':
        classes += ' action-row';
        break;
      case 'shot':
        classes += ' shot-row';
        break;
    }

    return classes;
  }

  getIndentStyle(): object {
    return { 'padding-left': `${this.level * 20}px` };
  }
}
