import { AminullahPrayer } from './public/data/pray-aminullah';
import { AshuraPrayer } from './public/data/pray-ashura';
import { UmmDavudPrayer } from './public/data/pray-umdavoud';
import { KumaylPrayer } from './public/data/pray-kumayl';
import { TawassulPrayer } from './public/data/pray-tawassul';
import { JamiahKabirahPrayer } from './public/data/pray-jamiahkabirah';
import { Prayer } from './types';

export const DUAS: Prayer[] = [
  KumaylPrayer,
  AshuraPrayer,
  UmmDavudPrayer,
  TawassulPrayer,
  AminullahPrayer,
  JamiahKabirahPrayer,
];
