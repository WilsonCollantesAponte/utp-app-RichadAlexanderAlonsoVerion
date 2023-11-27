"use client";

import Link from "next/link";
// const idUser =
//   typeof window !== "undefined" ? localStorage.getItem("idUser") : "";

export default function DynamicPart({ idUser }) {
  console.log("this ", idUser);
  return (
    <>
      {!idUser ? (
        <Link
          className=" bg-red-600 rounded  text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
          href="/user/form/signIn"
        >
          Sign in
        </Link>
      ) : (
        <Link
          className=" bg-red-600 rounded  text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
          href="/post/posts/all"
        >
          Dashboard
        </Link>
      )}

      {!true ? (
        <Link
          className=" bg-red-600 rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
          // href="https://www.instagram.com/reels/CwYDETrqej3/"
          href="/user/form/login"
        >
          login
        </Link>
      ) : (
        <button
          className=" bg-red-600 rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
          onClick={() => {
            localStorage.clear();
            location.replace("/post/posts/all");
          }}
        >
          LogOut
        </button>
      )}
    </>
  );
}
