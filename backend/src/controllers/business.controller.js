const asyncHandler = require("../utils/asyncHandler");
const Business = require("../models/business.model");

exports.createBusiness = asyncHandler(async (req, res) => {
    const business = await Business.create({
        ...req.body,
        createdBy: req.user._id,
    });

    res.status(201).json({
        success: true,
        business,
    });
});
exports.getBusinesses = asyncHandler(async (req, res) => {
    // Fetch all businesses from the database
    const businesses = await Business.find().sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        count: businesses.length,
        data: businesses
    });
});

exports.getBusinessStats = async (req, res) => {
    try {
        // Quick MongoDB aggregations to count records
        const totalBusinesses = await Business.countDocuments();
        const activeClients = await Business.countDocuments({ status: 'active' });

        // We will simulate growth and requests for now until we build the advanced analytics engine
        res.status(200).json({
            totalBusinesses,
            activeClients,
            growthRate: '+23%',
            requests: 15
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error fetching dashboard stats' });
    }
};

exports.updateBusiness = asyncHandler(async (req, res) => {
    const business = await Business.findById(req.params.id);

    if (!business) {
        res.status(404);
        throw new Error("Business not found");
    }

    const updatedBusiness = await Business.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    res.status(200).json({
        success: true,
        business: updatedBusiness,
    });
});

exports.deleteBusiness = asyncHandler(async (req, res) => {
    const business = await Business.findById(req.params.id);

    if (!business) {
        res.status(404);
        throw new Error("Business not found");
    }

    await business.deleteOne();

    res.status(200).json({
        success: true,
        message: "Business deleted successfully",
    });
});

// Get recent businesses for activity feed (Moved completely outside of deleteBusiness)
exports.getRecentActivity = async (req, res) => {
    try {
        const recentBusinesses = await Business.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select('name category status createdAt');
        res.status(200).json(recentBusinesses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recent activity" });
    }
};

// Calculate Business Health Score
exports.getBusinessHealth = async (req, res) => {
    try {
        const business = await Business.findById(req.params.id);

        if (!business) {
            return res.status(404).json({ message: "Business not found" });
        }

        let score = 0;
        const recommendations = [];

        // 1. Core Information (40 points)
        if (business.email && business.phone) {
            score += 40;
        } else {
            recommendations.push("Add complete contact information (Email & Phone)");
        }

        // 2. Business Description (30 points)
        if (business.description && business.description.length > 20) {
            score += 30;
        } else {
            recommendations.push("Expand business description for better SEO");
        }

        // 3. Platform Status (30 points)
        if (business.status === 'active') {
            score += 30;
        } else {
            recommendations.push("Activate business profile to maximize visibility");
        }

        res.status(200).json({
            businessId: business._id,
            healthScore: score,
            readinessLevel: score >= 80 ? 'Excellent' : score >= 50 ? 'Fair' : 'Needs Attention',
            recommendations
        });

    } catch (error) {
        res.status(500).json({ message: 'Error calculating health score' });
    }
};