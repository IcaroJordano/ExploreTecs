import Card from 'react-bootstrap/Card';

export function CardPromocao(params) {
    return (
        <Card.Text className=' m-0 flex flex-nowrap text-wrap items-center justify-center text-center' >
            <em className='h6 font-bold items-center justify-center text-center flex  text-sm'><del>R$ 99,90</del></em>
            <em className='h6 items-center font-bold justify-center text-center flex  text-sm'>|R$ 79,90</em>
        </Card.Text >
    )
}