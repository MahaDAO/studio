import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { GetDisplayPropsParams } from '~position/template/app-token.template.types';

import {
  AaveV2ReserveApyData,
  AaveV2ReserveTokenAddressesData,
  AaveV2LendingTokenFetcher,
  AaveV2LendingTokenDataProps,
} from '../common/mahalend.lending.token-fetcher';
import { AaveV2AToken } from '../contracts/ethers/MahalendAToken';

@PositionTemplate()
export class EthereumAaveV2SupplyTokenFetcher extends AaveV2LendingTokenFetcher {
  groupLabel = 'Lending';
  providerAddress = '0xCB5a1D4a394C4BA58999FbD7629d64465DdA70BC';
  isDebt = false;

  getTokenAddress(reserveTokenAddressesData: AaveV2ReserveTokenAddressesData): string {
    return reserveTokenAddressesData.aTokenAddress;
  }

  getApyFromReserveData(reserveApyData: AaveV2ReserveApyData): number {
    return reserveApyData.supplyApy;
  }

  async getTertiaryLabel({ appToken }: GetDisplayPropsParams<AaveV2AToken, AaveV2LendingTokenDataProps>) {
    return `${appToken.dataProps.apy.toFixed(3)}% APY`;
  }
}
