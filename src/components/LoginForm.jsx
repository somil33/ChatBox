import{ useState } from 'react';
import axios from 'axios';


const LoginForm = () =>{
    const[username ,setUsername]= useState('');
    const[password, setPAssword] = useState('');
    const[error,setError] =useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject ={ 'Project-ID':"f251dfe4-406d-47c2-be1f-266b1e77f97d", 'User-Name': username, 'User-Secret': password}
        try{
           await axios.get('https://api.chatengine.io/chats',{headers:authObject});
           localStorage.setItem('username',username);
           localStorage.setItem('password',password);
           window.location.reload();

        }catch(error){
            setError('sorry,incorrect username/password 😖.')

        }


    }
    return(
        <div className="wrapper">
        <div classNAme="form">
            <h1 className="title">CoderAdda💻</h1>
            <form onSubmit ={handleSubmit}>
                <input type="text" value={username} onChange={(e) =>setUsername(e.target.value)} className="input" placeholder=" Enter Username" required/>
                <input type="passsword" value={password} onChange={(e) =>setPAssword(e.target.value)} className="input" placeholder=" Enter Password" required/>
         <div align="center">
             <button type="submit" className="button">
                 <span>Let's Discuss</span>
             </button>
         </div>
         <h2 className="error">{error}</h2>
            </form>
        </div>
        </div>
    );
}
export default LoginForm;