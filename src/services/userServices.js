const registerUser = async (userData) => {
  // method for sending data to the server
  try {
    const response = await fetch("http://localhost:3001/api/auth/register", {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }); 

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const userData = { username, email, password };
//   const result = await registerUser(userData);
//   console.log(result);
// };

// export { handleSubmit };