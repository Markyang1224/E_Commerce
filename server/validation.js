const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(6).max(50).required(),
    password: Joi.string().min(4).max(50).required(),
    role: Joi.string().required().valid("customer", "seller"),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;