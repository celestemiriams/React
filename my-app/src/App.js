import React from 'react';

import ContactCard from './ContactCard';

function App(){
    return(
        <div className="contacts">
            <ContactCard 
                contact={{text:"hey", name:"Miriam", phone:"o702488995", email:"nantezamiriam@ymail.com" }}
            />

            <ContactCard 
               contact={{text:"hello", name:"Martha", phone:"0702488995", email:"martha2@gmail.com" }}
            />

            <ContactCard 
               contact={{text:"hi", name:"Probuse", phone:"0702488995", email:"nprobuse@gmail.com" }}
            />

            <ContactCard 
               contact={{text:"halo", name:"Sam", phone:"0702488995", email:"sams@gmail.com" }}
            />

            
            
        </div>
    );
}

export default App