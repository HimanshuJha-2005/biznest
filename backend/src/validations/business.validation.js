const { z } = require("zod");

const businessSchema = z.object({
    name: z.string().min(2),

    ownerName: z.string().min(2),

    email: z.string().email(),

    phone: z.string().optional(),

    businessType: z.string().optional(),

    location: z.string().optional(),
});

module.exports = {
    businessSchema,
};