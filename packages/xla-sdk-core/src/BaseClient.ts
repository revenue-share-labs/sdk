import ethers, { ContractReceipt, ContractTransaction } from 'ethers'
import { Ownable } from './generated/Ownable'
import { ContractCallOptions, TransactionEventHandlers } from './utils/common'

export type ClientOptions = {
  provider: ethers.providers.Provider
  signer: ethers.Signer
}
export default class BaseClient {
  _provider: ethers.providers.Provider
  _signer: ethers.Signer

  constructor({ provider, signer }: ClientOptions) {
    this._provider = provider
    this._signer = signer
  }

  protected async _applyHandlersToContractCall(
    call: () => Promise<ContractTransaction>,
    handlers?: TransactionEventHandlers,
  ): Promise<ContractReceipt> {
    handlers?.waitingForConfirmation?.()
    const tx = await call()
    handlers?.waitingForCompletion?.(tx)
    const receipt = await tx.wait()
    return receipt
  }
}

export class OwnableContract extends BaseClient {
  //@ts-ignore
  contract: Ownable

  async transferOwnership(newOwner: string, options?: ContractCallOptions) {
    return this._applyHandlersToContractCall(
      () => this.contract.transferOwnership(newOwner),
      options?.eventHandlers,
    )
  }

  async renounceOwnership(options?: ContractCallOptions) {
    return this._applyHandlersToContractCall(
      () => this.contract.renounceOwnership(),
      options?.eventHandlers,
    )
  }

  async owner() {
    return await this.contract.owner()
  }
}
