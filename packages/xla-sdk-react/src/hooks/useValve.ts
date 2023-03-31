import { useContext, useMemo } from 'react'
import { XlaSdkContext } from '../context'
import { Blockchain } from 'xla-sdk-core'

/**
 * @example
 * ```typescript
 *
 * import { useValve } from 'xla-sdk-react'
 * import { XlaSdkContext } from 'xla-sdk-react'
 *
 * function RenounceOwnershipOfValveContract({
 *   contractAddress,
 *   blockchain,
 * }: {
 *   contractAddress: string
 *   blockchain: Blockchain
 * }) {
 *   const valve = useValve(contractAddress, blockchain)
 *   const context = useContext(XlaSdkContext)
 *
 *   async function handleClick() {
 *     if (!valve || !context) return
 *
 *     try {
 *       if ((await valve.contract.owner()) !== '...your address...')
 *         throw new Error('You are not the owner of this contract')
 *
 *       const receipt = await valve.renounceOwnership({
 *         eventHandlers: {
 *           waitingForConfirmation: () => {
 *             alert('Confirm the transaction in your wallet')
 *           },
 *           waitingForCompletion: () => {
 *             alert('Waiting for the transaction to be mined')
 *           },
 *         },
 *       })
 *
 *       alert(`Ownership renounced: ${receipt.transactionHash}}`)
 *     } catch (e) {
 *       alert(`Failed to create contract. ${e.message}`)
 *     }
 *   }
 *
 *   return valve ? (
 *     <button onClick={handleClick}>
 *       Renounce ownership of {contractAddress}
 *     </button>
 *   ) : null
 * }
 *
 */
export default function useValve(
  contractAddress: string,
  blockchain: Blockchain,
) {
  const context = useContext(XlaSdkContext)

  const valveClient = useMemo(() => {
    if (!context || !context.client) return undefined
    return context.client.getValveClient(contractAddress, blockchain)
  }, [contractAddress, context])

  return valveClient
}
