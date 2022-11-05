import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCircleQuestion, faGear, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import { DropdownItem } from './DropdownItem';

const itemsList = [
  {
    text: 'Mi perfil',
    icon: faUser,
    link: '#'
  },
  {
    text: 'Configuraciones',
    icon: faGear,
    link: '#'
  },
  {
    text: 'Ayuda',
    icon: faCircleQuestion,
    link: '#'
  },
  {
    text: 'Guardado',
    icon: faBookmark,
    link: '#'
  },
  {
    text: 'Cerrar sesión',
    icon: faRightFromBracket,
    link: '#'
  }
]

export const DropdownList = ({ text }) => {
  return (

    itemsList.map(( item, index )=> (
        <DropdownItem item={item} key={ index }/>
    ))

  )
}
