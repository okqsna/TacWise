const getSchoolContent = async () => {
    // method for getting data to the server
    try {
      const response = await fetch("http://localhost:3001/api/schools", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  export { getSchoolContent };
