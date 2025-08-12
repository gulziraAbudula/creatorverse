import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { supabase } from "../client"

export default function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    url: "",
    imgURL: "",
    description: "",
  })

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase.from("creators").select("*").eq("id", id).single()
      if (error) {
        alert("Error loading creator: " + error.message)
      } else if (data) {
        setForm({
          name: data.name || "",
          url: data.url || "",
          imgURL: data.imgURL || "",
          description: data.description || "",
        })
      }
    }
    fetchCreator()
  }, [id])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const { error } = await supabase.from("creators").update(form).eq("id", id)
    if (error) {
      alert("Error updating creator: " + error.message)
    } else {
      navigate(`/view/${id}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>Edit Creator</h1>
      <fieldset>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter the creator's name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </fieldset>
      <fieldset>
        <label htmlFor="url">Website URL</label>
        <input
          type="url"
          id="url"
          name="url"
          placeholder="Enter the creator's website or social media URL"
          value={form.url}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="imgURL">Image URL</label>
        <input
          type="url"
          id="imgURL"
          name="imgURL"
          placeholder="Enter the creator's image URL"
          value={form.imgURL}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter a description of the creator"
          value={form.description}
          onChange={handleChange}
          required
          rows={5}
        ></textarea>
      </fieldset>
      <button type="submit" className="contrast">
        Update Creator
      </button>
    </form>
  )
}
