import { useNavigate } from 'react-router-dom';
import './styles.css'

export const SummaryTotalizers = () => {

    return (
        <div className='summaryTotalizers'>
            <div className='summaryTotalizers__price--container'>
                <div className='summaryTotalizers__price--description content-flex flex-column'>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>
                        <span>Subtotal</span>
                        <span>R$ 10.986,90</span>
                    </div>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>
                        <span>Desconto</span>
                        <span>R$ -2.069,70</span>
                    </div>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>
                        <span>Entrega</span>
                        <span>R$ 36,90</span>
                    </div>
                </div>
                <div className='summaryTotalizers__price--total content-flex flex-column'>
                    <div className='summaryTotalizers__description--row content-flex justify-between'>

                        <span>Total</span>
                        <span>R$8.876,50</span>
                    </div>
                    <p className='summaryTotalizers__installments--row content-flex '>
                        em até
                        <span>10x</span>
                        de
                        <span>R$ 887,65</span>
                    </p>
                </div>
            </div>
            <div className='summaryTotalizers__button--container content-flex justify-center'>

                <button className='summaryTotalizers__button'> Ir para o pagamento</button>
            </div>
        </div>
    )
}