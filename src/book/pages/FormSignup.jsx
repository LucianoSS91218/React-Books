import validate from "../components/form/validateInfo";
import useForm from "../hooks/useForm";
import Layout from "../components/layout";
import { useState } from "react";
import { useId } from "react";
import FormSuccess from "../components/form/FormSuccess";
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
    fontSize: "20px",
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
};

const FormSignup = ({ submitForm }) => {
  const {
    handleChange,
    handleChangeGenre,
    handleOnChangeFile,
    handleSubmit,
    values,
    cover,
    errors,
  } = useForm(submitForm, validate);

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const genreFilterId = useId();

  return (
    <Layout>
      <>
        {!isSubmitted ? (
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
              {errors.title && (
                <p style={inputStyles.elerror}>{errors.title}</p>
              )}
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
              {errors.author && (
                <p style={inputStyles.elerror}>{errors.author}</p>
              )}
            </div>

            <div style={inputStyles.container}>
              <div style={inputStyles.title}>Completed</div>
              <input
                style={inputStyles.input}
                type="checkbox"
                name="completed"
                onChange={handleChange}
                value={values.completed}
              />
            </div>

            <div style={inputStyles.container}>
              <label style={inputStyles.title}>Genero</label>
              <select
                id={genreFilterId}
                onChange={handleChangeGenre}
                name="generos"
              >
                {Object.entries(values.generos).map(([key, literal]) => (
                  <option key={key} value={key}>
                    {literal}
                  </option>
                ))}
              </select>
            </div>

            <div style={inputStyles.container}>
              <div style={inputStyles.title}>Cover</div>
              <input type="file" name="cover" onChange={handleOnChangeFile} />
              <div>{!!cover ? <img src={cover} width="200" /> : ""}</div>
            </div>

            <div style={inputStyles.container}>
              <div style={inputStyles.title}>intro</div>
              <input
                className="intro"
                style={inputStyles.input}
                type="text"
                name="intro"
                onChange={handleChange}
                value={values.intro}
              />
              {errors.intro && (
                <p style={inputStyles.elerror}>{errors.intro}</p>
              )}
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
              {errors.review && (
                <p style={inputStyles.elerror}>{errors.review}</p>
              )}
            </div>
            <div className="register">
              <button
                className="submitt"
                type="submit"
                onClick={handleSubmit}
                value="Register book"
              >
                Register
              </button>
            </div>
          </form>
        ) : (
          <FormSuccess />
        )}
      </>
    </Layout>
  );
};

export default FormSignup;
