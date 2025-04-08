const registerUser = async (userData) => {
  // method for sending data to the server
  try {
    const response = await fetch("http://localhost:3001/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }); 

    const data = await response.json();
    if (data.token) {
      sessionStorage.setItem("token", data.token);
      window.location.href = "/"; // redirect to home page
    }

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const loginUser = async (userData) => {
  // method for sending data to the server
  try {
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data.token) {
      sessionStorage.setItem("token", data.token);
      window.location.href = "/"; // redirect to home page
    }
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export { registerUser, loginUser };