
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import imagem from "../../../images/imagem.jpeg"
import { Produtos } from '../../Home-Page/Produtos';
import { Filters } from '../../Home-Page/Filters';
import { Pagination } from '../../Home-Page/Pagination';
import { Footer } from '../../Home-Page/Footer';
import { Home } from '../../Home-Page/Home';

export function HomePage() {

    
    return (
        <section className=''>
            <Home></Home>
            <Filters></Filters>
            <Produtos></Produtos>
            <Pagination></Pagination>
            <Footer></Footer>
        </section>
    );
}

// exportexport  default Home;