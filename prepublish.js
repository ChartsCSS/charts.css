import { writeFileSync } from 'node:fs';
import _pkg from './package.json' with { type: 'json' };

const { browserslist, ...pkg } = _pkg;

writeFileSync('./package.json', JSON.stringify(pkg, null, '  ') + '\n');
