import { useState, useEffect } from "react";

import { useBooks } from "../store zustand/Store";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    title: "",
    author: "",
    intro: "",
    review: "",
    completed: false,
  });
  const [cover, setCover] = useState("");
  const [genre, setGenre] = useState(["all"]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setValues({
      ...values,
      [name]: name === "completed" ? checked : value,
    });

    setErrors(validate(values));
  };

  const handleChangeGenres = (e) => {
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
      genre === "all"
    ) {
      return;
    }

    const newBook = {
      id: crypto.randomUUID(),
      title: values.title,
      author: values.author,
      cover: cover,
      genres: [genre],
      completed: values.completed,
      intro: values.intro,
      review: values.review,
    };

    //it is optional whether your book is completed or not
    if (values.completed === true || values.completed === false) {
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
    genre,
    cover,
    errors,
  };
};

export default useForm;
