import React from 'react';
import Form from './components/forms/Form';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const register = () => {
  return (
    <div className='formContainer'>
      <Form
        inputs={
          {
            inputFile:{
              id:'avatar',
              type:'file',
              name:'avatar',
              icon: faCamera
            },
            inputFirstName:{
              id:'firstName',
              type:'text',
              name:'firstName',
              legend:'Nombre',
            },
            inputLastName:{
              id:'lastName',
              type:'text',
              name:'lastName',
              legend:'Apellido'
            },
            inputDate:{
              type:'date',
              name:'date',
              placeholder:'Fecha de nacimiento',
              text:'Fecha de nacimiento'
            },
            inputRadio:[
              {
                id:'men',
                type:'radio',
                name:'genre',
                value:'men',
                text:'Hombre'
              },
              {
                id:'woman',
                type:'radio',
                name:'genre',
                value:'women',
                text:'Mujer'
              },
              {
                id:'other',
                type:'radio',
                name:'genre',
                value:'other',
                text:'Otro'
              },
            ],
            inputEmail:{
              id:'email',
              type:'text',
              name:'email',
              legend:'Dirección de Email'
            },
            inputPass:{
              id:'pass',
              type:'text',
              name:'pass',
              legend:'Password'
            },
            inputConfirmPass:{
              id:'confirmPass',
              type:'text',
              name:'confirmPass',
              legend:'Confirme Password'
            },
            inputCheck:{           
              id:'terms',
              type:'checkbox',
              name:'terms',
              text: 'Acepto términos y condiciones'    
            }
          }
        }
        button={
          {
            text:'Registrarme'
          }
        }
        goTo={
          {
            navigate:'/login',
            legend:'Ya tengo cuenta!'
          }
        }
      />
    </div>
  );
}

export default register;