import React, { useState } from "react";


export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [isPending, setIsPending] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then((res) => {
      if (res.ok) {
        window.location.href = "/";
      } else {
        console.log(res.statusText);
      }
      console.log("New blog added");
      setIsPending(false);
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
        <label>Blog Body:</label>
        <textarea
          required
          className="input-field"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          className="input-field"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && (
          <button type="submit" className="submit-button">
            Add Blog
          </button>
        )}
        { isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}
