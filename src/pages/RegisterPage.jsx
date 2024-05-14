import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Register.scss";


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    // Check if files are present and if it's an array
    const profileImage = files && files.length ? files[0] : null;
  
    setFormData({
      ...formData,
      [name]: name === "profileImage" ? profileImage : value,
    });
  };
  

  const [passwordMatch, setPasswordMatch] = useState(true)

  useEffect(() => {
    setPasswordMatch(formData.password === formData.confirmPassword || formData.confirmPassword === "")
  })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
  
    try {
      // Assuming formData is defined and populated elsewhere in the code
      console.log(formData);
  
      const register_form = new FormData();
  
      // Iterate over formData and append its key-value pairs to register_form
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          register_form.append(key, formData[key]);
        }
      }
  
      // Make a POST request to the registration endpoint
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        body: register_form,
      });
  
      // Check if the response is successful
      if (response.ok) {
        // Assuming navigate function is defined and used for navigation
        navigate("/login");
      } else {
        // Handle errors by logging the entire response object
        console.error("Registration failed:", response);
      }
    } catch (err) {
      // Handle any errors that occur during registration
      console.error("Registration failed:", err);
    }
  };
  
  

  return (
     <div>
    <div className="register">
      <div className="register_content">
        <form className="register_content_form" onSubmit={handleSubmit}>
          <input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            required
          />

          {!passwordMatch && (
            <p style={{ color: "red" }}>Passwords are not matched!</p>
          )}

          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}
            required
          />
          <label htmlFor="image">
            <img src= "./assets/addImage.png" alt="add profile photo" />
            <p>Upload Your Photo</p>
          </label>

          {formData.profileImage && (
            <img
            src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          )}
          <button type="submit" disabled={!passwordMatch}>REGISTER</button>
        </form>
        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
    </div>
  
  );
};

export default RegisterPage;