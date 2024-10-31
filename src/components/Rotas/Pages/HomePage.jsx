
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import imagem from "../../../images/imagem.jpeg"
import { Produtos } from '../../Home-Page/Produtos';
import { Filters } from '../../Home-Page/Filters';
import { SectionPagination } from '../../Home-Page/Pagination';
import { Footer } from '../../Home-Page/Footer';
import { Home } from '../../Home-Page/Home';

export function HomePage() {

    
    return (
        <section className=''>
            <Home></Home>
            <Filters></Filters>
            <Produtos></Produtos>
            <SectionPagination></SectionPagination>
            <Footer></Footer>
        </section>
    );
}

// exportexport  default Home;