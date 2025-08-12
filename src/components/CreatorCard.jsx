import { Link } from "react-router-dom"

export default function CreatorCard({ creator }) {
  return (
    <Link to={`/view/${creator.id}`} className="card">
      <article>
        {creator.imgURL && (
          <img
            src={creator.imgURL}
            alt={creator.name}
            className="w-full h-64 object-cover rounded mb-4"
          />
        )}
        <header>
          <h2>{creator.name}</h2>
        </header>
        <p>{creator.description}</p>
        {creator.url && (
          <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contrast"
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              marginTop: "1rem",
              textAlign: "center",
              borderRadius: "0.5rem",
              backgroundColor: "#007BFF",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Visit Creator
          </a>
        )}
      </article>
    </Link>
  )
}
