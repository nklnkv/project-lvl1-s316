#! /usr/bin/env node

import { welcome, gameRunner } from '..';
import * as game from '../games/even';

welcome();
gameRunner(game);
