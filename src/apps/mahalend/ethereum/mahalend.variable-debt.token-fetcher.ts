import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { GetDisplayPropsParams } from '~position/template/app-token.template.types';

import {
  AaveV2ReserveApyData,
  AaveV2ReserveTokenAddressesData,
  AaveV2LendingTokenFetcher,
  AaveV2LendingTokenDataProps,
} from '../../aave-v2/common/aave-v2.lending.token-fetcher';
import { MahalendAToken } from '../contracts/ethers/MahalendAToken';

@PositionTemplate()
export class EthereumMahalendVariableDebtTokenFetcher extends AaveV2LendingTokenFetcher {
  groupLabel = 'Lending';
  providerAddress = '0xCB5a1D4a394C4BA58999FbD7629d64465DdA70BC';
  isDebt = true;

  getTokenAddress(reserveTokenAddressesData: AaveV2ReserveTokenAddressesData): string {
    return reserveTokenAddressesData.variableDebtTokenAddress;
  }

  getApyFromReserveData(reserveApyData: AaveV2ReserveApyData): number {
    return reserveApyData.variableBorrowApy;
  }

  async getTertiaryLabel({ appToken }: GetDisplayPropsParams<MahalendAToken, AaveV2LendingTokenDataProps>) {
    return `${appToken.dataProps.apy.toFixed(3)}% APR (variable)`;
  }
}
