
// apply css file here to make it global,
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/useApollo'
import { Wrapper } from "@googlemaps/react-wrapper";
import { AppProps } from "next/app";

export default function App({ Component, pageProps}: AppProps): JSX.Element { 
  const apolloClient = useApollo(pageProps.initialApolloState)
  
  return (  
    <Wrapper
      apiKey={process.env.GOOGLE_API_KEY as string}
      libraries={['places', 'geometry']}
      language={'ro'} >
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Wrapper>
  )
} 