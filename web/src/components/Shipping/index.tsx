import './styles.css';
import { ShippingProps } from '../../typings/useShipping';
import { convertToReal } from '../../utils/utils';
 
export const Shipping = ({item,  shipping, setShipping, index}: ShippingProps) => {  
    console.log(item, index, shipping, 'item e index')
    return (  
        <div key={index} className={`shipping__wrapper ${shipping == item.type ? 'active': ''}`} onClick={() => item.index === index ? setShipping(item.type) : null}>
            <input type="radio" name={`shipping${index}`} id={`shipping${index}`} checked={shipping == item.type && item.index == index}/>
            <div className="shipping_description">
                <p className="shipping__description--title">{item.title}</p>
                <p className="shipping__description--info">{item.info}</p>   
            </div>
            <p className="shipping__price">{item.price ? `+ ${convertToReal(item.price)}` : 'Grátis'}</p>                     
        </div>               
    )
}