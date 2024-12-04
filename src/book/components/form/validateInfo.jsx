export default function validateInfo(values) {
  let errors = {};
  // I don't know why I couldn't validate here empty string
  // I had to do it in handleSubmit of useForm.js
  if (!/^[A-Za-z]+/.test(values.title.trim())) {
    errors.title = "Enter a valid title";
  }

  if (values.title.length < 6) {
    errors.title = "Title must contain at least 6 characters";
  }

  if (values.title.length > 22) {
    errors.title = "Title must contain max 22 characters";
  }

  if (!/^[A-Za-z]+/.test(values.author.trim())) {
    errors.author = "Enter a valid author";
  }

  if (values.author.length < 7) {
    errors.author = "Author must contain at least 8 characters";
  }

  if (values.author.length > 35) {
    errors.author = "Author must contain max 35 characters";
  }

  if (!/^[A-Za-z]+/.test(values.intro)) {
    errors.intro = "Enter a valid intro";
  }

  if (values.intro.length < 120) {
    errors.intro = "Intro must contain at least 120 characters";
  }

  if (values.intro.length > 250) {
    errors.intro = "Intro must contain max 250 characters";
  }

  if (!/^[A-Za-z]+/.test(values.review.trim())) {
    errors.review = "Enter a valid review";
  }

  if (values.review.length < 200) {
    errors.review = "Review must contain at least 200 characters";
  }

  if (values.review.length > 1251) {
    errors.review = "Review must contain max 1251 characters";
  }

  return errors;
}
