"use client";
import { Plus } from "lucide-react";

export interface PageHeaderProps {
  title: string;
  addTitle?: string;
  onAdd?: (...args: any) => any;
}

const PageHeader = ({ title, addTitle, onAdd }: PageHeaderProps) => {
  return (
    <section className="space-y-6 sm:px-10 lg:p-6 xl:px-10">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-gray-900 tracking-wide">
          {title}
        </h2>
        {onAdd && (
          <button
            onClick={() => onAdd?.()}
            className="flex items-center rounded-lg bg-blue-600 text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            {addTitle ?? "Add New"}
          </button>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
