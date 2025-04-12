import axios from "axios";

const API_URL = "http://localhost:8000";

const apiService = {
  generateVisualization: async (language, code) => {
    try {
      const response = await axios.post(
        `${API_URL}/generate`,
        { language, code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("CORS or backend error:", error);
      throw error;
    }
  },
};

export default apiService;
