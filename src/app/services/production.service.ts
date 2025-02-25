import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PRODUCTION } from '../models/mock-data';

interface BaseItem {
  id: string;
  title: string;
  isCollapsed?: boolean;
}

interface Shot extends BaseItem {
  description: string;
  thumbnail?: string;
  has?: {
    character?: boolean;
    asset?: boolean;
    fx?: boolean;
  };
}

interface ActionBeat extends BaseItem {
  description: string;
  shots: Shot[];
}

interface Scene extends BaseItem {
  description: string;
  actionBeats: ActionBeat[];
  characters?: number;
}

interface Sequence extends BaseItem {
  description?: string;
  scenes: Scene[];
}

interface Production {
  id: string;
  title: string;
  sequences: Sequence[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  private production: Production = MOCK_PRODUCTION;

  constructor() { }

  getProduction(): Observable<Production> {
    return of(this.production);
  }

  addSequence(sequence: Sequence): void {
    this.production.sequences.push(sequence);
  }

  addScene(sequenceId: string, scene: Scene): void {
    const sequence = this.findSequence(sequenceId);
    if (sequence) {
      sequence.scenes.push(scene);
    }
  }

  addActionBeat(sequenceId: string, sceneId: string, actionBeat: ActionBeat): void {
    const scene = this.findScene(sequenceId, sceneId);
    if (scene) {
      scene.actionBeats.push(actionBeat);
    }
  }

  addShot(sequenceId: string, sceneId: string, actionBeatId: string, shot: Shot): void {
    const actionBeat = this.findActionBeat(sequenceId, sceneId, actionBeatId);
    if (actionBeat) {
      actionBeat.shots.push(shot);
    }
  }

  private findSequence(sequenceId: string): Sequence | undefined {
    return this.production.sequences.find((seq: Sequence) => seq.id === sequenceId);
  }

  private findScene(sequenceId: string, sceneId: string): Scene | undefined {
    const sequence = this.findSequence(sequenceId);
    return sequence?.scenes.find((scene: Scene) => scene.id === sceneId);
  }

  private findActionBeat(sequenceId: string, sceneId: string, actionBeatId: string): ActionBeat | undefined {
    const scene = this.findScene(sequenceId, sceneId);
    return scene?.actionBeats.find((beat: ActionBeat) => beat.id === actionBeatId);
  }

  /* Methods for future implementation */
  generateShotsFromScript(script: string): Shot[] {
    // This would be implemented to parse a script and auto-generate shots
    return [];
  }

  generateVfxAssumptions(shot: Shot): any {
    // This would be implemented to generate VFX assumptions based on shot description
    return {};
  }

  generateCostEstimates(shots: Shot[]): any {
    // This would be implemented to calculate cost estimates
    return {};
  }
}

export { Production, Sequence, Scene, ActionBeat, Shot };
