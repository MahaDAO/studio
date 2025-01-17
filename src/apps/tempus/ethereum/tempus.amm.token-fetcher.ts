import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';

import { TempusAmmTokenFetcher } from '../common/tempus.amm.token-fetcher';

@PositionTemplate()
export class EthereumTempusAmmTokenFetcher extends TempusAmmTokenFetcher {
  groupLabel = 'AMM Liquidity';
}
