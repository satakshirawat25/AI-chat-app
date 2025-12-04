import Chat from "./components/chat/Chat.jsx"
import Detail from "./components/detail/Detail"
import List from "./list/List"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App