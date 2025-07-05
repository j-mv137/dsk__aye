import { createBrowserRouter } from 'react-router'

import App from './App'
import { Menu } from './components/Menu/menu'
import { MenuLayout } from './components/Menu/menuLayout'
import { Front } from './components/Positions/Rooms/Front/front'
import { OrdersLayout } from './components/Orders/ordersLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: MenuLayout,
        children: [
          { index: true, Component: Menu },
          { path: 'positions', Component: Front },
          { path: 'orders', Component: OrdersLayout }
        ]
      }
    ]
  }
])
