import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination";

interface PaginationDemoProps {
    currentPage: number;
    totalBlogs: number;
    paginate: (pageNumber: number) => void;
}

export function PaginationDemo({ currentPage, totalBlogs, paginate }: PaginationDemoProps) {
    const blogsPerPage = 4;  // Set the number of blogs per page

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);

    // Generate an array of page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                    />
                </PaginationItem>

                {/* Display page numbers */}
                {pageNumbers.map((number) => (
                    <PaginationItem key={number}>
                        <PaginationLink
                            href="#"
                            isActive={currentPage === number}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={() =>
                            currentPage < totalPages && paginate(currentPage + 1)
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
