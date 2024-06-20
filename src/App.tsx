// import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App(){
  return(
        <div className='container'>
          <div className='facebook'>
            <div className='mainlogo'>
              <img className='logo' src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"></img>
            </div>
            <p>Facebook helps you connect and share with the people in your life.</p>
          </div>
          <div className='log-in'>
            <div className='log-in1'>
              <form>
                <input type="text" name="email" id="email" data-testid="royal_email" placeholder="Email address or phone number" aria-label="Email address or phone number"></input><br/>
                <div className='input1'></div>
                <input type="password" name="pass" id="pass" data-testid="royal_pass" placeholder="Password" aria-label="Password"></input><br/>
              </form>
              {/* <input type="text" className="inputtext _55r1 _6luy" name="email" id="email" data-testid="royal_email" placeholder="Email address or phone number" aria-label="Email address or phone number"></input><br/>
              <div className='input1'></div>
              <input type="password" className="inputtext _55r1 _6luy _9npi" name="pass" id="pass" data-testid="royal_pass" placeholder="Password" aria-label="Password"></input><br/> */}
              <button className="btn" type="submit" >Log In</button><br/>
              <a href="" className="buttonLog">Forgotten Password?</a><br/>
              <div className="line"></div>
              <button className="btn1">Create new acount</button>
            </div>  
            <div className='content'>
              <a href="/pages/create/?ref_type=registration_form" className="creatPage">Create a Page</a>"for a celebrity, brand or business."
            </div>
          </div>
        </div>
  )
}

export default App;