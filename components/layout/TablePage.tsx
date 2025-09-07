"use client";
import { CustomTableProps } from "@/components/layout/CustomTable";
import { PageHeaderProps } from "@/components/layout/PageHeader";
import dynamic from "next/dynamic";


const CustomTable = dynamic(() => import("@/components/layout/CustomTable"), {
  loading: () => <div></div>,
  ssr: false,
});
const PageHeader = dynamic(
  () => import("@/components/layout/PageHeader"),
  {
    loading: () => <div></div>,
    ssr: false,
  }
);

export interface TablePageProps {
  TableOptions?: CustomTableProps;
  HeaderOptions?: PageHeaderProps;
  isLoading?: boolean;
}

const TablePage: React.FC<TablePageProps> = ({
  TableOptions,
  HeaderOptions,
  isLoading,
}) => {
  return (
    <section className="min-h-[calc(100vh-163px)] table-section text-gray-900 px-4 ">
      {HeaderOptions && <PageHeader {...HeaderOptions} />}

      <div className="w-full mt-6">
        {TableOptions && !isLoading ? (
          <CustomTable {...TableOptions} />
        ) : (
          <div className="flex justify-center items-center h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TablePage;
