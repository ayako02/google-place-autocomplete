import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, sagaMiddleware, persistor } from 'providers/store';

import rootSaga from 'middleware/sagas';
import MainContainer from 'container/main';

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MainContainer />
    </PersistGate>
  </Provider>
);

export default App;
