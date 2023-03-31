import React, { useContext, useEffect, useState } from 'react'
import { Blockchain } from 'xla-sdk-core'
import useValveFactory from './hooks/useValveFactory'
import useValve from './hooks/useValve'
import { generateCreationId } from 'xla-sdk-core/dist/utils/common'
import { providers } from 'ethers'
import { XlaSdkContext, XlaSdkProvider } from './context'

export function App() {
  return (
    <XlaSdkProvider>
      <Page />
    </XlaSdkProvider>
  )
}

function Page() {
  const context = useContext(XlaSdkContext)

  useEffect(() => {
    if (!context) return
    //@ts-ignore
    const provider = new providers.Web3Provider(window.ethereum)

    // .... initialize metamask ...

    context.initClient({
      provider,
      signer: provider.getSigner(),
    })
  }, [context])

  return (
    <div>
      <CreateValveContract blockchain={'MUMBAI'} />
      <RenounceOwnershipOfValveContract
        contractAddress={'0x123'}
        blockchain={'MUMBAI'}
      />
    </div>
  )
}

function CreateValveContract({ blockchain }: { blockchain: Blockchain }) {
  const factory = useValveFactory(blockchain)

  const [creationId, setCreationId] = useState(generateCreationId())

  async function handleClick() {
    if (!factory) return
    try {
      const receipt = await factory.createValveContract(
        {
          controller: '0x123',
          isImmutableRecipients: true,
          isImmutable: false,
          isAutoNativeCurrencyDistribution: true,
          minAutoDistributeAmountInEthers: '10.5',
          distributors: ['0x123'],
          recipients: [{ address: '0x123', percentage: 100 }],
          creationId,
        },
        {
          eventHandlers: {
            waitingForConfirmation: () => {
              alert('Confirm the transaction in your wallet')
            },
            waitingForCompletion: () => {
              alert('Waiting for the transaction to be mined')
            },
          },
        },
      )

      alert(`Contract created. Contract address: ${receipt.contractAddress}}`)

      setCreationId(generateCreationId())
    } catch (e) {
      alert(`Failed to create contract. ${e.message}`)
    }
  }

  return factory ? <button onClick={handleClick}>Create Contract</button> : null
}

function RenounceOwnershipOfValveContract({
  contractAddress,
  blockchain,
}: {
  contractAddress: string
  blockchain: Blockchain
}) {
  const valve = useValve(contractAddress, blockchain)
  const context = useContext(XlaSdkContext)

  async function handleClick() {
    if (!valve || !context) return

    try {
      if ((await valve.contract.owner()) !== '...your address...')
        throw new Error('You are not the owner of this contract')

      const receipt = await valve.renounceOwnership({
        eventHandlers: {
          waitingForConfirmation: () => {
            alert('Confirm the transaction in your wallet')
          },
          waitingForCompletion: () => {
            alert('Waiting for the transaction to be mined')
          },
        },
      })

      alert(`Ownership renounced: ${receipt.transactionHash}}`)
    } catch (e) {
      alert(`Failed to create contract. ${e.message}`)
    }
  }

  return valve ? (
    <button onClick={handleClick}>
      Renounce ownership of {contractAddress}
    </button>
  ) : null
}
