import {
  ContractCallOptions,
  RecipientWithShareType,
  getMessageFromEthersError,
  valveRecipientsToContractFormat,
} from './utils/common'
import BaseContractV010Client, {
  ContractV010ClientOptions,
} from './BaseV010Client'
import { XLAValve_v010, XLAValve_v010__factory } from './generated'

export class ValveV010Client extends BaseContractV010Client {
  contract: XLAValve_v010

  constructor({
    contractAddress,
    provider,
    signer,
    blockchain,
  }: ContractV010ClientOptions) {
    super({ provider, signer, blockchain })

    this.blockchain = blockchain
    this.contract = XLAValve_v010__factory.connect(
      contractAddress,
      this._signer,
    )
  }

  /**
   * @param _recipients - percentage example: 50 (50%)
   * @param options
   * @returns
   */
  async setRecipients(
    _recipients: RecipientWithShareType[],
    options?: ContractCallOptions,
  ) {
    const { addresses, percentages } =
      valveRecipientsToContractFormat(_recipients)

    try {
      return await this._applyHandlersToContractCall(
        () => this.contract.setRecipients(addresses, percentages),
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

  async setRecipientsAndLock(
    _recipients: RecipientWithShareType[],
    options?: ContractCallOptions,
  ) {
    const { addresses, percentages } =
      valveRecipientsToContractFormat(_recipients)

    try {
      return await this._applyHandlersToContractCall(
        () => this.contract.setRecipientsExt(addresses, percentages),
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
