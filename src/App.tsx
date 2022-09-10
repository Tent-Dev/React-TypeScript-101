import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fillpassword, mydata } from './fn_security/auth';
import { useDispatch, connect } from "react-redux";

function App(props: any) {

  let [password, setPassword] = useState('');
  let [fade, setFade] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props.post);
  },[]);

  function sendPassword(input: string) {
    if(fillpassword(input)){
      dispatch({
        type: 'LOGIN_SUCCESS',
        data: mydata
      });
      setFade(true);
    }
    else{
      setPassword('')
    }
  }

  return (
    <div className={`App`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {Object.keys(props.post).length === 0 ?
          <div className={`${fade ? 'fadeOut' : ''}`}>
            <input type={'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <br></br>
            <button onClick={() => sendPassword(password)}>Login</button>
          </div> : <></>
  
        }
        

        {fade || props.post !== 'undefined' ?
          <div className={`${fade ? 'fadeIn' : ''}`}>
            Welcome {props.post.nickname}
          </div> : <></>  
        }
      </header>
    </div>
  );
}

const mapStateToProps = (state: any) => ({ post: state })

export default connect(mapStateToProps)(App) ;
