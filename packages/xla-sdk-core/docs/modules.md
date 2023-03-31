[xla-sdk-core](README.md) / Exports

# xla-sdk-core

## Table of contents

### Enumerations

- [SUPPORTED\_CONTRACT\_VERSIONS](undefined)

### Classes

- [BaseClient](undefined)
- [OwnableContract](undefined)
- [PrepaymentFactoryV002Client](undefined)
- [PrepaymentV002Client](undefined)
- [ValveFactoryV002Client](undefined)
- [ValveV002Client](undefined)
- [default](undefined)

### Type Aliases

- [BaseContractV002ClientOptions](undefined)
- [BaseFactoryV002ClientOptions](undefined)
- [BigNumberLike](undefined)
- [Blockchain](undefined)
- [BlockchainData](undefined)
- [ClientOptions](undefined)
- [ContractCallOptions](undefined)
- [RecipientWithShareType](undefined)
- [TransactionEventHandlers](undefined)

### Variables

- [BLOCKCHAIN\_DATA](undefined)
- [FACTORIES](undefined)

### Functions

- [generateCreationId](undefined)
- [getMessageFromEthersError](undefined)
- [toBigNumber](undefined)
- [toContractPercent](undefined)
- [valveRecipientsToContractFormat](undefined)

## Enumerations

### SUPPORTED\_CONTRACT\_VERSIONS

• **SUPPORTED\_CONTRACT\_VERSIONS**: Enum SUPPORTED\_CONTRACT\_VERSIONS

#### Defined in

[constants.ts:12](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/constants.ts#L12)

## Classes

### BaseClient

• **BaseClient**: Class BaseClient

#### Defined in

[BaseClient.ts:9](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/BaseClient.ts#L9)

___

### OwnableContract

• **OwnableContract**: Class OwnableContract

#### Defined in

[BaseClient.ts:30](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/BaseClient.ts#L30)

___

### PrepaymentFactoryV002Client

• **PrepaymentFactoryV002Client**: Class PrepaymentFactoryV002Client

#### Defined in

[FactoryClient.ts:185](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/FactoryClient.ts#L185)

___

### PrepaymentV002Client

• **PrepaymentV002Client**: Class PrepaymentV002Client

#### Defined in

[PrepaymentClient.ts:9](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/PrepaymentClient.ts#L9)

___

### ValveFactoryV002Client

• **ValveFactoryV002Client**: Class ValveFactoryV002Client

#### Defined in

[FactoryClient.ts:100](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/FactoryClient.ts#L100)

___

### ValveV002Client

• **ValveV002Client**: Class ValveV002Client

#### Defined in

[ValveClient.ts:9](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/ValveClient.ts#L9)

___

### default

• **default**: Class default

XLA Client

**`Remarks`**

This is the main entry point for the XLA SDK. It provides access to all the
  XLA contracts.

**`Example`**

```typescript
  import { XLAClient } from 'xla-sdk-core'

  const provider = new ethers.providers.Web3Provider(window.ethereum)

  await provider.enable()
  const client = new XLAClient({
   provider,
   signer: provider.getSigner(),
  })

  const valveClient = client.getValveClient('0x...', 'POLYGON')

  await valveClient.setRecipients([
   {
     address: '0x...',
     percentage: 100,
   }
  ])
  ```

#### Defined in

[Client.ts:42](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/Client.ts#L42)

## Type Aliases

### BaseContractV002ClientOptions

Ƭ **BaseContractV002ClientOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockchain` | Blockchain |
| `contractAddress` | string |
| `provider` | ethers.providers.Provider |
| `signer` | ethers.Signer |

#### Defined in

[BaseV002Client.ts:8](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/BaseV002Client.ts#L8)

___

### BaseFactoryV002ClientOptions

Ƭ **BaseFactoryV002ClientOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockchain` | Blockchain |
| `provider` | ethers.providers.Provider |
| `signer` | ethers.Signer |

#### Defined in

[FactoryClient.ts:20](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/FactoryClient.ts#L20)

___

### BigNumberLike

Ƭ **BigNumberLike**: ethers.BigNumberish \| number \| string \| BigNumber

#### Defined in

[utils/common.ts:65](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/utils/common.ts#L65)

___

### Blockchain

Ƭ **Blockchain**: "POLYGON" \| "ETH" \| "MUMBAI" \| "GOERLI"

#### Defined in

[constants.ts:7](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/constants.ts#L7)

___

### BlockchainData

Ƭ **BlockchainData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chainId` | number |
| `currencyName` | string |
| `valveFactoryAddress` | string |

#### Defined in

[constants.ts:1](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/constants.ts#L1)

___

### ClientOptions

Ƭ **ClientOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `provider` | ethers.providers.Provider |
| `signer` | ethers.Signer |

#### Defined in

[BaseClient.ts:5](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/BaseClient.ts#L5)

___

### ContractCallOptions

Ƭ **ContractCallOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `eventHandlers?` | TransactionEventHandlers |

#### Defined in

[utils/common.ts:106](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/utils/common.ts#L106)

___

### RecipientWithShareType

Ƭ **RecipientWithShareType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | string |
| `percentage` | BigNumberLike |

#### Defined in

[utils/common.ts:75](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/utils/common.ts#L75)

___

### TransactionEventHandlers

Ƭ **TransactionEventHandlers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `waitingForCompletion?` | Function |
| `waitingForConfirmation?` | Function |

#### Defined in

[utils/common.ts:101](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/utils/common.ts#L101)

## Variables

### BLOCKCHAIN\_DATA

• `Const` **BLOCKCHAIN\_DATA**: Record<Blockchain, BlockchainData\>

#### Defined in

[constants.ts:35](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/constants.ts#L35)

___

### FACTORIES

• `Const` **FACTORIES**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ETH` | Object |
| `ETH.2` | "" |
| `ETH.LATEST` | "" |
| `GOERLI` | Object |
| `GOERLI.2` | "0x2D378a4978bE03006615FDcbaE1F6330E99EaF52" |
| `GOERLI.LATEST` | "0x2D378a4978bE03006615FDcbaE1F6330E99EaF52" |
| `MUMBAI` | Object |
| `MUMBAI.2` | "0x2D378a4978bE03006615FDcbaE1F6330E99EaF52" |
| `MUMBAI.LATEST` | "0x2D378a4978bE03006615FDcbaE1F6330E99EaF52" |
| `POLYGON` | Object |
| `POLYGON.2` | "0x79d753E042591748a28a2b86378c8934B55Fdb5D" |
| `POLYGON.LATEST` | "0x79d753E042591748a28a2b86378c8934B55Fdb5D" |

#### Defined in

[constants.ts:16](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/constants.ts#L16)

## Functions

### generateCreationId

▸ **generateCreationId**(): Uint8Array

#### Returns

Uint8Array

#### Defined in

[utils/common.ts:110](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/utils/common.ts#L110)

___

### getMessageFromEthersError

▸ **getMessageFromEthersError**(`e`): Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | any |

#### Returns

Object

| Name | Type |
| :------ | :------ |
| `contractException?` | boolean |
| `message` | string |
| `shouldRetry` | boolean |

#### Defined in

[utils/common.ts:4](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/utils/common.ts#L4)

___

### toBigNumber

▸ **toBigNumber**(`value`): BigNumber

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | BigNumberLike |

#### Returns

BigNumber

#### Defined in

[utils/common.ts:67](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/utils/common.ts#L67)

___

### toContractPercent

▸ **toContractPercent**(`value`): string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | BigNumberLike |

#### Returns

string

#### Defined in

[utils/common.ts:71](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/utils/common.ts#L71)

___

### valveRecipientsToContractFormat

▸ **valveRecipientsToContractFormat**(`recipients`): Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipients` | RecipientWithShareType[] |

#### Returns

Object

| Name | Type |
| :------ | :------ |
| `addresses` | string[] |
| `percentages` | string[] |

#### Defined in

[utils/common.ts:80](https://github.com/blockczechorg/xla-sdk/blob/cc94f10/packages/xla-sdk-core/src/utils/common.ts#L80)
