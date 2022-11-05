import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const IconButtonHeader = ({ icon, navigateTo }) => {

  return (
    <Link href={ navigateTo }>
      <div className="icon-button">
        <FontAwesomeIcon 
            className={`header-icon ${icon.iconName}-icon`} 
            icon={ icon } 
        />
      </div>
    </Link>
  )
}
