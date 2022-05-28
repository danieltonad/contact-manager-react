import React from 'react'
import ContactList from './ContactList'
// import data from './data'

function Home(props) {



    let polyfil = props.contacts.map((each) => <ContactList toggleText={props.toggleText} deletContact={props.deletContact} name={each.name} email={each.email} phone={each.phone} id={each.id} key={each.id}/>)

        return (
        <div>
            <div className="col-xl-7 col-md-9 col-11 mx-auto my-4 p-3" id = "info" >
                <div className="title text-lead display-5 font-weight-bold p-3">
                    Contact Manager
                </div>

            
                <p>This is a portfolio project to showcase knowledge of:</p>
                <li>i. React Components</li>
                <li>ii. React Router</li>
                <li>iii Component state management</li>
                <li>iv. Context api for global state management</li>
                <li>v. Making asynchronous calls to the Json placeholder fake rest api using "async/await"</li>

            </div>
            {polyfil}
        </div>
        )
    
}

export default Home