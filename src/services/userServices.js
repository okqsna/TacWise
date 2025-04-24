
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


const setCards = async ( id, n, mode) => {
  // method for sending data to the server
  const token = sessionStorage.getItem("token");
  try {
    const response = await fetch(
      `http://localhost:3001/api/logged/learning?token=${token}&id=${id}&n=${n}&mode=${mode}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const learnedCard = async (module_id, id) => {
  // method for sending data to the server
  const token = sessionStorage.getItem("token");
  const request_data = {
    'token': token,
    'module': module_id,
    'card': id
  }
  try {
    const response = await fetch(
      `http://localhost:3001/api/logged/learning/setstatus`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request_data),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const setLastLearned = async () => {
  // method for sending data to the server
  const token = sessionStorage.getItem("token");
  try {
    const response = await fetch(
      `http://localhost:3001/api/logged/learning/lastactivity`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(token),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const getLastLearned = async () => {
  // method for getting data from the server
  const token = sessionStorage.getItem("token");
  try {
    const response = await fetch(
      `http://localhost:3001/api/logged/learning/lastactivity?token=${token}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const getModulesProgress = async () => {
  const token = sessionStorage.getItem("token");
  try {
    const response = await fetch(
      `http://localhost:3001/api/logged/learning/progress?token=${token}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching progress:", error);
  }
};

const getStudyProgress = async () => {
  const token = sessionStorage.getItem("token");
  try {
    const response = await fetch(
      `http://localhost:3001/api/logged/learning/studied?token=${token}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching progress:", error);
  }
};

const getAvailableFlashcards = async () =>{
  const token = sessionStorage.getItem("token");
  try {
    const response = await fetch(
      `http://localhost:3001/api/logged/learning/flashcards?token=${token}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching progress:", error);
  }
}

export {
  registerUser,
  loginUser,
  getUserByToken,
  setCards,
  learnedCard,
  getModulesProgress,
  getStudyProgress,
  getAvailableFlashcards,
  setLastLearned,
  getLastLearned,
};