import { useContext, useMemo } from 'react'
import { XlaSdkContext } from '../context'
import { Blockchain } from 'xla-sdk-core'

export default function usePrepayment(
  contractAddress: string,
  blockchain: Blockchain,
) {
  throw new Error('Not implemented yet')
  const context = useContext(XlaSdkContext)

  const valveClient = useMemo(() => {
    if (!context || !context.client) return undefined
    return context.client.getValveClient(contractAddress, blockchain)
  }, [contractAddress, context])

  return valveClient
}
