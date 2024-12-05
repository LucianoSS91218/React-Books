import SuccessIcon from "../../assets/success-icon.png";
const successStyles = {
  scontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  },
  container: {
    width: "150px",
    height: "200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "50px",
  },
  h1: {
    fontSize: "33px",
    marginTop: "80px",
  },
  image: {
    width: "200px",
    height: "150px",
  },
};

const FormSuccess = () => {
  return (
    <div style={successStyles.scontainer}>
      <div style={successStyles.container}>
        <h1 style={successStyles.h1}>
          You have created your book succesfully!
        </h1>
        <img
          style={successStyles.image}
          src={SuccessIcon}
          alt="success-image"
        />
      </div>
    </div>
  );
};

export default FormSuccess;
