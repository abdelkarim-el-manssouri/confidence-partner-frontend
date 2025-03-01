/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import React, { useState, useEffect, useRef } from "react";
import axios, { AxiosError } from "axios";

import {} from "react-icons/fa6";
import { notifyError, notifySucess } from "@/utils/notify";
import axiosInstance from "@/lib/axios";
import { Label, Select, TextInput } from "flowbite-react";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/navigation";
import { Role } from "@/interfaces/Roles";


const UsersPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordC, setPasswordC] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [roles, setRoles] = useState<Role[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const imageUrlRef = useRef<string>("");
  const router = useRouter();
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (imageUrlRef.current) {
        URL.revokeObjectURL(imageUrlRef.current); // Revoke the old URL if it exists
      }
      imageUrlRef.current = URL.createObjectURL(file);
      setImage(file);
    }
  };
  const [loadingP, setLoadingP] = useState<boolean>(true);
  const authToken = Cookies.get("auth_token");
  
  const roleData = async () => {
    if (!authToken) {
    window.location.reload();
    return;
  }
    try {
      const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/roles`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      if (response.status === 200) {
        setRoles(response.data);
        
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notifyError("Failed to fetch roles");

      }
    }

  };

  useEffect(() => {
    roleData();
    setTimeout(() => setLoadingP(false), 1000);
  }, []);

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData();
    e.preventDefault();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("roles[]", role);
    formData.append("password_confirmation", passwordC);
    formData.append("image", image as File);

    const authToken = Cookies.get("auth_token");
    if (!authToken) {
      window.location.reload();
      return;
    }

    try {
      const response = await axiosInstance.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log("Response : ", response);

      if (response.status === 201) {
        notifySucess("User add successfully");
        router.push(`${process.env.NEXT_PUBLIC_ADMIN_URL}/users`);
        // window.location.href = "/admin/user";
      } else if (response.status === 422) {
        setLoading(false);
        console.error("Error while creating user", response.data);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axEr = err as AxiosError;

        if (axEr.response?.status === 422) {
          setLoading(false);
          notifyError("Error add user, please fill all required fields");
        } else {
          notifyError("Error add user");
          setLoading(false);
        }
      }
    }
  };

  return (
    <>
      {loadingP ? (
        <Loader />
      ) : (
        <DefaultLayout>
          <div className="mx-auto">
            {" "}
            {/*  max-w-242.5 */}
            <Breadcrumb pageName="Users / New" />
            <ToastContainer />
            <div className="flex flex-col items-center space-y-4">
              <form action="" onSubmit={onSubmit} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="col-span-1">
                    <div className="dark:bg-boxdark bg-white mb-3 py-3 pl-7 rounded-lg shadow-md font-bold text-boxdark dark:text-white">Profile</div>
                    <div className="flex items-center justify-center flex-col gap-4  dark:bg-boxdark bg-white shadow-md py-10 rounded-lg ">
                      <div className="flex items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-full cursor-pointer overflow-hidden">
                        {!image ? (
                          <label
                            htmlFor="image-upload"
                            className="flex flex-col items-center justify-center h-full w-full text-gray-500 hover:text-gray-700"
                          >
                            <div className="mb-2">📤</div>
                            <p>Upload Image</p>
                            <input
                              id="image-upload"
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageUpload}
                            />
                          </label>
                        ) : (
                          <label
                            htmlFor="image-upload"
                            className="flex flex-col items-center justify-center h-full w-full text-gray-500 hover:text-gray-700"
                          >
                            <div
                              className={`h-full w-full bg-cover bg-center rounded-full `}
                              style={{
                                backgroundImage: `url(${imageUrlRef.current})`,
                              }}
                            />
                            <input
                              id="image-upload"
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageUpload}
                            />
                          </label>
                        )}
                        
                      </div>
                      <p className="text-left w-full pl-7 text-sm text-gray-800 dark:text-white"><span className="font-bold">formats</span> : jpeg,png,jpg,gif</p>
                      <p className="text-left w-full pl-7 text-sm text-gray-800 dark:text-white"><span className="font-bold">Max Size</span> : 1024MB</p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="dark:bg-boxdark bg-white mb-3 py-3 pl-7 rounded-lg shadow-md font-bold text-boxdark dark:text-white">User information</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  dark:bg-boxdark bg-white shadow-md py-10 px-3">
                      {/* Name */}
                      <div className="w-full">
                        <Label htmlFor="name" value="Name" />
                        <TextInput
                          id="name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter name"
                          required
                        />
                      </div>
                      {/* Email */}
                      <div className="w-full">
                        <Label htmlFor="email" value="Email" />
                        <TextInput
                          id="email"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your_email@example.com"
                          required
                        />
                      </div>
                      {/* Username */}
                      <div className="w-full">
                        <Label htmlFor="username" value="Username" />
                        <TextInput
                          id="username"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Enter username"
                        />
                      </div>
                      <div className="w-full">
                        <Label htmlFor="phone" value="Phone" />
                        <TextInput
                          id="phone"
                          name="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="0612-345678"
                        />
                      </div>
                      <div className="w-full">
                        <Label htmlFor="password" value="password" />
                        <TextInput
                          id="password"
                          name="password"
                          type="password"
                          min={8}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="password_confirmation"
                          value="Password Confirmation"
                        />
                        <TextInput
                          id="password_confirmation"
                          name="password_confirmation"
                          type="password"
                          min={8}
                          onChange={(e) => setPasswordC(e.target.value)}
                          placeholder="Confirm your password"
                        />
                      </div>
                      <div className="w-full col-span-2">
                        <Label
                          htmlFor="role"
                          value="Role"
                        />
                        <Select id="role" required onChange={(e) => setRole(e.target.value)}>
                          <option value=""></option>
                          {roles?.map((role, i) => (
                            
                            <option key={i} value={role.id}>
                              {role.name}
                            </option>
                          ))}
                          </Select>
                          
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-end gap-2 mt-3">
                  <button
                    title="create user"
                    className="px-4 py-2 rounded-md bg-blue-950 dark:bg-slate-500 dark:text-white text-white text-sm"
                    disabled={loading}
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </DefaultLayout>
      )}
    </>
  );
};

export default UsersPage;
