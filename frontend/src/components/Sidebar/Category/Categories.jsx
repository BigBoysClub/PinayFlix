import {GrCatalogOption} from "react-icons/gr";
import { TbBrandAmongUs } from "react-icons/tb";
import {GrMusic} from "react-icons/gr";
import {GrMysql} from "react-icons/gr";

import '../../Sidebar/SideBar.css';

function Categories() {
  return (
    <div className='sections categories-section'>
        <h2 className="section-title">Categories</h2>
        <ul className="list-ul">
            <li> <GrCatalogOption/> <span className="spacer">Academic</span></li>
            <li> <TbBrandAmongUs/><span className="spacer">Memes</span></li>
            <li> <GrMusic/><span className="spacer">Music</span></li>
            <li> <GrMysql/><span className="spacer">Weird Shits</span></li>
        </ul>
    </div>
  )
}

export default Categories;