import Container from '../components/Container/Container.js';

import { wrapper, store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import '../styles/globals.scss'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary.js';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
        <ErrorBoundary>
          <Component {...pageProps} />
          </ErrorBoundary>
        </Container>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
