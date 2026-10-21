import Joi from "joi";

// Post Schema
const postSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().trim().required()
});

export const validatePost = (req, res, next) => {
  // Check Post Data
  const { error, value } = postSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: error.message
    });
  }

  // Next Middleware
  req.body = value;
  next();
};

export default postSchema;