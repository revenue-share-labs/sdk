import { ethers } from 'ethers'
import { OwnableContract } from './BaseClient'
import { Blockchain, BLOCKCHAIN_DATA, BlockchainData } from './constants'
import { ContractCallOptions, getMessageFromEthersError } from './utils/common'
import { XLAValve_v010 } from './generated'

export type BaseContractV010ClientOptions = {
  // contractAddress: string
  provider: ethers.providers.Provider
  signer: ethers.Signer
  blockchain: Blockchain
}
export type ContractV010ClientOptions = BaseContractV010ClientOptions & {
  contractAddress: string
}

export default abstract class BaseContractV010Client extends OwnableContract {
  blockchain: string
  blockchainData: BlockchainData
  // @ts-ignore
  abstract contract: XLAValve_v010

  constructor({ provider, signer, blockchain }: BaseContractV010ClientOptions) {
    super({ provider, signer })

    this.blockchain = blockchain
    this.blockchainData = BLOCKCHAIN_DATA[blockchain]
  }

  async distributeNativeCurrency(options?: ContractCallOptions) {
    try {
      if (!(await this.contract.distributors(this._signer.getAddress()))) {
        throw new Error(
          `Connected wallet doesn't have permission to distribute ${this.blockchainData.currencyName}}`,
        )
      }
      return await this._applyHandlersToContractCall(
        async () => await this.contract.functions.redistributeNativeCurrency(),
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

  async distribute(tokenAddress: string, options?: ContractCallOptions) {
    try {
      if (!(await this.contract.distributors(this._signer.getAddress()))) {
        throw new Error(
          "Connected wallet doesn't have permission to distribute tokens",
        )
      }
      return await this._applyHandlersToContractCall(
        async () =>
          await this.contract.functions.redistributeToken(tokenAddress),
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

  async setController(
    controller: string | null,
    options?: ContractCallOptions,
  ) {
    const _controller = controller || ethers.constants.AddressZero

    return await this._applyHandlersToContractCall(
      async () => await this.contract.setController(_controller),
      options?.eventHandlers,
    )
  }

  async removeDistributor(distributor: string, options?: ContractCallOptions) {
    return await this._setDistributor(distributor, false, options)
  }

  async addDistributor(distributor: string, options?: ContractCallOptions) {
    return await this._setDistributor(distributor, true, options)
  }

  async _setDistributor(
    distributor: string,
    add: boolean,
    options?: ContractCallOptions,
  ) {
    return await this._applyHandlersToContractCall(
      async () => await this.contract.setDistributor(distributor, add),
      options?.eventHandlers,
    )
  }
}
