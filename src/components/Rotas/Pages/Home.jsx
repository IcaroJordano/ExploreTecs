import Carousel from 'react-bootstrap/Carousel';
import imagem from '../../../images/imagem.jpeg'

export function Home() {
    return (
        <section>
            <nav aria-label="Navegação de página exemplo">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Anterior</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Próximo</a></li>
                </ul>
            </nav>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagem} alt="Primeiro Slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagem} alt="Segundo Slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagem} alt="Terceiro Slide" />
                </Carousel.Item>
            </Carousel>
        </section>
    );
}
