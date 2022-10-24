import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle, faBars, faCommentDots, faBell } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"

export const NavBar = () => {
  return (
    <header className="header-container"> 
      <div>
        <Link href='/'>
          <FontAwesomeIcon className="logo-icon" icon={faBars} />
        </Link>
        <Link href="/s">
          <FontAwesomeIcon className="logo-icon" icon={faTimesCircle}  />
        </Link>
      </div>

      <div>
        <Link href="/sljs">
          <FontAwesomeIcon className="logo-icon" icon={faCommentDots} /> 
        </Link> 
        <FontAwesomeIcon className="logo-icon" icon={faBell} />
      </div>
    </header>
  )
}
