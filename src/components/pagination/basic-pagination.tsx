import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

type PaginationBasicProps = {
  page: number,
  limit: number,
  total: number,
  paginateHandler: (id: number) => void,
}

export default function PaginationBasic({page, limit, total, paginateHandler}: PaginationBasicProps) {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 my-4">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{(page - 1) * limit + 1}</span> to <span className="font-medium">{limit * page > total ? total : page * limit}</span> of{' '}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button              
              onClick={() => {
                paginateHandler(page-1)
              }}
              disabled={page <= 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              <span>Previous</span>
            </button>
            <button            
              disabled={page * limit > total}
              onClick={() => {
                paginateHandler(page+1)
              }}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span>Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
