import React, { Component } from 'react';
import '../assets/forms.css'





class Add  extends Component{
    state = {
        name: "",
        email: "",
        phone: "",
        id: this.props.conLen + 15,
        toggleShow: false
    };


    add = (e) => {
        // console.log(this.props.conLen,this.state.id);
        // this.setState({id: this.props.conLen + 1})
        e.preventDefault()
        this.props.addContact(this.state)
        this.props.navigate('/')
    }

    render () {
        return (
        <div className="col-xl-6 col-lg-6 col-md-9 col-11 mx-auto my-4" id="form">
            <div className="form-head">
                Add Contact
            </div>
            <form className="form-panel p-2 py-4 px-3 mx-auto" onSubmit={this.add}>

                <div className="form-label">
                    Name
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Enter your name" name="name" 
                    value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})}  required/>
                </div>

                <div className="form-label">
                    Email
                </div>
                <div className="form-input">
                    <input type="email" placeholder="Enter your email" name="email" 
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}  required/>
                </div>

                <div className="form-label">
                    Phone
                </div>
                <div className="form-input">
                    <input type="tel" placeholder="Enter your phone" name="phone"
                            value={this.state.phone}
                            onChange={(e) => this.setState({ phone: e.target.value })} required
                     />
                </div>

                <button type="submit" className="text-light bg-dark m-2 my-3 text-center" > Submit </button>


                </form>
         </div>
        )
    }
}

export default Add