import { faTimesCircle, faBars, faCommentDots, faBell } from '@fortawesome/free-solid-svg-icons'
import { SearchBar } from "./SearchBar"
import { IconButtonHeader } from "./IconButtonHeader"

export const NavBar = () => {
  return (
    <header className="header-container"> 
      <div>
        <IconButtonHeader icon={ faBars } navigateTo="/s"/>

        <IconButtonHeader icon={ faTimesCircle } navigateTo="/"/>
      </div>

      <SearchBar/> 

      <div>
        <IconButtonHeader icon={ faCommentDots } navigateTo="/s"/>

        <IconButtonHeader icon={ faBell } navigateTo="/s"/>
      </div>
    </header>
  )
}
