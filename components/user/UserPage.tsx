"use client";

import React, { useEffect, useState, useMemo } from "react";
import TablePage, { TablePageProps } from "@/components/layout/TablePage";
import dynamic from "next/dynamic";


const ModalComponent = dynamic(
  () => import("@/components//ModalComponent"),
  {
    loading: () => <div></div>,
    ssr: false,
  }
);
const CreateUser = dynamic(
  () => import("@/components/user/CreateUser"),
  {
    ssr: false,
  }
);

// Mock data fetch function for users
const useGetUsers = ({ page, limit }: { page: number; limit: number }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        // In a real app, you would fetch from your API
        const mockUsers = [
          {
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            emailVerified: new Date(),
            createdAt: new Date('2024-01-15'),
          },
          {
            id: '2',
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            phone: '+0987654321',
            emailVerified: null,
            createdAt: new Date('2024-01-14'),
          },
          // Add more mock users as needed
        ];

        // Simulate API response
        const response = {
          users: mockUsers,
          totalPage: Math.ceil(mockUsers.length / limit),
          totalCount: mockUsers.length,
        };

        setData(response);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [page, limit]);

  return { data, isLoading, isError };
};

const UsersPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const {
    data: allUsers,
    isLoading,
    isError,
  } = useGetUsers({ page, limit });

  // Table columns configuration for Users
  const tableColumns = useMemo(
    () => [
      {
        label: "Name",
        accessorKey: "firstName",
        cell: (row: any) => (
          <span>{row.firstName} {row.lastName}</span>
        ),
      },
      {
        label: "Email",
        accessorKey: "email",
        cell: (row: any) => <span>{row.email || "N/A"}</span>,
      },
      {
        label: "Phone",
        accessorKey: "phone",
        cell: (row: any) => <span>{row.phone || "N/A"}</span>,
      },
      {
        label: "Status",
        accessorKey: "emailVerified",
        cell: (row: any) => (
          <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
            row.emailVerified 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {row.emailVerified ? 'Verified' : 'Pending'}
          </span>
        ),
      },
      {
        label: "Joined Date",
        accessorKey: "createdAt",
        cell: (row: any) => (
          <span>{new Date(row.createdAt).toLocaleDateString()}</span>
        ),
      },
    ],
    []
  );

  const TableOptions = useMemo(
    () => ({
      columns: tableColumns,
      pageIndex: pageIndex,
      pageSize: pageSize,
      pageCount: allUsers?.totalPage ?? 1,
      setPagination: setPagination,
      data: allUsers?.users ?? [],
    }),
    [allUsers, tableColumns, pageIndex, pageSize]
  );

  // Header options
  const HeaderOptions = useMemo(
    () => ({
      title: "Users",
      addTitle: "New User",
      onAdd: () => setModalOpen(true),
    }),
    []
  );

  // Update page and limit when pagination changes
  useEffect(() => {
    setPage(pageIndex + 1);
    setLimit(pageSize);
  }, [pageIndex, pageSize]);

  return (
    <>
      {modalOpen && (
        <ModalComponent
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          titles={{ title: "Create User" }}
          fullWidth={true}
        >
          <CreateUser onSuccess={() => setModalOpen(false)} />
        </ModalComponent>
      )}

      <TablePage
        TableOptions={TableOptions}
        HeaderOptions={HeaderOptions}
        isLoading={isLoading}
      />
    </>
  );
};

export default UsersPage;