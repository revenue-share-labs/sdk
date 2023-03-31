import XLAClient from './Client'
import BaseClient from './BaseClient'

export default XLAClient
export { XLAClient }

export {
  ValveFactoryV010Client as ValveFactoryV002Client,
  PrepaymentFactoryV010Client as PrepaymentFactoryV002Client,
} from './FactoryClient'
export { ValveV010Client } from './ValveV010Client'
// export { PrepaymentV010Client } from './PrepaymentV010Client'
export { OwnableContract } from './BaseClient'
export { BaseClient }
export {
  CONTRACT_VERSIONS as SUPPORTED_CONTRACT_VERSIONS,
  FACTORIES,
  BLOCKCHAIN_DATA,
} from './constants'
export type { BlockchainData, Blockchain } from './constants'

export * from './utils/common'
export type {
  BigNumberLike,
  ContractCallOptions,
  TransactionEventHandlers,
  RecipientWithShareType,
} from './utils/common'

export type { ClientOptions } from './BaseClient'
export type { BaseFactoryV010ClientOptions as BaseFactoryV002ClientOptions } from './FactoryClient'
export type { BaseContractV010ClientOptions as BaseContractV002ClientOptions } from './BaseV010Client'
