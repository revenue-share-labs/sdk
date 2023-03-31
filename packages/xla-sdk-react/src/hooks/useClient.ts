import { useContext } from 'react'
import { XlaSdkContext } from '../context'

export default function useClient() {
  const context = useContext(XlaSdkContext)

  return context?.client
}
