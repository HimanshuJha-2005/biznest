const Business = require("../models/Business.model");

const createBusinessService = async (data) => {
    return await Business.create(data);
};

const getBusinessesService = async () => {
    return await Business.find();
};

module.exports = {
    createBusinessService,
    getBusinessesService,
};