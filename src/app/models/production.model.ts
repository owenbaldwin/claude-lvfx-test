export interface Shot {
  id: string;
  title: string;
  description: string;
  isCollapsed?: boolean;
  thumbnail?: string;
  has?: {
    character?: boolean;
    asset?: boolean;
    fx?: boolean;
  };
}

export interface ActionBeat {
  id: string;
  title: string;
  description: string;
  shots: Shot[];
  isCollapsed?: boolean;
}

export interface Scene {
  id: string;
  title: string;
  description: string;
  actionBeats: ActionBeat[];
  isCollapsed?: boolean;
  characters?: number;
}

export interface Sequence {
  id: string;
  title: string;
  description?: string;
  scenes: Scene[];
  isCollapsed?: boolean;
}

export interface Production {
  id: string;
  title: string;
  sequences: Sequence[];
}
