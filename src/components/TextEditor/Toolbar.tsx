"use client";


import { FaAlignCenter, FaAlignLeft, FaAlignRight, FaBold, FaCode, FaItalic, FaList, FaListOl, FaStrikethrough, FaUpload } from "react-icons/fa6";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { Editor } from '@tiptap/react';
interface ToolBarProps {
  editor: Editor;
}
export default function ToolBar( {editor}   : ToolBarProps) {
  if (!editor) return null;
  const addImage = () => {
    const url = window.prompt("URL");
    if (url) {
      editor.chain().focus().run();
    }
  };

  const Options = [
    {
      icon: <LuHeading1 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      preesed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <LuHeading2 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      preesed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <LuHeading3 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      preesed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <FaBold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      preesed: editor.isActive("bold"),
    },
    {
      icon: <FaItalic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      preesed: editor.isActive("italic"),
    },
    {
      icon: <FaStrikethrough className="size-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      preesed: editor.isActive("strike"),
    },
    {
      icon: <FaAlignLeft className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      preesed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <FaAlignCenter className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      preesed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <FaAlignRight className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      preesed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <FaList className="size-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      preesed: editor.isActive("bulletList"),
    },
    {
      icon: <FaListOl className="size-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      preesed: editor.isActive("orderedList"),
    },
    {
      icon: <FaCode className="size-4" />,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      preesed: editor.isActive("code"),
    },
    {
      icon: <FaUpload className="size-4" />,
      onClick: () => addImage(),
      preesed: editor.isActive("image"),
    },
  ];

  return (
    <div className="flex gap-2 align-middle border !overflow-x-auto rounded-md p-1.5 mb-1 bg-slate-50 space-x-1 sticky  top-10 z-50 shadow-sm">
      {Options.map((option, i) => (
        <div
        className="border bg-gray-3 p-2 rounded-md text-center text-black cursor-pointer duration-100 hover:bg-gray-100"
          key={i}
          onClick={option.onClick}
        >
          {option.icon}
        </div>
      ))}
    </div>
  );
}