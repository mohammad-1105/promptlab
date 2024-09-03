import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function PaginationBox({
  className,
  currentPage,
  totalPages,
  setCurrentPage,
}: {
  className?: string;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}) {
  return (
    <Pagination className={`${className}`}>
      <PaginationContent>
        <PaginationItem>
          {/* Disable if on the first page */}
          {/* previous button */}
          <Button
            disabled={currentPage <= 1}
            variant={"ghost"}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            Prev
          </Button>
        </PaginationItem>

        <PaginationItem>
          <Badge className="mx-2">
            {currentPage} of {totalPages}
          </Badge>
        </PaginationItem>

        <PaginationItem>
          {/* Disable if on the last page */}
          {/* Next button */}
          <Button
            disabled={currentPage >= totalPages}
            variant={"ghost"}
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
          >
            Next
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
