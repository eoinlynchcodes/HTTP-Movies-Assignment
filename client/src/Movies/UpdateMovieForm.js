import React, { useState } from "react";
import axios from 'axios';

export default function UpdateMovieForm() {

    const [ data, setData ] = useState({
        title: '',
        director: '',
        metascore: '',
        stars: '',
    }) 

    const onChange = event => {
        setData({
            name: event.target.name
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        axios.post(`http://localhost:5000/api/movies`, data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Title:</label>
        <input
          placeholder="Title:"
          name="title"
          onChange={event => onChange(event)}
        />

        <label>Director:</label>
        <input
          placeholder="Director:"
          name="director"
          onChange={event => onChange(event)}
        />

        <label>Metascore:</label>
        <input
          placeholder="Metascore:"
          name="metascore"
          onChange={event => onChange(event)}
        />

        <label>Stars:</label>
        <input
          placeholder="Stars:"
          name="stars"
          onChange={event => onChange(event)}
        />
        <button>Submit!</button>
      </form>
    </div>
  );
}
