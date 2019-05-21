import React, {Component} from 'react'


class Travelform extends Component{
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            age:0,
            gender:'',
            location:'',
            dietaryRestrictions:[
                {isFries:false},
                {isNuts:false},
                {isMeat:false},
                {isBurger:false},
                {isChicken:false}
            ]
                
        
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}):this.setState({
            [name]:value
        })
    }

    handleSubmit(event){
        alert("Your form has been submitted successfully")
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" name="firstName" value={this.state.value} placeholder="First Name" onChange={this.handleChange}/><br/>
                    <input type="text" name="lastName" value={this.state.value} placeholder="Last Name" onChange={this.handleChange} /><br />
                    <input type="number" name="age" value={this.state.value} placeholder="Age" onChange={this.handleChange}/><br />
                    <label>
                        <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>female
                    </label><br />
                    <label>
                        <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>male
                    </label><br/>
                    <label>
                        <select name="location" value="this.state.location" onChange={this.handleChange}>
                            <option value="">Choose your location:</option>
                            <option value={this.state.kampala}>Kampala</option>
                            <option value={this.state.kigali}>Kigali</option>
                            <option value={this.state.nairobi}>Nairobi</option>
                            <option value={this.state.Dar}>Dar-es-salaam</option>
                            <option value={this.state.juba}>Juba</option>
                        </select>
                    </label><br/>

                    <label>
                        <input 
                            type="checkbox" 
                            name="dietaryRestrictions" 
                            checked={this.state.dietaryRestrictions.isFries}
                            onChange={this.handleChange}
                            /> Fries?
                    </label><br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="dietaryRestrictions" 
                            checked={this.state.dietaryRestrictions.isNuts}
                            onChange={this.handleChange}
                            /> Nuts?
                    </label><br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="dietaryRestrictions" 
                            checked={this.state.dietaryRestrictions.isMeat}
                            onChange={this.handleChange}
                            /> Meat?
                    </label><br/>
                    <label>
                        <input 
                            type="checkbox" 
                            name="dietaryRestrictions" 
                            checked={this.state.dietaryRestrictions.isBurger}
                            onChange={this.handleChange}
                            /> Burger?
                    </label><br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="dietaryRestrictions" 
                            checked={this.state.dietaryRestrictions.isChicken}
                            onChange={this.handleChange}
                            /> Chicken?
                    </label><br />
                    
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                <h1>Entered Information:</h1>
                <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your Age: {this.state.age} </p>
                <p>You are {this.state.gender}</p>
                <p>Your current location is {this.state.location}</p>
                <p>Your are not supposed to eat these: 
                <ul>
                    <li>Fries:{this.state.dietaryRestrictions.isFries ? "yes" : "No"} </li>
                    <li>Nuts: {this.state.dietaryRestrictions.isNuts ? "yes" : "No"}</li>
                    <li>Meat: {this.state.dietaryRestrictions.isMeat ? "yes" : "No"}</li>
                    <li>Burger: {this.state.dietaryRestrictions.isBurger ? "yes" : "No"}</li>
                    <li>Chicken: {this.state.dietaryRestrictions.isChicken ? "yes" : "No"}</li>
                </ul>     
                </p>
            </div>
        )
    }
}

export default Travelform;