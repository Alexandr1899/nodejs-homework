const { registrationSchema } = require("./Schemas/registrationSchema");


const registrationValidation = (req, res, next) => {
  const validationResult = registrationSchema.validate(req.body);
  if (validationResult.error) {
    return res
      .status(400)
      .json({ validationError: validationResult.error.details[0].message });
  }

  next();
};

module.exports = {
  registrationValidation,
};
