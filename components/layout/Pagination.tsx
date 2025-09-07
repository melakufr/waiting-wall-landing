"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  pageIndex: number;
  pageCount: number;
  pageSize: number;
  onPageChange: (pageIndex: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  disabled?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  pageIndex,
  pageCount,
  pageSize,
  onPageChange,
  onPageSizeChange,
  disabled = false,
}) => {
  const canPrevious = pageIndex > 0;
  const canNext = pageIndex < pageCount - 1;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (pageCount <= maxVisiblePages) {
      for (let i = 0; i < pageCount; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(0);
      
      // Calculate start and end of visible pages
      let start = Math.max(1, pageIndex - 1);
      let end = Math.min(pageCount - 2, pageIndex + 1);
      
      // Adjust if we're near the start
      if (pageIndex <= 2) {
        end = 3;
      }
      
      // Adjust if we're near the end
      if (pageIndex >= pageCount - 3) {
        start = pageCount - 4;
      }
      
      // Add ellipsis if needed
      if (start > 1) {
        pages.push(-1); // -1 represents ellipsis
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed
      if (end < pageCount - 2) {
        pages.push(-2); // -2 represents ellipsis
      }
      
      // Always show last page
      pages.push(pageCount - 1);
    }
    
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
      {/* Page size selector */}
      {onPageSizeChange && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Show</span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            disabled={disabled}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {[10, 20, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-600">entries</span>
        </div>
      )}

      {/* Page navigation */}
      <div className="flex items-center gap-2">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(pageIndex - 1)}
          disabled={!canPrevious || disabled}
          className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((pageNumber, index) =>
            pageNumber >= 0 ? (
              <button
                key={index}
                onClick={() => onPageChange(pageNumber)}
                disabled={disabled}
                className={`min-w-[2.5rem] px-2 py-1 rounded border text-sm ${
                  pageIndex === pageNumber
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-300 hover:bg-gray-100"
                } disabled:opacity-50`}
              >
                {pageNumber + 1}
              </button>
            ) : (
              <span
                key={index}
                className="px-2 py-1 text-gray-500"
              >
                ...
              </span>
            )
          )}
        </div>

        {/* Next button */}
        <button
          onClick={() => onPageChange(pageIndex + 1)}
          disabled={!canNext || disabled}
          className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Page info */}
      <div className="text-sm text-gray-600">
        Showing {pageIndex * pageSize + 1} to{" "}
        {Math.min((pageIndex + 1) * pageSize, pageCount * pageSize)} of{" "}
        {pageCount * pageSize} entries
      </div>
    </div>
  );
};

export default Pagination;