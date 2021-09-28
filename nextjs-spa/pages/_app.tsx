import Layout from '../components/layout'

import '../styles/globals.css'

import cookie from 'cookie'
import * as React from 'react'
import type { IncomingMessage } from 'http'
import type { AppProps, AppContext } from 'next/app'
 
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr';
 
const keycloakCfg = {
  realm: 'example',
  url: 'http://localhost:8080/auth',
  clientId: 'nextjs-spa'
}
 
interface InitialProps {
  cookies: unknown
}


function MyApp({ Component, pageProps, cookies }: AppProps & InitialProps) {
  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakCfg}
      persistor={SSRCookies(cookies)}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRKeycloakProvider>
  )
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || '')
}
 
MyApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context?.ctx?.req)
  }
}

export default MyApp
