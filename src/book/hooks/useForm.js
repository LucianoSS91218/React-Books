import { useState, useEffect } from "react";

import { useBooks } from "../store zustand/Store";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    title: "",
    author: "",
    intro: "",
    review: "",
  });
  const [cover, setCover] = useState("");
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
      values.review === ""
    ) {
      return;
    }

    const newBook = {
      id: crypto.randomUUID(),
      title: values.title,
      author: values.author,
      cover: cover,
      completed: completed,
      intro: values.intro,
      review: values.review,
    };

    //it is optional whether your book is completed or not
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
    handleOnChangeFile,
    handleSubmit,
    values,
    cover,
    errors,
  };
};

export default useForm;
