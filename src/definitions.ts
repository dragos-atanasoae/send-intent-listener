import { PluginListenerHandle } from '@capacitor/core';

declare module "@capacitor/core" {
  interface PluginRegistry {
    SendIntentListener: SendIntentListenerPlugin;
  }
}

export interface SendIntentListenerPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  addListener(eventName: 'init', listenerFunc: (event: any) => void): PluginListenerHandle;
  addListener(eventName: 'initError', listenerFunc: (error: any) => void): PluginListenerHandle;
}
