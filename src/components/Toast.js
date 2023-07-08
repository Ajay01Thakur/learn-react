
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { GlobalStyle } from 'styled-components';
// import { ThemeProvider,themes } from 'styled-components';


export default function ToastComponent () {
    const notify = ()=>{
        toast.success('toast notificatin is work')
    }
 return(
    <>
    
        <button className='rounded-full px-0.5' onClick={notify}>Notify</button>
    <ToastContainer/>
    </>
 );
}
