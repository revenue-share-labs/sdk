import {
  ContractCallOptions,
  RecipientWithShareType,
  getMessageFromEthersError,
  valveRecipientsToContractFormat,
} from './utils/common'
import BaseContractV010Client, {
  ContractV010ClientOptions,
} from './BaseV010Client'
import {
  XLAPrepaymentUSD_v010,
  XLAPrepaymentUSD_v010__factory,
  XLAPrepayment_v010,
} from './generated'

// export class PrepaymentV010Client extends BaseContractV010Client {
//   contract: XLAPrepayment_v010 | XLAPrepaymentUSD_v010

//   constructor({
//     contractAddress,
//     provider,
//     signer,
//     blockchain,
//   }: ContractV010ClientOptions) {
//     super({ provider, signer, blockchain })

//     this.blockchain = blockchain
//     this.contract = XLAPrepaymentUSD_v010__factory.connect(
//       contractAddress,
//       this._signer,
//     )
//   }

//   async setRecipients(
//     _recipients: RecipientWithShareType[],
//     options?: ContractCallOptions,
//   ) {
//     const { addresses, percentages } =
//       valveRecipientsToContractFormat(_recipients)
//     try {
//       return await this._applyHandlersToContractCall(
//         () => this.contract.setRecipients(addresses, percentages),
//         options?.eventHandlers,
//       )
//     } catch (e: any) {
//       const message =
//         e.code === 'INVALID_ARGUMENT' && e.argument === 'name'
//           ? 'Entered address is invalid'
//           : getMessageFromEthersError(e).message

//       throw new Error(message)
//     }
//   }
// }
