import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { supabase } from "../client"

export default function ViewCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase.from("creators").select("*").eq("id", id).single()
      if (error) console.error(error)
      else setCreator(data)
    }
    fetchCreator()
  }, [id])

  async function handleDelete() {
    if (!window.confirm("Are you sure you want to delete this creator?")) return
    const { error } = await supabase.from("creators").delete().eq("id", id)
    if (error) console.error(error)
    else navigate("/")
  }

  if (!creator) return <p className="p-6">Loading...</p>

  return (
    <article className="container">
      <div className="card">
        {creator.imgURL && (
          <img
            src={creator.imgURL}
            alt={creator.name}
            className="w-full h-64 object-cover rounded mb-4"
          />
        )}
        <header className="text-center">
          <h1>{creator.name}</h1>
        </header>
        <p className="text-center">{creator.description}</p>
        {creator.url && (
          <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary text-center"
          >
            Visit Creator
          </a>
        )}
        <footer className="d-flex justify-center gap-4 mt-4">
          <Link
            to={`/edit/${creator.id}`}
            role="button"
            className="contrast"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            role="button"
            className="contrast"
          >
            Delete
          </button>
          <Link
            to="/"
            role="button"
            className="contrast"
          >
            Back
          </Link>
        </footer>
      </div>
    </article>
  )
}
