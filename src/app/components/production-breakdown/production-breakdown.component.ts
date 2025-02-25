import { Component, OnInit } from '@angular/core';
import { Production, Sequence, Scene, ActionBeat } from '../../models/production.model';
import { ProductionService } from '../../services/production.service';

@Component({
  selector: 'app-production-breakdown',
  templateUrl: './production-breakdown.component.html',
  styleUrls: ['./production-breakdown.component.scss']
})
export class ProductionBreakdownComponent implements OnInit {
  production: Production;
  selectedTab: string = 'Breakdown';
  searchTerm: string = '';
  
  tabs = [
    'Breakdown',
    'Budget',
    'Characters',
    'Locations',
    'Bids',
    'Agreements'
  ];

  actions = [
    { label: 'CLOSE ALL', action: 'closeAll' },
    { label: 'ADD SEQUENCE', action: 'addSequence' },
    { label: 'GENERATE SHOTS', action: 'generateShots' },
    { label: 'GENERATE VFX ASSUMPTIONS', action: 'generateAssumptions' },
    { label: 'GENERATE COST ESTIMATES', action: 'generateEstimates' }
  ];

  constructor(private productionService: ProductionService) {
    this.production = {} as Production;
  }

  ngOnInit(): void {
    this.productionService.getProduction().subscribe(production => {
      this.production = production;
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  performAction(action: string): void {
    switch(action) {
      case 'closeAll':
        this.closeAllItems();
        break;
      case 'addSequence':
        // TODO: Implement add sequence
        break;
      case 'generateShots':
        // TODO: Implement generate shots
        break;
      case 'generateAssumptions':
        // TODO: Implement generate assumptions
        break;
      case 'generateEstimates':
        // TODO: Implement generate estimates
        break;
    }
  }

  closeAllItems(): void {
    this.production.sequences.forEach((seq: Sequence) => {
      seq.isCollapsed = true;
      seq.scenes.forEach((scene: Scene) => {
        scene.isCollapsed = true;
        scene.actionBeats.forEach((beat: ActionBeat) => {
          beat.isCollapsed = true;
        });
      });
    });
  }

  onSearch(): void {
    // TODO: Implement search functionality
    console.log('Searching for:', this.searchTerm);
  }
}
