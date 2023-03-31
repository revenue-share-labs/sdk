import { useContext, useMemo } from 'react'
import { XlaSdkContext } from '../context'
import { Blockchain } from 'xla-sdk-core'

export default function useValveFactory(blockchain: Blockchain) {
  const context = useContext(XlaSdkContext)

  const valveClient = useMemo(() => {
    if (!context || !context.client) return undefined
    return context.client.getValveFactoryClient(blockchain)
  }, [context])

  return valveClient
}
