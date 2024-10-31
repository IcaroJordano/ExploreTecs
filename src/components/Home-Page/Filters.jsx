import Dropdown from 'react-bootstrap/Dropdown';

export function Filters() {
    return (
        <section className="flex pl-4 py-4  items-center  z-40  w-full">
            <Dropdown className='mx-1  '>
                <Dropdown.Toggle className='bg-white h-9 border-black rounded-full overflow-hidden mx-0 text-xs text-black ' id="dropdown-basic">
                    Ordernar Por
                </Dropdown.Toggle>

                <Dropdown.Menu className='w-1/6'>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='ml-2 mr-10'>
                <Dropdown.Toggle className='bg-white px-3   border-black h-9 rounded-full overflow-hidden mx-0 text-xs text-black ' variant="success" id="dropdown-basic">
                    Filtrar
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <button className='bg-black w-10 h-10 mx-1'>.</button>
            <button className='bg-black w-10 h-10 mx-1'>.</button>
        </section>
    )
}