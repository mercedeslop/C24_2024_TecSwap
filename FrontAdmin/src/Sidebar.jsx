import React from 'react'
import 
   {BsCart3, BsFillHouseFill, BsFillPersonFill, BsEnvelopePaperFill, 
    BsFillGrid3X3GapFill, BsUniversalAccessCircle, BsReverseLayoutTextWindowReverse} 
    from 'react-icons/bs';

    function Sidebar(){
        return(
         <aside id='sidebar'>
            <div className='tecswap'>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                <img src="img/tecswap-removebg-preview.png" alt="tecswap" width="165px"/>
                </div>
                <span className='icon close_icon'>X</span>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillHouseFill className='icon'/> Home
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillPersonFill className='icon'/> Usuario
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsCart3 className='icon'/> Productos
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsReverseLayoutTextWindowReverse className='icon'/> Transacción
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsFillGrid3X3GapFill className='icon'/> Categorias
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsEnvelopePaperFill className='icon'/> Notificaciones
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <BsUniversalAccessCircle className='icon'/> Roles
                    </a>
                </li>
            </ul>
            </div>
         </aside>
        )
    }

    export default Sidebar;