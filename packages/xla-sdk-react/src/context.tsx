import React, { createContext, useState, useMemo } from 'react'
import Client, { ClientOptions } from 'xla-sdk-core'

type XlaSdkReactContext = {
  client: Client | undefined
  initClient: (config: ClientOptions) => void
  setClient: (client: Client) => void
}

export const XlaSdkContext = createContext<XlaSdkReactContext | undefined>(
  undefined,
)

interface Props {
  children: React.ReactNode
}

/**
 *
 * @remarks
 * This component is used to initialize the XlaSdkContext. Put this component at the top of your app to make the XlaSdkContext available to all components.
 *
 * @example ```typescript
 * import React, { useContext, useEffect, useState } from 'react'
 * import { XlaSdkContext, XlaSdkProvider } from 'xla-sdk-react'
 *
 * export function App() {
 *  return (
 *   <XlaSdkProvider>
 *    <Page />
 *  </XlaSdkProvider>
 * )
 *
 * function Page() {
 *  const context = useContext(XlaSdkContext)
 * }
 */
export const XlaSdkProvider: React.FC<Props> = ({ children }) => {
  const [client, setClient] = useState<undefined | Client>()
  const initClient = (config: ClientOptions) => {
    setClient(new Client(config))
  }

  const contextValue = useMemo(
    () => ({ client, initClient, setClient }),
    [client],
  )

  return (
    <XlaSdkContext.Provider value={contextValue}>
      {children}
    </XlaSdkContext.Provider>
  )
}
