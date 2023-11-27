// import { UrlImagePortalUTP } from "@/utils/testData";
import Link from "next/link";

export default function PostLayout({ children }) {
  return (
    <div>
      <div className=" overflow-auto">
        <div className="overflow-auto flex bg-indigo-100 gap-5 py-6 px-4 text-center border-t border-gray-400 pb-6">
          <Link
            className=" border-x-2 border-y-2 bg-rose-600 col-span-2 rounded hover:bg-rose-500   hover:text-white text-xs font-black font-serif px-3 box-border text-white w-52 flex flex-col shadow-sm shadow-red-200"
            href="/post/posts/architecture"
          >
            <div className=" my-auto">Arquitectura</div>
          </Link>
          <Link
            className=" border-x-2 border-y-2 bg-rose-600 col-span-2 rounded hover:bg-rose-500   hover:text-white text-xs  font-black font-serif px-3 py-2 box-border text-white w-52 flex flex-col shadow-sm shadow-red-200"
            href="/post/posts/civilEngineering"
          >
            <div className=" my-auto">Ingeniería civil</div>
          </Link>
          <Link
            className=" border-x-2 border-y-2 bg-rose-600 col-span-2 rounded hover:bg-rose-500   hover:text-white text-xs  font-black font-serif px-3 py-2 box-border text-white w-52 flex flex-col shadow-sm shadow-red-200"
            href="/post/posts/industrialEngineering"
          >
            <div className=" my-auto">Ingeniería industrial</div>
          </Link>
          <Link
            className=" border-x-2 border-y-2 bg-rose-600 col-span-2 rounded hover:bg-rose-500   hover:text-white text-xs  font-black font-serif px-3 py-2 box-border text-white w-52 flex flex-col shadow-sm shadow-red-200"
            href="/post/posts/systemsEngineering"
          >
            <div className=" my-auto">Ingeniería sistemas e informática</div>
          </Link>

          <div className=" grow flex justify-end">
            <Link
              className=" border-x-2 border-y-2 bg-rose-600 col-start-10 col-span-3 ounded hover:bg-rose-500   hover:text-white text-xs  font-black font-serif px-3 box-border text-white w-52 flex flex-col shadow-sm shadow-red-200 ml-40"
              href="/post/posts/all"
            >
              <div className=" my-auto">Todos</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex max-w-full px-4 overflow-auto justify-center">
        {/* <div className=" w-1/4 rounded-lg ml-2 h-fit overflow-auto max-md:hidden">
          <div className="  px-4 py-6 grid grid-cols-1 gap-y-14  mx-auto w-fit items-center ">
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-ibk.png"
              alt="Failed to load"
              className=" scale-125 mx-auto pb-1 px-2"
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-promart.png"
              alt="Failed to load"
              className=" scale-125 mx-auto pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-cineplanet.png"
              alt="Failed to load"
              className=" scale-110 mx-auto pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-makro.png"
              alt="Failed to load"
              className=" scale-125 mx-auto  pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-plazavea.png"
              alt="Failed to load"
              className=" scale-125 mx-auto rounded-lg  pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-vivanda.png"
              alt="Failed to load"
              className=" scale-110 mx-auto pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-tinka.png"
              alt="Failed to load"
              className=" scale-125 mx-auto pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-oechsle.png"
              alt="Failed to load"
              className=" scale-125 mx-auto pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-inkafarma.png"
              alt="Failed to load"
              className=" scale-125 mx-auto rounded-lg pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-mifarma.png"
              alt="Failed to load"
              className=" scale-125 mx-auto rounded-lg pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-realplaza.png"
              alt="Failed to load"
              className=" scale-125 mx-auto rounded-md pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-interseguro.png"
              alt="Failed to load"
              className=" scale-125 mx-auto pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-inretail.png"
              alt="Failed to load"
              className=" scale-125 mx-auto pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-inteligo.png"
              alt="Failed to load"
              className=" scale-125 mx-auto pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-interfondos.png"
              alt="Failed to load"
              className=" scale-125 mx-auto pb-1 px-2 "
            />
            <img
              src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-innovaschool.png"
              alt="Failed to load"
              className=" scale-125 mx-auto pb-1 px-2 "
            />
          </div>
        </div> */}
        <div className=" w-1/2 p-4 pt-0 overflow-auto max-md:w-auto">
          {children}
        </div>
        {/* <div className=" w-1/4 h-fit px-4 py-6 grid grid-col-1 gap-y-12 my-4 overflow-auto max-md:hidden">
          <img src={UrlImagePortalUTP} alt="" className=" mx-auto" />
          <img
            src="https://instructure-uploads.s3.amazonaws.com/account_94830000000000001/attachments/13474277/utp-canvas.png"
            alt=""
            className=" mx-auto"
          />
          <img
            src="https://info.utp.edu.pe/static/media/logo-small.b45b7454.svg"
            alt=""
            className=" mx-auto"
          />
      
        </div> */}
      </div>
    </div>
  );
}
