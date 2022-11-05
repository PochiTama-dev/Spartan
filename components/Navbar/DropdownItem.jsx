import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const DropdownItem = ({ item }) => {

    const { icon, text, link  } = item;

  return (
    <>
        <li className="dropdown-item">
            <Link href={ link }>
                <div>
                    <FontAwesomeIcon className="dropdownIcon" text={text} icon={icon} />
                    <a>{text}</a>
                </div>
            </Link>
        </li>
        <hr/>
    </>
  );
};
