import React, {Component} from 'react';

//import Conditional from './Conditional'

//import ContactCard from './ContactCard';

// function App(){
//     return(
//         <div className="contacts">
//             <ContactCard 
//                 contact={{text:"hey", name:"Miriam", phone:"o702488995", email:"nantezamiriam@ymail.com" }}
//             />

//             <ContactCard 
//                contact={{text:"hello", name:"Martha", phone:"0702488995", email:"martha2@gmail.com" }}
//             />

//             <ContactCard 
//                contact={{text:"hi", name:"Probuse", phone:"0702488995", email:"nprobuse@gmail.com" }}
//             />

//             <ContactCard 
//                contact={{text:"halo", name:"Sam", phone:"0702488995", email:"sams@gmail.com" }}
//             />

            
            
//         </div>
//     );
// }

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             count:0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(){
//         this.setState(prevstate => {
//             return {count: prevstate.count + 1}
            
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         );
//     }
// }

// class App extends Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoading:true
//         }
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({
//                 isLoading:false
//             })
//         }, 1500);
//     }

//     render(){
//         return(
//             // <div>
//             //     {this.state.isLoading ?
//             //     <h1>Loading....</h1>:
//             //     <Conditional />}
//             // </div>
//             <div>
//                 <Conditional isLoading = {this.state.isLoading}/>
//             </div>
//         )
//     }
// }

class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevstate =>{
            return(
                {isLoggedIn: !prevstate.isLoggedIn}
            )
        })
    }

    render(){
        let buttonText = this.state.isLoggedIn ? "Log out" : "log in"
        let displayText = this.state.isLoggedIn ? "Logged in" : "logged out"
        return(
            <div>
                    <button onClick = {this.handleClick}>{buttonText}</button>
                    <h1>{displayText}</h1>
            </div>
        )
    }

}

export default App