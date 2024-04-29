import style from './card.module.css';

const Card = ({nombre, imagen})=>{
    return(
        <div className={style.container}>
            <span className={style.span1}></span>
            <span className={style.span2}></span>
            <span className={style.span3}></span>
            <span className={style.span4}></span>
            
            <img className={style.imagen} src={imagen} alt="principal" />
            <h3>{nombre}</h3>
            <h2>abilidad</h2>
            <h2></h2>
        </div>
    )
}


export default Card;