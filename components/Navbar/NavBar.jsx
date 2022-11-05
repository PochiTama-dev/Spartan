import { faTimesCircle, faBars, faCommentDots, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { SearchBar } from "./SearchBar"
import { IconButtonHeader } from "./IconButtonHeader"
import { Dropdown } from './Dropdown'

export const NavBar = () => {
  return (
    <header className="header-container"> 
      <div>
        {/* <IconButtonHeader icon={ faBars } navigateTo="/s"/> */}
        <Dropdown />

        <IconButtonHeader icon={ faTimesCircle } navigateTo="/"/>
      </div>

      <SearchBar/> 

      <div>
        <IconButtonHeader icon={ faCommentDots } navigateTo="/sdfa"/>

        <IconButtonHeader icon={ faBell } navigateTo="/asdfa"/>

        <IconButtonHeader icon={ faUser } navigateTo="/asdfa"/>
      </div>
    </header>
  )
}
