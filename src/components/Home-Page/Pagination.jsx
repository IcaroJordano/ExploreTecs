import Pagination from 'react-bootstrap/Pagination';

export function SectionPagination(params) {
    return (
        <section className="w-full h-40   flex justify-center items-center overflow-hidden">
            <Pagination className='' >
                <Pagination.Prev  className=' justify-center items-center flex   h-10 w-10  p-0 mx-1 text-red-500  '  />
                <Pagination.Item  className=' justify-center items-center flex   h-10 w-10  p-0 mx-1 text-red-500  ' >
                    1
                </Pagination.Item>
                <Pagination.Item  className=' justify-center items-center flex   h-10 w-10  p-0 mx-1 text-red-500  '  disabled>
                    2
                </Pagination.Item>
                <Pagination.Item  className=' justify-center items-center flex   h-10 w-10  p-0 mx-1 text-red-500  ' >
                    3
                </Pagination.Item>
                <Pagination.Item  className=' justify-center items-center flex   h-10 w-10  p-0 mx-1 text-red-500  ' >
                    4
                </Pagination.Item>
                <Pagination.Item  className=' justify-center items-center flex   h-10 w-10  p-0 mx-1 text-red-500   ' >
                    5
                </Pagination.Item>
                <Pagination.Next  className=' justify-center items-center flex   h-10 w-10  p-0 mx-1 text-red-500  '  />
            </Pagination>
        </section>
    )
}