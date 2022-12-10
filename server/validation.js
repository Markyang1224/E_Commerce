const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(6).max(50).required(),
    password: Joi.string().min(4).max(50).required(),
    role: Joi.string().required().valid("customer", "seller").required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(4).max(50).required(),
  });

  return schema.validate(data);
};

const commodityValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(100).required(),
    description: Joi.string().min(3).max(1000).required(),
    price: Joi.number().min(1).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.commodityValidation = commodityValidation;
