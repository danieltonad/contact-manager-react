import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleDoubleDown, faEdit, faTimes } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';


function ContactList(props) {
const [show, setShow] = useState(false)


        function toggleText(e) {
                setShow(!show)
            }



    return (
            <div className="col-lg-7 col-xl-7 col-md-8 col-11 py-2 mx-auto">
                <div className="each-contact my-3 p-2 py-4 container-fluid mx-auto">

                    <div id="title">
                        {props.name}
                        <span onClick={toggleText.bind(this)}>
                            <FontAwesomeIcon id="toggle-ico" icon={faAngleDoubleDown} />
                        </span>


                        <div id="actions">
                            <span>
                            <Link to={`edit/${props.id}`}>
                                <FontAwesomeIcon id="toggle-ico-edit" icon={faEdit} />
                            </Link>
                            </span>

                            <span onClick={props.deletContact.bind(this,props.id)}>
                                <FontAwesomeIcon id="toggle-ico-del" icon={faTimes}  />
                            </span>
                        </div>
            
                    </div>
                   
                    
                 <div id="innerDetails" className="col-11 mx-auto mt-4 my-2 py-3" style={show ? {display: "block"} : {display: "none"}}>
                    <b id="innerTxt">Email</b>: {props.email}
                    <hr />
                    <b id="innerTxt">Phone</b>: {props.phone}
                </div> 
                    
                </div>
            </div>
    );
}
export default ContactList