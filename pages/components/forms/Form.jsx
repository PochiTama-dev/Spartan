import React from 'react';
import Button from './Button';
import Input from './Input';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({icon, inputs, button, goTo}) => {
  const arrayInputsProps = Object.values(inputs);
  return (
    <form className='form'>
      {
        icon && <label className='userAvatar'><FontAwesomeIcon icon={icon} /></label>
      }
      { 
        arrayInputsProps.map((value, index) =>
          Array.isArray(value)?
            <legend className='genreLegend'>
              Género
              <div className='radioContainer'>
                {
                  value.map((element, index) =>
                    <div key={element.id}>
                      <Input {...element} key={element.id} />
                      <label className='radioLabel' key={element.id} htmlFor={element.id}>
                        {element.text}  
                      </label>   
                    </div>     
                  )
                }
              </div>
            </legend>
        :
          value.type === 'file'?
            <label htmlFor={value.id} className='userAvatar'>
              <FontAwesomeIcon icon={value.icon} />
              <Input {...value} />
            </label>  
        :
          value.type === 'date'?
            <label htmlFor={value.id} className='dateLabel' key={value.id}>
              {value.text}
              <Input {...value} key={value.id} />
            </label>
        :
          value.type === 'checkbox'?
            <div>
              <Input {...value} key={value.id} />
              <label htmlFor={value.id} className='checkLabel' key={value.id}>
                {value.text}
              </label>
            </div>
        :
          <div className='inputContainer'>
            <Input {...value} key={value.id} placeholder=' '/>
            <label className='inputLabel' htmlFor={value.id}>{value.legend}</label>
          </div>
        )
      }
      <Button {...button} />
      <Link href={goTo.navigate}>
        <span className='linkForm'>{goTo.legend}</span>
      </Link>
    </form>
  );
}

export default Form;