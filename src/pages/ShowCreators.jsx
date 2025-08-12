import { useEffect, useState } from "react"
import { supabase } from "../client"
import CreatorCard from "../components/CreatorCard"
import { Link } from "react-router-dom"

export default function ShowCreators() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from("creators").select("*")
      if (error) console.error(error)
      else setCreators(data)
    }
    fetchCreators()
  }, [])

  return (
    <div className="container">
      <header className="d-flex justify-between align-center">
        <h1>Creators</h1>
        <Link to="/new" role="button" className="contrast">
          + Add Creator
        </Link>
      </header>
      <hr />
      {creators.length === 0 ? (
        <p className="text-center">No creators found. Add a new creator to get started!</p>
      ) : (
        <div className="grid">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  )
}