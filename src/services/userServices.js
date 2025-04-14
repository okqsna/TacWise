
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
      // sessionStorage.setItem("user", JSON.stringify(data.user)); to be reviewed
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
      // sessionStorage.setItem("user", JSON.stringify(data.user)); to be reviewed
      window.location.href = "/"; // redirect to home page
    }
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const getUserByToken = async (token) => {
  // method for sending data to the server
  try {
    const response = await fetch(
      `http://localhost:3001/api/logged/user?token=${token}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 400) {
      sessionStorage.clear();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export { registerUser, loginUser, getUserByToken };
