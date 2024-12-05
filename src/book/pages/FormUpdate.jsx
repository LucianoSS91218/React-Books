import validate from "../components/form/validateInfo";

import { useState, useEffect } from "react";
import { useBooks } from "../store zustand/Store";
import "./Form.css";
const inputStyles = {
  formContainer: {
    width: "400px",
    margin: "0 auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    margin: "15px 0",
  },
  title: {
    fontSize: "16px",
    textAlign: "left",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    fontSize: "16px",
  },
  elerror: {
    color: "red",
    margin: 0,
    padding: 0,
  },
  submit: {
    padding: "15px 20px",
    minWidth: "200px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#1e9638",
    color: "white",
    fontWeigth: "bolder",
    fontSize: "18px",
    cursor: "pointer",
  },
};

const FormUpdate = ({
  id,
  title,
  author,
  cover,
  completed,
  intro,
  review,
  isEditing,
  setIsEditing,
}) => {
  const [values, setValues] = useState({
    title: title,
    author: author,
    cover: cover,
    completed: completed,
    intro: intro,
    review: review,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setValues({
      ...values,
      [name]: name === "completed" ? checked : value,
    });

    if (e.target.checked) {
      values.completed = true;
    }
    setErrors(validate(values));
  };

  function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {

      values.cover = reader.result.toString();
    };
    reader.readAsDataURL(file);
  }

  const { updateItem } = useBooks();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      values.title === "" ||
      values.author === "" ||
      values.intro === "" ||
      values.review === ""
    ) {
      return;
    }

    updateItem({
      id: id,
      title: values.title,
      author: values.author,
      completed: values.completed,
      cover: values.cover,
      intro: values.intro,
      review: values.review,
    });

    setIsEditing("");
  };

  useEffect(() => {}, [isEditing]);

  return (
    <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
      <div style={inputStyles.container}>
        <div style={inputStyles.title}>Title</div>
        <input
          style={inputStyles.input}
          type="text"
          name="title"
          onChange={handleChange}
          value={values.title}
        />
        {errors.title && <p style={inputStyles.elerror}>{errors.title}</p>}
      </div>
      <div style={inputStyles.container}>
        <div style={inputStyles.title}>Author</div>
        <input
          style={inputStyles.input}
          type="text"
          name="author"
          onChange={handleChange}
          value={values.author}
        />
        {errors.author && <p style={inputStyles.elerror}>{errors.author}</p>}
      </div>

      <div style={inputStyles.container}>
        <div style={inputStyles.title}>Completed</div>
        <input
          style={inputStyles.input}
          type="checkbox"
          name="completed"
          onChange={handleChange}
          value={values.completed}
          checked={values.completed}
        />
      </div>

      <div style={inputStyles.container}>
        <div style={inputStyles.title}>Cover</div>
        <input type="file" name="cover" onChange={handleOnChangeFile} />
        <div className="padreimg">
          {!!values.cover ? <img src={values.cover} width="200" /> : ""}
        </div>
      </div>

      <div style={inputStyles.container}>
        <div style={inputStyles.title}>intro</div>
        <input
          style={inputStyles.input}
          className="intro"
          type="text"
          name="intro"
          onChange={handleChange}
          value={values.intro}
        />
        {errors.intro && <p style={inputStyles.elerror}>{errors.intro}</p>}
      </div>

      <div style={inputStyles.container}>
        <div style={inputStyles.title}>review</div>
        <input
          className="review"
          style={inputStyles.input}
          type="text"
          name="review"
          onChange={handleChange}
          value={values.review}
        />
        {errors.review && <p style={inputStyles.elerror}>{errors.review}</p>}
      </div>
      <div className="update">
        <button
          className="submitt"
          type="submit"
          onClick={handleSubmit}
          value="Update book"
          style={inputStyles.submit}
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default FormUpdate;
