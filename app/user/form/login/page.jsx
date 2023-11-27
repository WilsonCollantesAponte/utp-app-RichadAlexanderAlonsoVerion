"use client";

import Link from "next/link";
import { useState } from "react";
import { MoonLoader } from "react-spinners";

export default function Login() {
  if (typeof window !== "undefined") {
    if (localStorage.idUser) {
      // location.replace("/post/posts/all");
    }
  }

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  function handleData(event) {
    const { name, value } = event.target;
    // data[name] = value;
    setData({ ...data, [name]: value });
    console.log({ ...data, [name]: value });
  }

  async function handleSubmit() {
    setLoading(true);
    setNotFound(false);
    const user = await fetch(
      `/user/form/login/api?email=${data.email.trim()}&password=${data.password.trim()}`
    )
      .then((r) => r.json())
      .catch(() => {
        return undefined;
      });
    console.log(user);
    if (user) {
      // const userJSON = await user.json();

      if (typeof window !== "undefined") {
        localStorage.setItem("idUser", user.id);
        localStorage.setItem("name", user.name);
        localStorage.setItem("surname", user.surname);
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);
        localStorage.setItem("headquarter", user.headquarter);
        localStorage.setItem("cycle", user.cycle);
        localStorage.setItem("carrer", user.carrer);

        localStorage.setItem("about", user.Access.about);
        localStorage.setItem("posts", user.Access.posts);
        localStorage.setItem("dashboard", user.Access.dashboard);
        localStorage.setItem("dashboardUsers", user.Access.dashboardUsers);
        localStorage.setItem("dashboardPosts", user.Access.dashboardPosts);

        // location.replace(`/user/${user.id}`);
        location.replace(`/post/posts/all`);
      }
    } else {
      setLoading(false);
      setNotFound(true);
    }
  }
  return (
    <div className=" bg-blue-100/25 w-screen">
      <div className="mx-auto  px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="  mx-auto  max-w-2xl bg-white rounded-md p-11">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="border-b border-gray-900/10 pb-12 ">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Ingresar
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Ingresa con un correo y contraseña
              </p>
              <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 ">
                <div className=" col-span-4">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Correo
                  </label>
                  <div className=" mt-2">
                    <input
                      onChange={handleData}
                      value={data.email}
                      type="text"
                      name="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className=" col-span-4 ">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                  </label>
                  <div className=" mt-2">
                    <input
                      onChange={handleData}
                      value={data.password}
                      type="text"
                      name="password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {!loading ? (
              <div className=" flex flex-col items-end gap-y-4 mt-6">
                <div className="flex gap-x-3">
                  <Link
                    className=" font-semibold text-sm text-gray-800 py-2"
                    href="/post/posts/all"
                  >
                    Cancelar
                  </Link>

                  <button
                    className="text-right w-fit rounded bg-rose-600 hover:bg-rose-500 px-3 py-2 font-semibold text-sm text-white"
                    onClick={handleSubmit}
                  >
                    Ingresar
                  </button>
                </div>
                {/* <button className="text-right w-fit rounded bg-indigo-600 hover:bg-indigo-500 px-3 py-2 font-semibold text-sm text-white">
                  Login with google
                </button> */}
                {notFound ? (
                  <h3 className=" text-red-600 font-medium text-sm">
                    El usuario no existe
                  </h3>
                ) : null}
              </div>
            ) : (
              <div className=" flex justify-end mt-6 py-2">
                <MoonLoader size={56} color="#4F46E5" />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
