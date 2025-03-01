import { toast } from 'react-toastify';
  
  export const notifyError = (e : string) => toast.error(e, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:  'colored',
      })
    export const notifySucess = (e : string) => toast.success(e, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:  'colored',
      })