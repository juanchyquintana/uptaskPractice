import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
const SideBar = () => {

  const { auth } = useAuth();
  return (
    <aside className="md:w-1/3 lg:w-1/5 xl:1/& px-5 py-10">
      <p className="text-xl font-bold">Hola: {auth.nombre} </p>

      <Link
        to="crear-proyecto"
        className="bg-sky-600 w-full p-3 text-white font-bold block mt-5 text-center rounded-lg"
      >Nuevo Proyecto</Link>
    </aside>
  )
}

export default SideBar
