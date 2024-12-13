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
  textarea: {
    padding: "20px",
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
    handleChangeGenres,
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
  console.log(genre);
  const genreFilterId = useId();

  const generos = {
    all: "Todos",
    arte: "Arte",
    astrologia: "Astrologia",
    autoayuda: "Autoayuda",
    autobiografico: "Autobiografico",
    aventuras: "Aventuras",
    belico: "Belico",
    biologia: "Biologia",
    clasico: "Clasico",
    "ciencia ficcion": "Ciencia Ficcion",
    "ciencias naturales": "Ciencias Naturales",
    cine: "Cine",
    cuentos: "Cuentos",
    critica: "Critica",
    cronicas: "Cronicas",
    deportes: "Deportes",
    diccionarios: "Diccionarios",
    didactico: "Didactico",
    divulgacion: "Divulgacion",
    drama: "Drama",
    erotico: "Erotico",
    espionaje: "Espionaje",
    fantasia: "Fantasia",
    ficcion: "Ficcion",
    filosofia: "Filosofia",
    fisica: "Fisica",
    gastronomia: "Gastronomia",
    geografia: "Geografia",
    historia: "Historia",
    humor: "Humor",
    idiomas: "Idiomas",
    infantil: "Infantil",
    informatica: "Informatica",
    intriga: "Intriga",
    magia: "Magia",
    "manuales y cursos": "Manuales y Cursos",
    matematicas: "Matematicas",
    medicina: "Medicina",
    medieval: "Medieval",
    misterio: "Misterio",
    mitos: "Mitos",
    musica: "Musica",
    negocios: "Negocios",
    novela: "Novela",
    "novela negra": "Novela Negra",
    otros: "Otros",
    periodismo: "Periodismo",
    poesia: "Poesia",
    policial: "Policial",
    politica: "Politica",
    psicologia: "Psicologia",
    relato: "Relato",
    quimica: "Quimica",
    "salud y bienestar": "Salud y Bienestar",
    satira: "Satira",
    sexualidad: "Sexualidad",
    sociologia: "Sociologia",
    tecnologia: "Tecnologia",
    terror: "Terror",
    thriller: "Thriller",
  };

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
                onChange={handleChangeGenres}
                name="generos"
              >
                {Object.entries(generos).map(([key, literal]) => (
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
              <textarea
                className="intro"
                style={inputStyles.textarea}
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
              <textarea
                className="review"
                style={inputStyles.textarea}
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
