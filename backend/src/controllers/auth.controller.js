const asyncHandler = require("../utils/asyncHandler");
const generateToken = require("../utils/generateToken");

const {
    registerService,
    loginService,
} = require("../services/auth.service");

exports.registerUser = asyncHandler(async (req, res) => {
    const user = await registerService(req.body);

    res.status(201).json({
        success: true,
        token: generateToken(user._id),
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    });
});

exports.loginUser = asyncHandler(async (req, res) => {
    const user = await loginService(req.body);

    res.status(200).json({
        success: true,
        token: generateToken(user._id),
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    });
});