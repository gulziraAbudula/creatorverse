import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../client"

export default function AddCreator() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    url: "",
    imgURL: "",
    description: "",
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const { error } = await supabase.from("creators").insert([form])
    if (error) {
      alert("Error adding creator: " + error.message)
    } else {
      navigate("/")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>Add a New Creator</h1>
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
        Add Creator
      </button>
    </form>
  )
}
