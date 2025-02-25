import { Production } from './production.model';

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
