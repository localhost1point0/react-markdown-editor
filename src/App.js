import { useEffect } from 'react'
import Markdown from './component/Markdown'

const App = () => {
  useEffect(() => {
    document.title = "Markdown Editor";
  }, []);

  return (
    <Markdown/>
  )
}

export default App