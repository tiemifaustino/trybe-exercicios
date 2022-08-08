// ConsoleNotification.ts

import { Notificator } from './Notificator';

export default class ConsoleNotification implements Notificator {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private name: string) { }

  sendNotification(message: string): void {
    console.log(`Here we go again! - ${message} from ${this.name}`);
  }
}