import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthenticationContextProvider } from '../utils/auth/authentication.context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../utils/redux/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthenticationContextProvider>
          <Component {...pageProps} />
        </AuthenticationContextProvider>
      </PersistGate>
    </Provider>
  )
}
