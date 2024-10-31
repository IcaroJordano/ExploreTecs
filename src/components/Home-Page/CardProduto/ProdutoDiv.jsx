import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
// import { CardText } from 'react-bootstrap';

export function CardProduto({ nome, image, preco, children}) {
    return (
        <a href="" className='w-5/12 lg:w-[300px] lg:ml-5 p-0 relative flex mt-3  '>
            <Card className='border-none lg:mt-10' >
                <Badge className='absolute -left-1 lg:-left-2 text-[9px] lg:text-xs lg:-top-2 -top-1' bg="dark">10% OFF</Badge>
                <Card.Img className='h-40 lg:h-80 m-0' variant="top" src={'https://rsv-ink-images-production.s3.sa-east-1.amazonaws.com/images/product_v2/main_image/394aac6b4bf23b7a64b35c79e03e0568.webp'} />
                <Card.Body className=' p-0'>
                    <Card.Title className='m-0 text-base  lg"text-wrap  text-nowrap text text-ellipsis  justify-center    leading-none my-2 lg:my-0 overflow-clip  font-normal  lg:w-full    text-center' >Card TitleCard TitleCard TitleCard Tiaaaaaaaaaaaaaaaaaatle</Card.Title>
                    {children}
                    <Card.Text className=' items-center justify-center flex'>
                        <em className=' text-[11px]  '> 6x de 13.99 sem juros</em>
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    )
}