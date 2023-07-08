import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../common/Button';
import Input from "../common/Input";
import RenderItem from "./RenderItem";
import RenderTestItem from "./RenderTestItem";
import InputForm from "./InputForm";
import { useAuth0 } from "@auth0/auth0-react";
import ToastComponent from "../Toast";

export default function Header(props) {
    const navigte = useNavigate()
    const { loginWithRedirect } = useAuth0();

    const [inputdata, setInputdata] = useState({
        pass: '',
    })

    const [peravalue, setPeravalue] = useState('')

    const showchangehandler = (e) => {
        setInputdata({
            ...inputdata,
            [e.target.name]: e.target.value
        })
    }

    const displayname = () => {
        if (inputdata.pass === 'Amit@1212') {
            setPeravalue('Password is Correct')
            navigte('/Home')
        } else {
            setPeravalue('Password is incorrect =' + inputdata.pass)
        }
    }

    // const num = 10;

    return (
        <>
            <h1>this is header page</h1>
            <p>{peravalue}</p>
            <button className="btn btn-primary" onClick={() => loginWithRedirect()}>log in </button>
            <Input placeholder='password' name="pass" type="password" value={inputdata.pass} onChange={showchangehandler} />
            <Button name="test" onClick={displayname} className="btn btn-primary" />
            <RenderItem />
            <RenderTestItem />
            <ToastComponent/>
            {/* {num===10 ? 'yes' :'no'} <br/>   */}
            <InputForm socialhendler='socialhendler' />
        




            <div className="space-y-8">
                <div className="w-96 bg-blue-700 rounded">
                    w-96
                </div>
                <div className="w-80 bg-white shadow rounded">
                    w-80
                </div>
                <div className="w-72 bg-white shadow rounded">
                    w-72
                </div>
                <div className="w-64 bg-white shadow rounded">
                    w-64
                </div>
                <div className="w-60 bg-black    shadow rounded">
                    w-60
                </div>
                <div className="w-56 bg-white shadow rounded">
                    w-56
                </div>
                <div className="w-52 bg-white shadow rounded">
                    w-52
                </div>
                <div className="w-48 bg-red shadow rounded">
                    w-48
                </div>
            </div>
            

            <div className="text-lg font-semibold text-slate-500">
        $110.00
      </div>

      <div className="w-full flex-none text-sm font-larger text-slate-700 mt-2">
        In stock
      </div>
      <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" type="submit">
          Buy now
        </button>

        </>
    )
}
