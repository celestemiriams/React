import React, {Component} from 'react';

class App extends Component{  
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly:false,
      gender:'',
      favfruit:''
     
    }
    this.handleChange = this.handleChange.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked}):this.setState({[name]:value})
  }

  // handleSubmit(event){
  //   alert("A form was submitted", this.state.value)
  //   event.preventDefault();
  // }

  render(){
    return (
      <div>
        <form /*onSubmit = {this.handleSubmit}*/>
            <label>
              FirstName:
              <input type="text" name="firstName" value={this.state.value} onChange = {this.handleChange} />
            </label><br />
            <label>
              LastName:
              <input type="text" name="lastName" value={this.state.value} onChange = {this.handleChange} />
            </label><br />
            <label>
              Brief Description:
              <textarea value={this.state.value} onChange = {this.handleChange}/>
            </label><br />
            <label>
              <input type="checkbox" name="isFriendly" checked= {this.state.isFriendly} onChange={this.handleChange}/> is friendly
            </label><br/>
            <label>
              <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} />Male
            </label><br />
            <label>
              <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} />Female
            </label><br/>
            <label>
              Pick your favorite fruit:
              <select value={this.state.value} name="favfruit" onChange={this.handleChange}>
              <option value="strawberry">Strawberry</option>
              <option value="passion">Passion</option>
              <option value="Vanilla">Vanilla</option>
              <option value="Grape">Grape</option>
              </select>
            </label>
            <input type="submit" value="Submit"/>   
        </form>

        <h1>{this.state.firstName}{this.state.lastName}</h1>
        <h2>You are {this.state.gender}</h2>
        <h3>Your favourite fruit is {this.state.favfruit}</h3>
  </div>
    );
  }
}

export default App;
