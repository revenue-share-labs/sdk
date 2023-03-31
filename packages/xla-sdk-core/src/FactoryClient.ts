import { ContractReceipt, ethers } from 'ethers'
import { OwnableContract } from './BaseClient'
import { BLOCKCHAIN_DATA, Blockchain, BlockchainData } from './constants'
import {
  XLAPrepaymentFactory_v010__factory,
  XLAValveFactory_v010__factory,
} from './generated/factories'
import { XLARSCValveFactory } from './generated/XLAValveFactory_v010'
import {
  BigNumberLike,
  ContractCallOptions,
  RecipientWithShareType,
  getMessageFromEthersError,
  valveRecipientsToContractFormat,
  toBigNumber,
  toContractPercent,
} from './utils/common'
import { XLARSCPrepaymentFactory } from './generated/XLAPrepaymentFactory_v010'

export type BaseFactoryV010ClientOptions = {
  blockchain: Blockchain
  provider: ethers.providers.Provider
  signer: ethers.Signer
}

class BaseFactoryV010Client extends OwnableContract {
  blockchain: Blockchain
  blockchainData: BlockchainData

  constructor({ provider, signer, blockchain }: BaseFactoryV010ClientOptions) {
    super({ provider, signer })

    this.blockchain = blockchain
    this.blockchainData = BLOCKCHAIN_DATA[blockchain]
  }

  async setFeeWallet(
    factoryAddress: string,
    feeWallet: string,
    options?: ContractCallOptions,
  ) {
    try {
      const factory = XLAValveFactory_v010__factory.connect(
        factoryAddress,
        this._signer,
      )
      return await this._applyHandlersToContractCall(
        async () => await factory.setPlatformWallet(feeWallet),
        options?.eventHandlers,
      )
    } catch (e: any) {
      const message =
        e.code === 'INVALID_ARGUMENT' && e.argument === 'name'
          ? 'Entered address is invalid'
          : getMessageFromEthersError(e).message

      throw new Error(message)
    }
  }

  async setFactoryFee(
    factoryAddress: string,
    feePercent: BigNumberLike,
    options?: ContractCallOptions,
  ) {
    try {
      const factory = XLAValveFactory_v010__factory.connect(
        factoryAddress,
        this._signer,
      )

      return await this._applyHandlersToContractCall(
        async () =>
          await factory.setPlatformWallet(toContractPercent(feePercent)),
        options?.eventHandlers,
      )
    } catch (e: any) {
      // console.log(e)
      const message =
        e.code === 'INVALID_ARGUMENT' && e.argument === 'name'
          ? 'Entered address is invalid'
          : getMessageFromEthersError(e).message
      throw new Error(message)
    }
  }
}

type CreateValveParams = {
  controller: string
  isImmutableRecipients: boolean
  isAutoNativeCurrencyDistribution: boolean
  minAutoDistributeAmountInEthers: BigNumberLike
  distributors: string[]
  recipients: RecipientWithShareType[]
  creationId: Uint8Array
}

export class ValveFactoryV010Client extends BaseFactoryV010Client {
  async createValveContract(
    {
      controller,
      isImmutableRecipients,
      isAutoNativeCurrencyDistribution,
      minAutoDistributeAmountInEthers,
      distributors,
      recipients,
      creationId,
    }: CreateValveParams,
    options?: ContractCallOptions,
  ): Promise<ContractReceipt> {
    try {
      const factory = XLAValveFactory_v010__factory.connect(
        this.blockchainData.valveFactoryAddress,
        this._signer,
      )

      const { addresses, percentages } =
        valveRecipientsToContractFormat(recipients)

      const data: XLARSCValveFactory.RSCCreateDataStruct = {
        controller,
        isImmutableRecipients: isImmutableRecipients,
        isAutoNativeCurrencyDistribution: isAutoNativeCurrencyDistribution,
        initialRecipients: addresses,
        percentages,
        minAutoDistributeAmount: toBigNumber(minAutoDistributeAmountInEthers)
          .times(1e18)
          .toString(),
        distributors,
        creationId,
      }

      return await this._applyHandlersToContractCall(
        () => factory.createRSCValve(data),
        options?.eventHandlers,
      )
    } catch (e: any) {
      const message =
        e.code === 'INVALID_ARGUMENT' && e.argument === 'name'
          ? 'Entered address is invalid'
          : getMessageFromEthersError(e).message

      throw new Error(message)
    }
  }
}

type InvestorData = {
  investorAddress: string
  interestRatePercent: BigNumberLike
  residualInterestRatePercent: BigNumberLike
  erc20TokensSupportedForPayingOffInvestor: string[]
} & (
  | { currency: 'NATIVE'; investedAmountInEthers: BigNumberLike }
  | {
      currency: 'USD'
      investedAmountInUsd: BigNumberLike
      nativeTokenUsdPriceFeedAddress: string
    }
)
type CreatePrepaymentParams = {
  controller: string
  isImmutableController: boolean
  isAutoNativeCurrencyDistribution: boolean
  minAutoDistributeAmountInEthers: BigNumberLike
  distributors: string[]
  recipients: RecipientWithShareType[]
  creationId: Uint8Array
  investorData: InvestorData
  erc20ToNativeTokenPriceFeedAddresses: string[]
}

export class PrepaymentFactoryV010Client extends BaseFactoryV010Client {
  async createPrepaymentContract(
    {
      controller,
      isImmutableController,
      isAutoNativeCurrencyDistribution,
      minAutoDistributeAmountInEthers,
      distributors,
      recipients,
      creationId,
      investorData,
      erc20ToNativeTokenPriceFeedAddresses,
    }:
      | CreatePrepaymentParams
      | (Omit<CreatePrepaymentParams, 'controller' | 'isImmutable'> & {
          isImmutable: true
          controller: any
        }),
    options?: ContractCallOptions,
  ): Promise<ContractReceipt> {
    try {
      const factory = XLAPrepaymentFactory_v010__factory.connect(
        this.blockchainData.valveFactoryAddress,
        this._signer,
      )

      const { addresses, percentages } =
        valveRecipientsToContractFormat(recipients)

      const data: XLARSCPrepaymentFactory.RSCCreateDataStruct = {
        controller,
        isImmutableController,
        isAutoNativeCurrencyDistribution,
        initialRecipients: addresses,
        percentages,
        distributors,
        creationId,
        interestRate: toContractPercent(investorData.interestRatePercent),
        investor: investorData.investorAddress,
        residualInterestRate: toContractPercent(
          investorData.residualInterestRatePercent,
        ),
        supportedErc20addresses:
          investorData.erc20TokensSupportedForPayingOffInvestor,
        erc20PriceFeeds: erc20ToNativeTokenPriceFeedAddresses,

        investedAmount: toBigNumber(
          investorData.currency === 'NATIVE'
            ? investorData.investedAmountInEthers
            : investorData.investedAmountInUsd,
        )
          .times(1e18)
          .toString(),

        minAutoDistributeAmount:
          investorData.currency === 'NATIVE'
            ? toBigNumber(minAutoDistributeAmountInEthers)
                .times(1e18)
                .toString()
            : investorData.nativeTokenUsdPriceFeedAddress,
      }

      if (investorData.currency === 'NATIVE') {
        return await this._applyHandlersToContractCall(
          () => factory.createRSCPrepayment(data),
          options?.eventHandlers,
        )
      } else {
        return await this._applyHandlersToContractCall(
          () =>
            factory.createRSCPrepaymentUsd(
              data,
              investorData.nativeTokenUsdPriceFeedAddress,
            ),
          options?.eventHandlers,
        )
      }
    } catch (e: any) {
      const message =
        e.code === 'INVALID_ARGUMENT' && e.argument === 'name'
          ? 'Entered address is invalid'
          : getMessageFromEthersError(e).message

      throw new Error(message)
    }
  }
}
