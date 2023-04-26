import Container from '../components/Container/Container.js';

import { wrapper, store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import '../styles/globals.scss'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
              <meta charSet="UTF-8" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="all" />

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
        <ErrorBoundary>
          <Component {...pageProps} />
          </ErrorBoundary>
        </Container>
      </PersistGate>
    </Provider>
    </>
  )
}

export default MyApp
