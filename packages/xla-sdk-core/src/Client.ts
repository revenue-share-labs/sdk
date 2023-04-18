import BaseClient from './BaseClient'
import {
  Blockchain,
  BLOCKCHAIN_DATA,
  FACTORIES,
  CONTRACT_VERSIONS,
} from './constants'
import {
  PrepaymentFactoryV010Client,
  ValveFactoryV010Client,
} from './FactoryClient'
// import { PrepaymentV010Client } from './PrepaymentV010Client'
import { ValveV010Client } from './ValveV010Client'

/**
 * XLA Client
 *
 * @remarks
 *   This is the main entry point for the XLA SDK. It provides access to all the
 *   XLA contracts.
 * @example ```typescript
 *   import { XLAClient } from 'xla-sdk-core'
 *
 *   const provider = new ethers.providers.Web3Provider(window.ethereum)
 *
 *   await provider.enable()
 *   const client = new XLAClient({
 *    provider,
 *    signer: provider.getSigner(),
 *   })
 *
 *   const valveClient = client.getValveClient('0x...', 'POLYGON')
 *
 *   await valveClient.setRecipients([
 *    {
 *      address: '0x...',
 *      percentage: 100,
 *    }
 *   ])
 *   ```
 */
export default class XLAClient extends BaseClient {
  public static supportedBlockchains: Blockchain[] = [
    'POLYGON',
    'ETH',
    'MUMBAI',
    'GOERLI',
  ]

  public static _factories = FACTORIES
  public static _blockchainData = BLOCKCHAIN_DATA

  getValveClient(
    address: string,
    blockchain: Blockchain,
    version?: CONTRACT_VERSIONS,
  ) {
    return this._getVersionSpecificValveClient(address, blockchain, version)
  }

  private _getVersionSpecificValveClient(
    address: string,
    blockchain: Blockchain,
    version: CONTRACT_VERSIONS = CONTRACT_VERSIONS.V010,
  ) {
    if (version === CONTRACT_VERSIONS.V010) {
      return new ValveV010Client({
        contractAddress: address,
        provider: this._provider,
        signer: this._signer,
        blockchain,
      })
    } else {
      throw new Error('Unsupported contract version')
    }
  }

  // /**
  //  * Get a prepayment client for a deployed prepayment contract
  //  *
  //  * @remarks
  //  *   Test
  //  * @param address - Hex address of the valve contract
  //  * @param blockchain - Blockchain the valve is deployed on
  //  * @returns PrepaymentClient
  //  */
  // getPrepaymentClient(
  //   address: string,
  //   blockchain: Blockchain,
  //   version?: CONTRACT_VERSIONS,
  // ) {
  //   return this._getVersionSpecificPrepaymentClient(
  //     address,
  //     blockchain,
  //     version,
  //   )
  // }

  // private _getVersionSpecificPrepaymentClient(
  //   address: string,
  //   blockchain: Blockchain,
  //   version: CONTRACT_VERSIONS = CONTRACT_VERSIONS.V010,
  // ) {
  //   if (version === CONTRACT_VERSIONS.V010) {
  //     return new PrepaymentV010Client({
  //       contractAddress: address,
  //       provider: this._provider,
  //       signer: this._signer,
  //       blockchain,
  //     })
  //   } else {
  //     throw new Error('Unsupported contract version')
  //   }
  // }

  getValveFactoryClient(blockchain: Blockchain, version?: CONTRACT_VERSIONS) {
    return this._getVersionSpecificValveFactoryClient(version, blockchain)
  }

  getPrepaymentFactoryClient(
    blockchain: Blockchain,
    version?: CONTRACT_VERSIONS,
  ) {
    return this._getVersionSpecificPrepaymentFactoryClient(version, blockchain)
  }

  private _getVersionSpecificValveFactoryClient(
    version: CONTRACT_VERSIONS = CONTRACT_VERSIONS.V010,
    blockchain: Blockchain,
  ) {
    if (version === CONTRACT_VERSIONS.V010) {
      return new ValveFactoryV010Client({
        provider: this._provider,
        signer: this._signer,
        blockchain,
      })
    } else {
      throw new Error('Unsupported contract version')
    }
  }

  private _getVersionSpecificPrepaymentFactoryClient(
    version: CONTRACT_VERSIONS = CONTRACT_VERSIONS.V010,
    blockchain: Blockchain,
  ) {
    if (version === CONTRACT_VERSIONS.V010) {
      return new PrepaymentFactoryV010Client({
        provider: this._provider,
        signer: this._signer,
        blockchain,
      })
    } else {
      throw new Error('Unsupported contract version')
    }
  }
}
