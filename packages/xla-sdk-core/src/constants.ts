export type BlockchainData = {
  chainId: number
  valveFactoryAddress: string
  prepaymentFactoryAddress: string
  currencyName: string
}

// export type Blockchain = 'POLYGON' | 'ETH' | 'MUMBAI' | 'GOERLI'
export type Blockchain = 'MUMBAI' | 'GOERLI' | 'ETH'

const FACTORY_VALVE_ETH_V010 = '0x4A718B41C3FA541c2A5fA4D98A1D7Ec2376Fc309'

const FACTORY_VALVE_MUMBAI_V010 = '0x7D1baDaf6b5f2B1E79178F219d88d3a1247d409C'
const FACTORY_PREPAYMENT_MUMBAI_V010 =
  '0xEe8a5F867695E2f336b9dB449DD14ac3eAECcfa7'
const FACTORY_VALVE_GOERLI_V010 = '0xc1c524DD222CF60FBF75eec2CAFd1c4B0aF85C7A'
// const FACTORY_PREPAYMENT_GOERLI_V010 = '0xEe8a5F867695E2f336b9dB449DD14ac3eAECcfa7'

export enum CONTRACT_VERSIONS {
  V010 = 10,
}

export const FACTORIES = {
  ETH: {
    VALVE: {
      LATEST: '',
      [CONTRACT_VERSIONS.V010]: FACTORY_VALVE_ETH_V010,
    },
  },
  // POLYGON: {
  //   LATEST: FACTORY_VALVE_POLYGON_V002,
  //   [SUPPORTED_CONTRACT_VERSIONS.V010]: FACTORY_VALVE_POLYGON_V002,
  // },
  GOERLI: {
    VALVE: {
      LATEST: FACTORY_VALVE_GOERLI_V010,
      [CONTRACT_VERSIONS.V010]: FACTORY_VALVE_GOERLI_V010,
    },
    // PREPAYMENT: {
    //   LATEST: FACTORY_PREPAYMENT_MUMBAI_V010,
    //   [CONTRACT_VERSIONS.V010]: FACTORY_PREPAYMENT_MUMBAI_V010,
    // },
  },
  MUMBAI: {
    VALVE: {
      LATEST: FACTORY_VALVE_MUMBAI_V010,
      [CONTRACT_VERSIONS.V010]: FACTORY_VALVE_MUMBAI_V010,
    },
    PREPAYMENT: {
      LATEST: FACTORY_PREPAYMENT_MUMBAI_V010,
      [CONTRACT_VERSIONS.V010]: FACTORY_PREPAYMENT_MUMBAI_V010,
    },
  },
} as const

export const BLOCKCHAIN_DATA: Record<Blockchain, BlockchainData> = {
  // ['POLYGON']: {
  //   chainId: 137,
  //   valveFactoryAddress: FACTORIES.POLYGON.LATEST,
  //   currencyName: 'MATIC',
  // },
  ['ETH']: {
    chainId: 1,
    valveFactoryAddress: FACTORIES.ETH.VALVE.LATEST,
    prepaymentFactoryAddress: '',
    currencyName: 'ETH',
  },
  ['MUMBAI']: {
    chainId: 80001,
    valveFactoryAddress: FACTORIES.MUMBAI.VALVE.LATEST,
    prepaymentFactoryAddress: FACTORIES.MUMBAI.PREPAYMENT.LATEST,
    currencyName: 'MATIC',
  },
  ['GOERLI']: {
    chainId: 5,
    valveFactoryAddress: FACTORIES.GOERLI.VALVE.LATEST,
    prepaymentFactoryAddress: '',
    currencyName: 'ETH',
  },
}
