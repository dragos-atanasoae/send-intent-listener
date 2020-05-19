import { WebPlugin } from '@capacitor/core';
import { SendIntentListenerPlugin } from './definitions';

export class SendIntentListenerWeb extends WebPlugin implements SendIntentListenerPlugin {
  constructor() {
    super({
      name: 'SendIntentListener',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const SendIntentListener = new SendIntentListenerWeb();

export { SendIntentListener };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SendIntentListener);
