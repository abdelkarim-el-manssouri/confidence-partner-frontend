'use client';
/* eslint-disable react-hooks/exhaustive-deps */

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import '../../blogs.css';
import { useEditor, Editor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import TextAlign from '@tiptap/extension-text-align';
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
// import { Blog } from "@/interfaces/blogs";
import { useParams } from 'next/navigation'
import { Auteur, Blog, BlogOne } from "@/interfaces/blogs";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/common/Loader";

const OneBlog = () => {
  const params = useParams<{ slug: string }>()
  
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
    // content: 'New Blog',
    editorProps: {
      attributes: {
        class: "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3",
      },
    },

  }) as Editor;

  // const [image, setImage] = useState<File | null>(null);
  const [imagePath, setImagepath] = useState<string | null>(null);
  const [createdBy, setcreatedBy] = useState<Auteur>();
  const [blog, setBlog] = useState<Blog>();
    const [loadingP, setLoadingP] = useState<boolean>(true);
  
    useEffect(() => {
      setTimeout(() => setLoadingP(false), 1000);
    }, []);
  // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setImage(file);
  //     setImagepath('');
  //   }
  // };


    
 // Default to 10 items per page
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
        setBlog(response.data.data);
        setImagepath(response.data.data?.thumbnail);
        setcreatedBy(response.data.data?.auteur);
        
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
      }
    };
    useEffect(() => {
      fetchBlogs();
    }, [editor]);


  if (!editor) {
    return null;
  }

  return (
    <>
    {loadingP ? <Loader /> : <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName=" Blogs / Show" />
        <h1 className="text-center text-black-2 dark:text-white font-bold text-3xl">{blog?.title}</h1>

          <div className="flex justify-center items-center my-4">
            <Link href='#'>
              <div className="flex items-center gap-3">
                <Image src={`${process.env.NEXT_PUBLIC_STORAGE}/${createdBy?.image}`} quality={100} width={47} height={45} className="rounded-full !w-11 !h-11" alt="image" />
                <div className="ml-2 font-medium text-base text-black dark:text-white flex flex-col">
                  <span>{createdBy?.name}</span>
                  <span className="text-sm">{blog?.created_at?.substring(0, 10)?.replaceAll('-', '/')} {( (new Date((blog?.updated_at || '')).getTime() - new Date((blog?.created_at || '')).getTime()) / (1000 * 3600 * 24)) > 1 ? `Updated ${blog?.updated_at?.substring(0, 10)?.replaceAll('-', '/')}` : ''}
                  </span>

                </div>

              </div>
            </Link>
          </div>
        <div className="flex items-center justify-center w-full mb-5">
            {imagePath ? <Image src={`${process.env.NEXT_PUBLIC_STORAGE}/${imagePath}`} quality={100} className="rounded-md" alt="thumbnail" width={500} height={200}  /> : ''}
          </div>

          <div className="no-tailwind">

            <EditorContent editor={editor} contentEditable={false} className={`min-h-100 ${false ? 'bg-white text-black' : 'pointer-events-none bg-transparent dark:text-white text-black-2'}  rounded-md mt-6 p-3  font-normal`} />
            
          </div>
      </div>
    </DefaultLayout>}
    </>
  );
};

export default OneBlog;
