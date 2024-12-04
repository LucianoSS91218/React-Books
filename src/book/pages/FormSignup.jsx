import validate from "../components/form/validateInfo";
import useForm from "../hooks/useForm";
import Layout from "../components/layout";
import { useState } from "react";
import FormSuccess from "../components/form/FormSuccess";

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
              <div style={inputStyles.title}>Cover</div>
              <input type="file" name="cover" onChange={handleOnChangeFile} />
              <div>{!!cover ? <img src={cover} width="200" /> : ""}</div>
            </div>

            <div style={inputStyles.container}>
              <div style={inputStyles.title}>intro</div>
              <input
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
            <button
              type="submit"
              onClick={handleSubmit}
              value="Register book"
              style={{
                padding: "15px 20px",
                minWidth: "200px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#1e9638",
                color: "white",
                fontWeigth: "bolder",
                fontSize: "18px",
              }}
            >
              Register
            </button>
          </form>
        ) : (
          <FormSuccess />
        )}
      </>
    </Layout>
  );
};

export default FormSignup;

