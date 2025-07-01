import { Outlet } from 'react-router'
import { Titlebar } from './components/Titlebar/titlebar'

function App(): React.JSX.Element {
  return (
    <>
      <Titlebar />
      <Outlet />
    </>
  )
}

export default App
