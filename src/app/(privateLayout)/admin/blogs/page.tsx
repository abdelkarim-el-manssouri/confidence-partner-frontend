/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import 'primereact/resources/themes/lara-light-indigo/theme.css'; // or your chosen theme
import 'primereact/resources/primereact.min.css'; // core styles

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import "./blogs.css";
import Image from "next/image";
import { Blog } from "@/interfaces/blogs";
import { FaEye, FaPen, FaRegCircleXmark, FaTrash } from "react-icons/fa6";
import Link from "next/link";
import { confirmDialog } from 'primereact/confirmdialog';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { notifyError, notifySucess } from "@/utils/notify";
import axiosInstance from "@/lib/axios";
import LoaderSP from "@/components/common/Loader";

const BlogTable = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [perPage, setPerPage] = useState(10);

  const [loadingP, setLoadingP] = useState<boolean>(true);
  
    // const pathname = usePathname();
  
    useEffect(() => {
      setTimeout(() => setLoadingP(false), 1000);
    }, []);

  const fetchBlogs = async (search?: string) => {
    setLoading(true);
    try {
      const authToken = Cookies.get("auth_token");
      if (!authToken) {
        window.location.reload();
        return;
      }
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
        {
          params: {
            page: currentPage,
            per_page: perPage,
            search: search?.toLowerCase(),
          },
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setBlogs(response.data.data);
      setTotalRecords(response.data.pagination.total);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs(search);
  }, [currentPage, perPage, search]);

  const onPageChange = (
    event:
      | PaginatorPageChangeEvent
      | { first: number; rows: number; page: number; totalPages: number }
  ) => {
    console.log("event", event);

    setCurrentPage(event?.page ? event?.page + 1 : 0); // PrimeReact page starts at 0, so we add 1
    setPerPage(event.rows);
  };


  const accept =  async (id : number) => {
    const authToken = Cookies.get("auth_token");
    if (!authToken) {
      return;
    }

    try {
      const response = await axiosInstance.delete(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`,  {
        headers: {
          "Authorization": `Bearer ${authToken}`,
        },
      });
      
      if (response.status === 204) {
        notifySucess("Blog deleted successfully");
        fetchBlogs();
      } else if(response.status === 422) {
        notifyError("Error deleting blog");
      }

    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axEr = err as AxiosError;

        if (axEr.response?.status === 422) {
          
          notifyError("Error publishing blog, please fill all required fields");
        } else {
          notifyError("Error publishing blog");
          
        }
      }
      // console.error("Error publishing blog", err);
      // notify("Error publishing blog");
      // setPublished(false);
    }
  }
  
  const reject = () => {
    notifyError('You have rejected');
  }

  const confirmDelete = (n : number) => {
    confirmDialog({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        // icon: <FaExclamation />,
        defaultFocus: 'reject',
        acceptClassName: 'text-red-500 ml-3',
        accept : () => {
          accept(n);
        },
        reject
    });
};

  return (
    <>
    {loadingP ? <LoaderSP /> :
    <DefaultLayout>
      <div className="mx-auto"> {/*  max-w-242.5 */}
        <Breadcrumb pageName="Blog / List" />
        <ToastContainer />
        <ConfirmDialog
        />
        {/* className="shadow-sm p-3 rounded-md text-black dark:text-white bg-gray-50 dark:bg-black" */}

        {/* PrimeReact - DataTable */}

        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-end items-center my-3 p-3">
            <div className="flex items-center w-10/12 md:w-11/12">

            <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-2/4 lg:w-1/4 p-2 border rounded-md dark:bg-gray-800 dark:text-white"
              />
              <div className="flex justify-center items-center mx-2">
                <FaRegCircleXmark
                  className="cursor-pointer"
                  onClick={() => setSearch("")}
                />
              </div>
            </div>
            <Link href={'/admin/blogs/new'} className='bg-blue-600 text-white px-2 py-2 rounded-md text-sm xsm:w-2/12 xl:w-1/12 text-center'> Add Blog</Link>
            
          </div>
          <DataTable
            resizableColumns
            value={blogs}
            reorderableColumns
            columnResizeMode="fit"
            showGridlines
            rows={perPage}
            totalRecords={totalRecords}
            lazy
            first={currentPage === 1 ? 0 : (currentPage - 1) * perPage}
            // onPage={onPageChange}
            loading={loading}
            className=''
            rowClassName={(rowData, index) =>
              `p-datatable-dark h-16 border-b border-gray-300 dark:border-gray-700 ${
                index?.props?.tabIndex
                  ? index?.props?.tabIndex % 2 === 0
                    ? "bg-gray-100 dark:bg-gray-800"
                    : "bg-white dark:bg-gray-900"
                  : ""
              }`
            }
          >
            <Column field="id" header="ID" style={{ width: "5%" }}
            
            body={(rowData : Blog) => {
              
              return (
                <Link href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/blogs/${rowData?.id}/show`}>{rowData?.id}</Link>
              );
            }}
            />
            <Column
              field="thumbnail"
              header="Image"
              body={(rowData) =>
                rowData?.thumbnail && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE}/${rowData?.thumbnail}`}
                    height={115}
                    className="rounded-md"
                    width={115}
                    alt=""
                  />
                )
              }
              className="flex justify-center items-center"
            />
            <Column
              field="title"
              sortField="title"
              header="Blog Title"
              body={(rowData : Blog) => {
              
                return (
                  <Link href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/blogs/${rowData?.id}/show`} title={rowData?.title}>{rowData?.title}</Link>
                );
              }}
              style={{ width: "35%" }}
            />

            <Column
              field="auteur.name"
              header="Auteur"
              style={{ width: "25%" }}
            />
            <Column
              field="id"
              header="Action"
              style={{ width: "5%" }}
              body={(rowData) => (
                <div className="flex justify-center items-center">
                  <Link href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/blogs/${rowData?.id}/show`}>
                    <button title="show" className="text-boxdark-2 dark:text-gray-100 px-3 py-2 rounded-md"><FaEye /></button>
                  </Link>
                  <Link href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/blogs/${rowData?.id}/edit`}>
                    <button title="Edit" className=" text-blue-500 px-3 py-2 rounded-md"><FaPen /></button>
                  </Link>
                  <button
                  title="delete"
                  className="text-red-500"
                  onClick={() => confirmDelete(rowData?.id)}
                    >
                      <FaTrash />
                  </button>
                </div>
                  )
                }
            />
            {/* Add other columns as needed */}
          </DataTable>

          <Paginator
            first={currentPage === 1 ? 0 : (currentPage - 1) * perPage}
            rows={perPage}
            totalRecords={totalRecords}
            onPageChange={onPageChange}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            className="custom-paginator"
            style={{ display: "flex" }}
          />
        </div>
      </div>
    </DefaultLayout>}
    </>
    
  );
};

export default BlogTable;
