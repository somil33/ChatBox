import { ChatEngine } from  'react-chat-engine';
import'./Style.css';
import LoginForm from './components/LoginForm';
import ChatFeed from'./components/ChatFeed';


const App=()=>{
    if(!localStorage.getItem('username')) return<LoginForm/>
    return(
        <ChatEngine
        height="100vh"
        projectID="f251dfe4-406d-47c2-be1f-266b1e77f97d"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        
        renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/>}
        />
    );
}
export default App;