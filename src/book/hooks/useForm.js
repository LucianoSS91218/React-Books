import { useState, useEffect } from "react";

import { useBooks } from "../store zustand/Store";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    title: "",
    author: "",
    intro: "",
    review: "",
    generos: {
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
    },
  });
  const [cover, setCover] = useState("");
  const [genres, setGenres] = useState(["all"]);
  const [completed, setCompleted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setValues({
      ...values,
      [name]: name === "completed" ? checked : value,
    });
    if (e.target.checked) {
      setCompleted(true);
    }
    setErrors(validate(values));
  };

  const handleChangeGenre = (e) => {
    const { value } = e.target;
    setGenre(value);
  };

  function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {

      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  const { createItem } = useBooks();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      values.title === "" ||
      values.author === "" ||
      values.intro === "" ||
      values.review === "" ||
      genres !== "all"
    ) {
      return;
    }

    const newBook = {
      id: crypto.randomUUID(),
      title: values.title,
      author: values.author,
      cover: cover,
      genres: genres,
      completed: completed,
      intro: values.intro,
      review: values.review,
    };

    if (completed === true || completed === false) {
      createItem(newBook);
      setIsSubmitting(true);
    }

  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [isSubmitting]);

  return {
    handleChange,
    handleChangeGenres,
    handleOnChangeFile,
    handleSubmit,
    values,
    cover,
    errors,
  };
};

export default useForm;

