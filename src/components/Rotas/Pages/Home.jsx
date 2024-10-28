// import Carousel from 'react-bootstrap/Carousel';
import imagem from '../../../images/imagem.jpeg'
// import { Button, ButtonGroup, Navbar } from 'react-bootstrap';

export function Home() {
    return (
        <section>
            <div class="card" className='w-1/2' >
                <img class="card-img-top" src={imagem} alt="Imagem de capa do card"/>
                    <div class="card-body">
                        <h5 class="card-title">Título do card</h5>
                        <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                        <a href="#" class="btn btn-primary">Visitar</a>
                    </div>
            </div>
        </section>
    );
}
