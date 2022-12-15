import axios from "axios";

export const generateImage = async (description, userId) => {
  try {
    const response = await axios.post("/generate", {
      description,
      user: userId,
    });

    return response.data.data;
  } catch (err) {
    return err.message;
  }
};
