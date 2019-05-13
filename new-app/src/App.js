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

export default App
