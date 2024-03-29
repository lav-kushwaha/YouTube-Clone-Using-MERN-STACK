import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from './youtubelogo.png'
import SearchBar from './SearchBar/SearchBar'
import {RiVideoAddLine} from 'react-icons/ri'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiUserCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {GoogleLogin} from 'react-google-login'
import {gapi} from "gapi-script"
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../actions/auth'
import Auth from '../../Pages/Auth/Auth'

const Navbar = ({toggleDrawer,setEditCreateChanelBtn})=>{
  const [AuthBtn, setAuthBtn] = useState(false);
    // const CurrentUser = null;
    // const CurrentUser = {
    //     result:{
    //         email:"lav@gmail.com",
    //         joinedOn:"2222-07-15T09:57:23.489Z"
    //     },
    // };

    const CurrentUser=useSelector(state=>state.currentUserReducer);
    
    useEffect(()=>{
      function start(){
        gapi.client.init({
          clientId:'215080557168-72kn12dfnb29hsan6klbkibd4shhd2q2.apps.googleusercontent.com',
          scope:"email",
        })
      }
      gapi.load("client:auth2",start);
    },[])

    const dispatch = useDispatch();

    const onSuccess = (response)=>{
      const Email = response?.profileObj.email;
      console.log(Email);
      dispatch(login({email:Email}));
    }

    const onFailure = ((response)=>{
      console.log("Failed",response); 
    });

    return(
       <>
        <div className="Container_Navbar">
            <div className="Burger_Logo_Navbar">
                <div className="burger" onClick={()=>toggleDrawer()}>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
               <Link  to={"/"} className='logo_div_Navbar'>
                 <img src={logo} alt="youtube-logo" />
                 <p className='logo-title-navbar'>YouTube</p>
               </Link>
            </div>
            <SearchBar/>
            <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
            <div className="apps_Box">
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
            </div>
            <IoMdNotificationsOutline className="vid_bell_Navbar"/>   
            <div className="Auth_cont_Navbar">
        {CurrentUser ? (
          <>
            <div className="Chanel_logo_App" onClick={()=>setAuthBtn(true)}>
              <p className="fstChar_logo_App">
                {CurrentUser?.result.name ? (
                  <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          </>
         ) : (
               <>
               <GoogleLogin
               clientId={'215080557168-72kn12dfnb29hsan6klbkibd4shhd2q2.apps.googleusercontent.com'}
               onSuccess={onSuccess}
               onFailure={onFailure}
               render={ (renderProps)=>
               <p onClick={renderProps.onClick} className="Auth_Btn">
               <BiUserCircle size={22}/>
                <b>Sign in</b>
                </p>
                }
                />
                </>
                )}
            </div>
        </div>
           {
            AuthBtn &&
            <Auth
            setAuthBtn={setAuthBtn}
            User={CurrentUser} 
            setEditCreateChanelBtn={setEditCreateChanelBtn}
            />
          }
       </>
    )
}
export default Navbar;