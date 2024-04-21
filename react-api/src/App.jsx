import React, { useLayoutEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useLayoutEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setData(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <div>
      {data.length != 0 &&
        data.map((e, i) => {
          return (
            <div key={i}>
              <h3>{e.title}</h3>
              <div style={{ display: "flex", width: "100%", gap: "20px" }}>
                <img src={e.imageLinks.thumbnail} alt="" width={"200px"} />
                <p>{e.description}</p>
              </div>
              <p style={{fontSize: "18px",opacity:"0.8",fontStyle: "italic"}}>
                {e.authors.map((ele, ind) => {
                  return <span>{ele}{ind != e.authors.length-1 && <span> , </span>}</span>;
                })}
              </p>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default App;
