import { useContext, useMemo } from 'react'
import { XlaSdkContext } from '../context'
import { Blockchain } from 'xla-sdk-core'

export default function usePrepaymentFactory(blockchain: Blockchain) {
  const context = useContext(XlaSdkContext)

  const prepaymentClient = useMemo(() => {
    if (!context || !context.client) return undefined
    return context.client.getPrepaymentFactoryClient(blockchain)
  }, [context])

  return prepaymentClient
}
