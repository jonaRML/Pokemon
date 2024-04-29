import style from './searchBar.module.css'
import icon from '../assets/searchIcon.svg'
import {Link, Outlet}  from 'react-router-dom'

const SearchBar = () =>{
    return(
        <>
        <div className={style.container}>
            <div className={style.containerLink}>
                <Link to='/' >añade tu Pokemon</Link>
                <Link to='/' >añade tu Pokemon</Link>
                <Link to='/' >añade tu Pokemon</Link>
            </div>

            <div className={style.containerInput}>
                <input className={style.input}type="text" name="" id="" />
                <img className={style.img} src={icon} alt="search" />
            </div>
        </div>

        <Outlet/>
        </>
         )
}

export default SearchBar;