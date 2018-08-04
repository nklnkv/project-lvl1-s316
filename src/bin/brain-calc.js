#! /usr/bin/env node

import { welcome, gameRunner } from '..';
import * as game from '../games/calc';

welcome();
gameRunner(game);
