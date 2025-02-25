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

export const MOCK_PRODUCTION: Production = {
  id: 'test88',
  title: 'TEST 88',
  sequences: [
    {
      id: 'SEQ',
      title: 'SEQ:',
      isCollapsed: false,
      scenes: [
        {
          id: 'SEQ:1',
          title: 'DEEP SPACE - THE SINGULARITY',
          characters: 2,
          isCollapsed: false,
          description: '',
          actionBeats: [
            {
              id: 'SEQ:1:1',
              title: 'A VAST, ENDLESS VOID. THEN—AN EXPLOSION. THE BIG BANG TEARS ACROSS THE COSMOS, SENDING SPIRALS OF RADIANT ENERGY AND DARKNESS IN OPPOSITE DIRECTIONS.',
              description: '',
              isCollapsed: false,
              shots: [
                {
                  id: 'SEQ:1:1:1',
                  title: 'Close-up of a vast, endless void.',
                  description: '',
                  thumbnail: 'assets/void.jpg',
                  has: {
                    character: false,
                    asset: false,
                    fx: true
                  }
                },
                {
                  id: 'SEQ:1:1:2',
                  title: 'Medium shot of the EXPLOSION ripping through the void.',
                  description: '',
                  thumbnail: 'assets/explosion.jpg',
                  has: {
                    character: false,
                    asset: false,
                    fx: true
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export { Production, Sequence, Scene, ActionBeat, Shot };
