import Chat from "./components/chat/Chat.jsx"
import Detail from "./components/detail/Detail"
import Login from "./components/login/Login.jsx"
import Notification from "./components/notification/Notification.jsx"
import List from "./list/List"

const App = () => {

  const user = false
  return (
    <div className='container'>
      {
        user?(
          <>
          <List/>
      <Chat/>
      <Detail/>
          </>
        ):(
          <Login/>
        )
      }
      <Notification/>
      
    </div>
  )
}

export default App