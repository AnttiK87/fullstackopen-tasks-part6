// Main jsx for renderin app with React query and Context API set
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MessageContextProvider } from './MessageContext'

import App from './App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <MessageContextProvider>
        <App />
      </MessageContextProvider>
  </QueryClientProvider>
)