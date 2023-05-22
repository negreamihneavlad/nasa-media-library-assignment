import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Page, DefaultRoute } from './common/components'
import { GlobalStyle, theme } from './core/styles'
import { SearchPage, ShowPage } from './media/components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path: '*',
    element: <DefaultRoute />,
  },
  {
    path: '/home',
    element: <SearchPage />,
  },
  {
    path: '/show/:id',
    element: <ShowPage />,
  },
])

const AppRouter: React.FC = () => (
  <Page>
    <RouterProvider router={router} />
  </Page>
)

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppRouter />
  </ThemeProvider>,
)
