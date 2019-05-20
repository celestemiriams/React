import React from 'react';


import Footer from './Footer'
import Navbar from './Navbar'
import Main from './Main'

// function MyInfo(){
//     return(
//         <div>
//            <h1>Nanteza Miriam</h1>
//            <p>Miriam is a dynamic and self-motivated individual with a Bachelor's degree in Software Engineering
//                She is passionate about developing software
//            </p>
//            <ul>
//                <li>France</li>
//                <li>USA</li>
//                <li>Canada</li>
//             </ul> 
//         </div>
//     );

// }

function App(){
    return(
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

// class App extends Component{
//     constructor(){
//         super()
//         this.state = {
//             name:"miriam",
//             age:24
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h3>{this.state.age}years old</h3>
//             </div>
//         );
//     }
    

    
// }

// class App extends Component{
//     constructor(){
//         super()
//         this.state ={
//             isLoggedIn: true
//         }
//     }
//     render(){
//         let wordDisplay
//             if(this.state.isLoggedIn === true){
//                 wordDisplay = "in"
//             }else
//             {
//                 wordDisplay = "out"
//             }
//         return(
            
//             <div>
//                 <h1>You are currently logged {wordDisplay}</h1>
//             </div>
//         );
//     }
// }

export default App
