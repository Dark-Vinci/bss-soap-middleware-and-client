import { useState } from "react";
import axios from 'axios';

import './App.css';
import Modal from './component/modal'

function App() {
  const [ error, setError ] = useState(false);
  const [loading, setLoading ] = useState(false);
  const [ data, setData ] = useState({});
  const [type, setType] = useState('');
  const [openModal, setOpenModal ] = useState(false);

  const fetchData = async (method, url) => {
    setLoading(true);
    setError(false);
    
      try {
        const { data } = await axios({ method, url });

        let extractedData;

          if (method === 'get') {
            extractedData = data.data.GetAccountBalanceResponse.GetAccountBalanceResult;
          } else {
            extractedData = data.data.AddPaymentLocalResponse.AddPaymentLocalResult;
          }

        setData(extractedData)
        setLoading(false);
        setOpenModal(true);
        setError(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      } 
  }   

  const balanceHandler = () => {
    setType('get');
    fetchData('get', 'http://localhost:3030/api/payment/make-inquiry');
  }

  const paymentHandler = () => {
    setType('pay')
    fetchData('post', 'http://localhost:3030/api/payment/make-payment');
  }

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  let  modal = (
    <Modal 
      data={ data }
      open={ openModal }
      modalFunction = { toggleModal }
      type={ type }
    />
  )

  return (
    <div className="App">
      <h2>my bank</h2>

      {/* buttons */}
      <div className='buttons'>
        <button
          onClick={ paymentHandler }
          disabled={ loading }
        >make payment</button>
        <button
          onClick={ balanceHandler }
          disabled={ loading }
        >get balance</button>
      </div>

      { error && <h2> something went wrong, try again</h2>}

      { modal }
    </div>
  );
}

export default App;
