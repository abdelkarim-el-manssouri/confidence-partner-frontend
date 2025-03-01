/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import '../../blogs.css';
import { useEditor, EditorContent, Editor  } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import TextAlign from '@tiptap/extension-text-align';
import ToolBar from "@/components/TextEditor/Toolbar";
import React, { useState, useRef, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import axios, { AxiosError } from "axios";
import { useParams, useRouter } from 'next/navigation'
import { BlogOne } from "@/interfaces/blogs";
import LoaderSP from "@/components/common/Loader";
const EditBlog = () => {

    const [loadingP, setLoadingP] = useState<boolean>(true);
  
    useEffect(() => {
      setTimeout(() => setLoadingP(false), 1000);
    }, []);
  const params = useParams<{ slug: string }>()
  const router = useRouter();

  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-3",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-3",
        },
      }),
      // Highlight,
      // Image,
    ],
    content: 'New Blog',
    editorProps: {
      attributes: {
        class: "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3",
      },
    },

  }) as Editor;

  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [published, setPublished] = useState<boolean>(false);
  const imageUrlRef = useRef<string>('');
  
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

  const fetchBlogs = async () => {
    try {
      const authToken = Cookies.get("auth_token");
    if (!authToken) {
      window.location.reload();
      return;
    }
      const response  = await axios.get<BlogOne>(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.slug}`, {
        headers: {
          "Authorization": `Bearer ${authToken}`,
        },
      });
      console.log('response', response);
      
      if (editor) {
        editor.commands.setContent(response.data.data.content);
      }
      imageUrlRef.current = `${process.env.NEXT_PUBLIC_STORAGE}/${response.data.data?.thumbnail}`;
      setTitle(response.data.data?.title);
      
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, [editor]);
  const notify = (e : string) => toast.error(e, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:  'colored',
    })
  const notifySucess = (e : string) => toast.success(e, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:  'colored',
    })

    
  const publiching = async (e : React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPublished(true);

    const formData = new FormData();
    if(!title ) {
      notify('Title is required');
      setPublished(false);
      return;
    }
    if(!image && !imageUrlRef.current ) {
      notify('Image is required');
      setPublished(false);
      return;
    }else {
      formData.append("thumbnail", image as Blob);
      
    }
    
    // ? i use here formData because the image file
    
    
    formData.append("_method", 'PUT');
    formData.append("title", title);
    formData.append("content", editor?.getHTML() || "");
    formData.append("roles", sessionStorage.getItem("roles") as string);
    formData.append("auteur_id", JSON.parse(sessionStorage.getItem("user") as string)?.id);
    formData.append("permissions", sessionStorage.getItem("permissions") as string);

    // window.addEventListener("beforeunload", (ev) => 
    //   {  
    //       ev.preventDefault();
    //       return ev.returnValue = 'Are you sure you want to close?';
    //   });

    const authToken = Cookies.get("auth_token");
    if (!authToken) {
      return;
    }

    try {
      const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.slug}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${authToken}`,
        },
      });
      console.log('Response : ', response);
      
      if (response.status === 200) {
        notifySucess("Blog published successfully");
        router.push(`${process.env.NEXT_PUBLIC_ADMIN_URL}/blogs/${response?.data?.data?.id}/show`);
      } else if(response.status === 422) {
        setPublished(false);
        console.error("Error publishing blog", response.data);
      }

    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axEr = err as AxiosError;

        if (axEr.response?.status === 422) {
          setPublished(false);
          notify("Error publishing blog, please fill all required fields");
        } else {
          notify("Error publishing blog");
          setPublished(false);
        }
      }
      // console.error("Error publishing blog", err);
      // notify("Error publishing blog");
      // setPublished(false);
    }
  }

  if (!editor) {
    return null;
  }

  return (
    <>
    {loadingP ? <LoaderSP /> :
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName=" Blogs / New" />
        <ToastContainer />
        <form onSubmit={publiching}>

        
          {/* Publish button */}
          <div className="flex justify-end mb-4">
            <button className="rounded-md text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-200 disabled:hover:bg-blue-100 py-2 px-6" disabled={published}>
              Publish
            </button>
          </div>

          {/* Image Upload Section */}
          <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer w-full mb-5">
            {!image ? (
              imageUrlRef.current ? (
                

                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center h-full w-full text-gray-500 hover:text-gray-700">
                  <div
                  className={`h-full w-full bg-cover bg-center rounded-lg `}
                  style={{ backgroundImage: `url(${imageUrlRef.current})` }}
                />
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
                ) : 
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center h-full w-full text-gray-500 hover:text-gray-700">
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
                  className="flex flex-col items-center justify-center h-full w-full text-gray-500 hover:text-gray-700">
                  <div
                  className={`h-full w-full bg-cover bg-center rounded-lg `}
                  style={{ backgroundImage: `url(${imageUrlRef.current})` }}
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

          {/* Title Section */}
          <input
            type="text"
            placeholder="Enter Blog Title"
            className="border-2 border-gray-300 rounded-md py-2 px-3 w-full mb-5 focus:outline-none focus:border-none text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Editor Section */}

          <ToolBar editor={editor} />
          <div className="no-tailwind">
            <EditorContent editor={editor} className="min-h-100 bg-white rounded-md mt-6 p-3 text-black font-normal border shadow-3" />
          </div>
        </form>
      </div>
    </DefaultLayout>}
    </>
  );
};

export default EditBlog;
