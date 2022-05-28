import React, {  useState, useEffect } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Add from './Add';
import About from './About';
import Edit from './Edit';
import Error from './Error'


 function Main() {
  const LOCAL_STO = "KEY";
  const [contacts, setContact] = useState([])
     const navigate = useNavigate();

//   json url
  const url = 'http://jsonplaceholder.typicode.com/users';

// fetch fuction
const fetchContact = (url) => {
    fetch(url)
    .then(json => json.json())
    .then((data) => {
        let pkts = [];
        data.forEach(element => {
            let {name, id, phone, email} = element
            let obj = {id,name,email,phone,toggleShow: false}
            pkts.push(obj);
        });
        // return json contacts
        // console.log(pkts);
        if(contacts.length < 1) {
            setContact(pkts)
        }
    })
    .catch(err => console.log(err))
}

// initiate placholder contact
fetchContact(url);


  const addContact = (newContact) =>{
        setContact([newContact, ...contacts])
  }

  const deletContact = (id) => {
      let filteredContact = contacts.filter((del)=> del.id !== id)
      setContact(filteredContact)
  }

  const updateContacts = (obj) => {
      let index = contacts.findIndex((contacts, index) => contacts.id === Number(obj.id) );
      let update = contacts;
      update[index].name = obj.name;
      update[index].phone = obj.phone;
      update[index].email = obj.email;
      setContact(update);
  }




  useEffect(()=>{
      localStorage.setItem(LOCAL_STO,JSON.stringify(contacts))
  }, [contacts])

        return (
            <div className="container mx-auto">   
                <main>
                <Routes> 
                    <Route path="/" element={<Home contacts={contacts} deletContact={deletContact} />} />
                    <Route path="/Add" element={<Add addContact={addContact} conLen={contacts.length} navigate={navigate} />} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/edit/:id" element={<Edit data={contacts} updateContacts={updateContacts} /> } />
                    <Route element={<Error />} />
                </Routes>
                    </main>
                
            </div>
        )
    }


export default Main