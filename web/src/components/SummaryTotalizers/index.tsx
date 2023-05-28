import { useNavigate } from 'react-router-dom';
import './styles.css'

export const SummaryTotalizers = () => {

    return (
        <div className='summaryTotalizers'>
            <div className='summaryTotalizers__price--container'>
                <div className='summaryTotalizers__price--description content-flex flex-column'>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>
                        <span className='summaryTotalizers__title'>Subtotal</span>
                        <span className='summatyTotalizers__value'>R$ 10.986,90</span>
                    </div>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>
                        <span className='summaryTotalizers__title'>Desconto</span>
                        <span className='summatyTotalizers__value--negative'>R$ -2.069,70</span>
                    </div>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>
                        <span className='summaryTotalizers__title'>Entrega</span>
                        <span className='summatyTotalizers__value'>R$ 36,90</span>
                    </div>
                </div>
                <div className='summaryTotalizers__price--total content-flex flex-column'>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>
                        <span className='summaryTotalizers__title'>Total</span>
                        <span className='summatyTotalizers__total--value'>R$8.876,50</span>
                    </div>
                    <p className='summaryTotalizers__installments--row'>
                        em até 
                        <strong> 10x </strong>
                        de
                        <strong> R$ 887,65</strong>
                    </p>
                </div>
            </div>
            <div className='summaryTotalizers__button--container content-flex justify-center'>

                <button className='summaryTotalizers__button'> Ir para o pagamento</button>
            </div>
        </div>
    )
}