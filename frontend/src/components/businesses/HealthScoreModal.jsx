import React, { useState, useEffect } from 'react';
import { businessService } from '../../services/businessService';

const HealthScoreModal = ({ isOpen, onClose, businessId }) => {
    const [healthData, setHealthData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isOpen && businessId) {
            const fetchHealth = async () => {
                setIsLoading(true);
                try {
                    const data = await businessService.getBusinessHealth(businessId);
                    setHealthData(data);
                } catch (error) {
                    console.error("Failed to load health score", error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchHealth();
        }
    }, [isOpen, businessId]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-xl w-full max-w-md border border-gray-200 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Digital Health Report</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
                </div>

                {isLoading ? (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                ) : healthData ? (
                    <div className="space-y-6">
                        {/* Score Display */}
                        <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="text-4xl font-bold text-gray-900 mb-2">
                                {healthData.healthScore}<span className="text-xl text-gray-500">/100</span>
                            </div>
                            <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                                healthData.readinessLevel === 'Excellent' ? 'bg-green-100 text-green-700' : 
                                healthData.readinessLevel === 'Fair' ? 'bg-yellow-100 text-yellow-700' : 
                                'bg-red-100 text-red-700'
                            }`}>
                                {healthData.readinessLevel}
                            </span>
                        </div>

                        {/* Actionable Recommendations */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">Smart Recommendations</h3>
                            {healthData.recommendations.length > 0 ? (
                                <ul className="space-y-2">
                                    {healthData.recommendations.map((rec, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <span className="text-blue-500 mr-2">•</span>
                                            {rec}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-green-600 font-medium">Profile is fully optimized!</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <p className="text-sm text-red-500">Failed to load data.</p>
                )}
            </div>
        </div>
    );
};

export default HealthScoreModal;