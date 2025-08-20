import Joi from 'joi';

export  const registerValidator = (data) => {
    const rule = Joi.object({
        username: Joi.string().min(2).max(15).required(),
        email: Joi.string().min(6).max(225).required().email(),
        password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
    })

    return rule.validate(data);
}

