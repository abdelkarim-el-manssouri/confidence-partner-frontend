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
import "./users.css";
import Image from "next/image";
import { FaEye, FaPen, FaRegCircleXmark, FaTrash } from "react-icons/fa6";
import Link from "next/link";
import { confirmDialog } from 'primereact/confirmdialog';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { notifyError, notifySucess } from "@/utils/notify";
import axiosInstance from "@/lib/axios";
import { User, UserOne } from '@/interfaces/User';
import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import Loader from "@/components/common/Loader";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [perPage, setPerPage] = useState(10);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editModat, setEditModat] = useState<boolean>(false);

  const [loadingP, setLoadingP] = useState<boolean>(true);
  
  useEffect(() => {
    setTimeout(() => setLoadingP(false), 1000);
  }, []);
const formData = new FormData();
  const openModalUser = async (idUser: number, typeModal : string = 'show') => {
    setOpenModal(true);
    if (typeModal === 'show') {
      setEditModat(false);
    }else {
      setEditModat(true);
    }

    const authToken = Cookies.get("auth_token");
    if (!authToken) {
      window.location.reload();
      return;
    }
    try {
      const response = await axiosInstance.get<UserOne>(`${process.env.NEXT_PUBLIC_API_URL}/users/${idUser}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setUser(response.data.data);
      console.log('response.data : ', response.data);
      
    } catch (error) {
      console.error("Error fetching user:", error);
      setOpenModal(false);
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    formData.append(name , value);
    if (type === "checkbox") {
      formData.append(name , `${checked}`);

    }

  };
  function onCloseModal() {
    setOpenModal(false);
  }
  const saveUser = () => {
    console.log(formData);
    
  }
  const fetchUsers = async (search?: string) => {
    setLoading(true);
    try {
      const authToken = Cookies.get("auth_token");
      if (!authToken) {
        window.location.reload();
        return;
      }
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
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

      setUsers(response.data.data);
      setTotalRecords(response.data.pagination.total);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers(search);
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
      const response = await axiosInstance.delete(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,  {
        headers: {
          "Authorization": `Bearer ${authToken}`,
        },
      });
      
      if (response.status === 204) {
        notifySucess("users deleted successfully");
        fetchUsers();
      } else if(response.status === 422) {
        notifyError("Error deleting user");
      }

    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axEr = err as AxiosError;

        if (axEr.response?.status === 422) {
          
          notifyError("Error publishing user, please fill all required fields");
        } else {
          notifyError("Error publishing user");
          
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

// const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const file = e.target.files?.[0];
//   if (file) {
//     setSelectedFile(file);  // Update the selected file
//   }
// };

  return (
    <>
    {loadingP ? <Loader /> : <DefaultLayout>
      <div className="mx-auto"> {/*  max-w-242.5 */}
        <Breadcrumb pageName="Users / List" />
        <ToastContainer />
        <ConfirmDialog />

        <Modal show={openModal} size="2xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
        <div className="flex flex-col items-center space-y-4">
          {/* User Avatar */}
          <div className="relative w-24 h-24">
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE}/${user?.image }`|| "/default-avatar.png"}
              alt="User Avatar"
              className="rounded-full !w-full !h-full object-cover"
              width={50}
              height={50}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

            {/* Name */}
            <div className="w-full">
              <Label htmlFor="name" value="Name" />
              <TextInput
                id="name"
                name="name"
                value={user?.name}
                onChange={handleChange}
                placeholder="Enter name"
                required
                readOnly={!editModat}
              />
            </div>
            {/* Email */}
            <div className="w-full">
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                name="email"
                value={user?.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
                readOnly={!editModat}
              />
            </div>
            {/* Username */}
            <div className="w-full">
              <Label htmlFor="username" value="Username" />
              <TextInput
                id="username"
                name="username"
                value={user?.username}
                onChange={handleChange}
                placeholder="Enter username"
                readOnly={!editModat}
              />
            </div>
            {/* Roles */}
            <div className="w-full">
              <Label htmlFor="roles" value="Roles (comma-separated)" />
              <TextInput
                id="roles"
                name="roles"
                value={user?.roles?.join(", ") || ""}
                onChange={(e) =>
                  formData.append('roles', JSON.stringify(e.target.value.split(",").map((role) => role.trim())))
                  // setUser((prev) => ({
                  //   ...prev,
                  //   roles: e.target.value.split(",").map((role) => role.trim()),
                  // }))
                }
                placeholder="Enter roles (e.g., admin, editor)"
                readOnly={!editModat}
              />
            </div>
          </div>
          {/* Blocked Checkbox */}
          <div className="flex items-center gap-2 w-full">
            <Checkbox
              id="blocked"
              name="blocked"
              checked={user?.blocked}
              readOnly={!editModat}
              onChange={handleChange}
            />
            <Label htmlFor="blocked">Blocked</Label>
          </div>
          
          {/* Permissions */}
          <div className="w-full">
            <Label htmlFor="permissions" value="Permissions (comma-separated)" />
            <TextInput
              id="permissions"
              name="permissions"
              value={user?.permissions?.join(", ") || ""}
              readOnly={!editModat}
              onChange={(e) =>
                formData.append('permissions', JSON.stringify(e.target.value.split(",").map((role) => role.trim())))
                // setUser((prev) => ({
                //   ...prev,
                //   permissions: e.target.value.split(",").map((perm) => perm.trim()),
                // }))
              }
              placeholder="Enter permissions (e.g., read, write)"
            />
          </div>
          {editModat ?
          <div className="w-full flex justify-end gap-2">
            <button title='cencel' className='px-4 py-2 rounded-md border-dashed border border-blue-950  text-sm' onClick={onCloseModal}>Cancel</button>
            <button title='update' className='px-4 py-2 rounded-md bg-blue-950 text-white text-sm' onClick={saveUser}>Update</button>
          </div> : null}
        </div>
      </Modal.Body>
        </Modal>
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
            <Link href={'/admin/users/new'} className='bg-blue-600 text-white px-2 py-2 rounded-md text-sm xsm:w-2/12 xl:w-1/12 text-center'> Add User</Link>
            
          </div>
          <DataTable
            resizableColumns
            value={users}
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
            
            body={(rowData : User) => {
              
              return (
                <Link href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/users/${rowData?.id}/show`}>{rowData?.id}</Link>
              );
            }}
            />
            <Column
              field="thumbnail"
              header="Image"
              body={(rowData : User) =>
                rowData?.image && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE}/${rowData?.image}`}
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
              field="name"
              sortField="name"
              header="Name"
              body={(rowData : User) => {
              
                return (
                  <Link href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/users/${rowData?.id}/show`} title={rowData?.name}>{rowData?.name}</Link>
                );
              }}
              style={{ width: "35%" }}
            />

            <Column
              field="username"
              header="Username"
              style={{ width: "25%" }}
            />
            <Column
              field="email"
              header="Email"
              style={{ width: "25%" }}
            />
            <Column
              field="roles"
              header="Roles"
              body={(rowData : User) =>
                rowData?.roles?.map((role, index) => (
                  <span key={index}>{role} </span>
                ))
              }
              style={{ width: "25%" }}
            />
            <Column
              field="id"
              header="Action"
              style={{ width: "5%" }}
              body={(rowData : User) => (
                <div className="flex justify-center items-center">
                  {/* <Link href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/users/${rowData?.id}/show`}> */}
                    <button title="show" className="text-boxdark-2 dark:text-gray-100 px-3 py-2 rounded-md" onClick={() => openModalUser(rowData?.id, 'show')}><FaEye /></button>
                  {/* </Link> */}
                  {/* <Link href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/users/${rowData?.id}/edit`}> */}
                    <button title="Edit" className=" text-blue-500 px-3 py-2 rounded-md" onClick={() => openModalUser(rowData?.id, 'show')}><FaPen /></button>
                  {/* </Link> */}
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

export default UsersPage;
