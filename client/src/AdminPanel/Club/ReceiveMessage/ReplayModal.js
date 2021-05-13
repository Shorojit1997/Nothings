import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
const ReplayMessageModal = ({ modal, setModal,id }) => {
    const[flashMessage,setFlashmessage]=useState('');
    const [accountDetails, setAccountDetails] = useState({
       message:''
    })
    const addController = () => {
        const apiUrl = `/api/admin/club/message/${id}`
        axios.post(apiUrl, accountDetails)
            .then(data => {
                setAccountDetails({
                    message: ''
                })
                setModal(!modal);
            })
            .catch(e => {
                if(e.response){
                    setFlashmessage(e.response.data.flashMessage)
                }
                else{
                    setFlashmessage('Internal server error.')
                }
            })
    }
    const setDeatail = (e) => {
        setAccountDetails({ ...accountDetails, [e.target.name]: e.target.value })
    }

    return (
        <div >
            <Modal centered={true} isOpen={modal} toggle={() => { setModal(!modal) }} >
                <ModalHeader style={{ background: '#0B4C72', color: 'white' }} toggle={() => { setModal(!modal) }}>Replay</ModalHeader>
                <ModalBody style={{ padding: '10px 15px' }}>
                    {
                        flashMessage && <div className="alert alert-warning  w-100 m-1">
                            {flashMessage}
                        </div>
                    }
                    <div className='form-group'>
                        <label htmlFor="name1">Write new message:</label>
                        <textarea  onChange={setDeatail}  value={accountDetails.description} name='message' className="form-control" style= {{minHeight:"200px"}} placeholder="Message..." id="name1" />
                    </div>

                </ModalBody>

                <ModalFooter style={{ background: '#0B4C72' }}>
                    <Button onClick={addController} style={{ background: 'white', color: 'black', width: '70%' }} >Submit</Button>
                    <Button style={{ background: 'yellow', color: 'black', width: '20%' }} onClick={() => { setModal(!modal) }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ReplayMessageModal;