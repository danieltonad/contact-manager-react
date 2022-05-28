import React , {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import '../assets/forms.css';


function Edit(props) {
    const { id } = useParams(),
    navigate = useNavigate();
    const index = props.data.findIndex((contacts, index) => contacts.id === Number(id));
    const [update, setUpdate] = useState({
        id: id,
        name: props.data[index].name,
        phone: props.data[index].phone,
        email: props.data[index].email
    })

    function submit(e) {
        e.preventDefault();
        props.updateContacts(update)
        navigate('/');
    }



    return (
        <div className="col-xl-6 col-lg-6 col-md-9 col-11 mx-auto my-4" id="form">
            <div className="form-head">
               Update Contact
            </div>
            <form onSubmit={submit} className="form-panel p-2 py-4 px-3 mx-auto">

                <div className="form-label">
                    Name
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Enter your name" name="name"
                        value={update.name} onChange={(e)=> { setUpdate({
                            id: id,
                            name: e.target.value,
                            phone: update.phone,
                            email: update.email
                        })}}
                     />
                </div>

                <div className="form-label">
                    Email
                </div>
                <div className="form-input">
                    <input type="email" placeholder="Enter your email" name="email"
                        value={update.email} 
                        onChange={(e)=> { setUpdate({
                            id: id,
                            name: update.name,
                            phone: update.phone,
                            email: e.target.value
                        })}}
                     />
                </div>

                <div className="form-label">
                    Phone
                </div>
                <div className="form-input">
                    <input type="tel" placeholder="Enter your phone" name="phone"
                        value={update.phone} 
                        onChange={(e)=> { setUpdate({
                            id: id,
                            name: update.name,
                            phone: e.target.value,
                            email: update.email
                        })}}
                     />
                </div>

                <button type="submit" className="text-light bg-dark m-2 my-3 text-center" > Update </button>

            </form>
        </div>
    )
}

export default Edit