// Main jsx for renderin app with redux store set
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './reducers/store'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)