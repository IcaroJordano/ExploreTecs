
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import imagem from "../../../images/imagem.jpeg"
import { Produtos } from '../../Home-Page/Produtos';
import { Filters } from '../../Home-Page/Filters';
import { SectionPagination } from '../../Home-Page/Pagination';
import { Footer } from '../../Home-Page/Footer';
import { Home } from '../../Home-Page/Home';
import { SectionButtons } from '../../Home-Page/Buttons';

export function HomePage() {

    
    return (
        <section className=''>
            <Home></Home>
            <Filters></Filters>
            <Produtos></Produtos>
            <SectionPagination></SectionPagination>
            <Footer></Footer>
            <SectionButtons></SectionButtons>
        </section>
    );
}

// exportexport  default Home;