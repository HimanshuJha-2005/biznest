const express = require("express");

// 1. Destructure ALL your controller functions here
const {
    createBusiness,
    getBusinesses,
    updateBusiness,
    deleteBusiness,
    getBusinessStats,
    getRecentActivity,
    getBusinessHealth
} = require("../controllers/business.controller");

const protect = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");

const router = express.Router();

router.route("/")
    .post(
        protect,
        authorizeRoles("admin"),
        createBusiness
    )
    .get(
        protect,
        authorizeRoles("admin", "staff"),
        getBusinesses
    );

// 2. Fixed the middleware names (using 'protect' instead of 'authMiddleware') 
// 3. Removed the 'businessController.' prefix and used the destructured functions
router.get('/stats', protect, getBusinessStats);
router.get('/recent', protect, getRecentActivity);
router.get('/:id/health', protect, getBusinessHealth);

router.route("/:id")
    .put(
        protect,
        authorizeRoles("admin"),
        updateBusiness
    )
    .delete(
        protect,
        authorizeRoles("admin"),
        deleteBusiness
    );

module.exports = router;