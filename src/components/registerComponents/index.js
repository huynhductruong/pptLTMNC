import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from "axios";
const RegisterComponents = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const HandleSubmit = async  () =>{
        let token = await axios.post('http://127.0.0.1:8000/register',{
            name:name,
            email:email,
            password:password

        })
        
        if(token.data) navigate('/')
    }
    return (

        <div className="main">

            <div className="auth">
                <div className="auth__form">
                    <div className="auth__box">
                        <div className="brand">
                            <div className="brand__logo">
                                <a href="/" title="iLovePDF">
                                    <img src="https://www.ilovepdf.com/img/ilovepdf.svg" alt="iLovePDF" />
                                </a>
                            </div>
                        </div>                <h2 className="form__title">Login to your account</h2>
                        <div className="social-auth">
                            <div id="w0" className="social-auth--big-buttons"><ul className="auth-clients"><li><a className="facebook auth-link" href="/auth/auth?authclient=facebook" title="Facebook"><BsFacebook style={{ backgroundColor: '#3b5998', color: '#fff' }} /><span className="auth-link__text">Log in with Facebook</span></a></li><li><a className="google auth-link" href="/auth/auth?authclient=google" title="Google"><FcGoogle /><span className="auth-link__text">Log in with Google</span></a></li></ul></div></div>
                        <div id="loginForm" action="/login" method="post">
                            <input type="hidden" name="_csrf-ilovepdf" value="NhrYpLdeY-xocRKRjJFwZtt04rAvRcWP9Bs2LIqgozt0VKDl5jQN2ylCfMv_1zxSoxi251ksqPyOcUx87PjLeg==" />


                            <div className="form__group ">
                                <div className="field-loginEmail required">
                                    <div className="input--icon input--email"><input type="text" id="loginEmail" className="input" name="LoginForm[email]" placeholder="Name" autofocus="true" aria-required="true" onChange={(e)=> setName(e.target.value)}/></div><div className="help-block"></div>
                                </div>    </div>
                            <div className="form__group ">
                                <div className="field-inputPasswordAuth required">
                                    <div className="input--icon input--pwd"><input type="text" id="inputPasswordAuth" className="input" name="LoginForm[password]" placeholder="Email" aria-required="true"onChange={(e)=> setEmail(e.target.value)} /></div><div className="help-block"></div>
                                </div>    </div>
                            <div className="form__group ">
                                <div className="field-inputPasswordAuth required">
                                    <div className="input--icon input--pwd"><input type="password" id="inputPasswordAuth" className="input" name="LoginForm[password]" placeholder="Password" aria-required="true" onChange={(e)=> setPassword(e.target.value)}/></div><div className="help-block"></div>
                                </div>    </div>

                            
                            <div className="form-actions">
                                <input type="hidden" name="remember" id="rememberAuth" value="1" />
                                <button type="submit" data-loading-text="Checking..." className="btn btn--red" id="loginBtn" onClick={HandleSubmit}>
                                    Sign up <i className="m-icon-swapright m-icon-white"></i>
                                </button>
                            </div>
                            <div className="create-account">
                                <p>
                                    Already member?&nbsp;&nbsp;<a href="/login" id="goRegister">Log in</a>
                                </p>
                            </div>

                        </div>        </div>
                </div>s
                <div className="auth__info">
                    <div className="auth__box auth__box--login-txt">
                        <img srcset="/img/auth/ilovepdf@2x.png 2x" src="https://www.ilovepdf.com/img/auth/ilovepdf.png" alt="iLovePDF" />
                        <h1 className="title1">Log in to your workspace</h1>
                        <p>Enter your email and password to access your iLovePDF account. You are one step closer to boosting your document productivity.</p>

                        <p className="toggle list__dropdown">See all tools</p>
                        <div className="toggle__content">
                            <ul className="listcheck">
                                <li className="listcheck__item listcheck__item--ok">
                                    Merge PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Split PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Compress PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Office to PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    WORD to PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    POWERPOINT to PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    EXCEL to PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    PDF to WORD        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    PDF to WORD&nbsp;<b>(OCR)</b>
                                </li>

                                <li className="listcheck__item listcheck__item--ok">
                                    PDF to POWERPOINT        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    PDF to EXCEL        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    OCR PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    PDF to JPG        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Image to PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Add page numbers        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Add watermark        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Rotate PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Unlock PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Protect PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Remove PDF pages        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Reorder PDF pages        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Organize PDF pages        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    PDF to PDF/A        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Repair PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Web to PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Edit PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    PDF Signature        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Certify PDF        </li>
                                <li className="listcheck__item listcheck__item--ok">
                                    Scan to PDF        </li>
                            </ul>    </div>
                    </div>

                </div>
            </div></div>

    )
}
export default RegisterComponents