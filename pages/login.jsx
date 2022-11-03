import React from 'react';
import Form from './components/forms/Form';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const login = () => {
  return (
    <div className='formContainer'>
      <Form
        icon={faUser}
        inputs={
         {
            inputEmail:{
              id:'email',
              type:'text',
              name:'email',
              legend:'Email'
            },
            inputPass:{
              id:'pass',
              type:'text',
              name:'pass',
              legend:'Password'
            },
            inputCheck:{
              id:'remember',
              type:'checkbox',
              name:'remember',
              text:'Recordarme'
            }
         }
        }
        button={
          {
            text:'Log in'
          }
        }
        goTo={
          {
            navigate:'/register',
            legend:'Aún no tengo cuenta'
          }
        }
      />
    </div>
  );
}

export default login;