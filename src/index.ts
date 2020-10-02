import * as child_process from 'child_process';
import * as path from 'path';

import { EventEmitter } from 'events';

/** A stream of keystates */
export class KeyStream extends EventEmitter {
  constructor() {
    super();

    const keysProcess = child_process.spawn(`${path.join(__dirname, '../bin/keys.exe')}`);

    keysProcess.stdout.on('data', (data: any) => this.emit('data', JSON.parse(data)));
    keysProcess.on('close', () => this.emit('error', new Error(`unexpected closure of keys.exe process`)));
  }
}
