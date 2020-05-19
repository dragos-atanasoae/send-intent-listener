import { WebPlugin } from '@capacitor/core';
import { SendIntentListenerPlugin } from './definitions';
export declare class SendIntentListenerWeb extends WebPlugin implements SendIntentListenerPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const SendIntentListener: SendIntentListenerWeb;
export { SendIntentListener };
