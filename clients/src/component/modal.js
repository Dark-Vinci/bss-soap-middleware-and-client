import { RiMenuFoldLine } from 'react-icons/ri'

function Modal ({ data, open, type, modalFunction }) {
    let toRender;

    if (type === 'get') {
        toRender = (
            <div>
                <h1>SUCCESS</h1>
                <div>
                    <h2>Acoount number: { data.AccountNumber }</h2>
                    <h2>Acoount balance: ${ data.Balance }</h2>
                    <h2>Corporate code: { data.CorporateCode }</h2>
                </div>
            </div>
        )
    } else {
        // if its not [get], then itll definitely be pay
        toRender = (
            <div>
                <h1>SUCCESS</h1>
                <div>
                    <h2>Account number: { data.AccountNo }</h2>
                    <h2>Batch reference: { data.BatchReference }</h2>
                    <h2>Corporate code: { data.CorporateCode }</h2>
                </div>
            </div>
        );
    }

    return (
        <div
            style={{ left: open ? '0px': '-3000px' }}
            className='modal'
        >
            {/* icon */}
            <div
                className='icon'
                onClick={ modalFunction }
            ><RiMenuFoldLine fontSize='30'/></div>

            {/* content */}
            <div className='toRender'>{ toRender }</div>
        </div>
    )
}

export default Modal;