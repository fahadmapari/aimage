const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (description, user, n = 1, size = "512x512") => {
  const response = await openai.createImage({
    prompt: description,
    n,
    size,
    user,
  });

  return response;
};

module.exports = {
  generateImage,
};
