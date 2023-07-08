import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function InputForm() {

    const navigte = useNavigate()

    const [inputvalue, setInputvalue] = useState({
        email: '',
        pass: '',
    })
    const inputchangehandler = (e) => {
        // console.log("value", e.target.value)
        setInputvalue({
            ...inputvalue,
            [e.target.name]: e.target.value
        })
    }
    // console.log(inputvalue.email)

    const socialhendler = () => {
        console.log(inputvalue.email)
        if (!inputvalue.email === '') {
            console.log('email value' , inputvalue.email)
            alert('yes social btn work')
            console.log('yes ')
            navigte('/Home')
         
        } else {
            console.log('no')
        }

        console.log(inputvalue.pass)

    }
    return (
        <>
            <div className="container">
                <input className="mx-3" placeholder="Email" type="email" name="email" value={inputvalue.email} onChange={inputchangehandler} />
                <input placeholder="Password" type="password" name="pass" value={inputvalue.pass} onChange={inputchangehandler} />
                <button className="btn btn-primary mx-3" onClick={socialhendler}>login with social account</button>
            </div>
            <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">@</span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
        
        </>
    );
}