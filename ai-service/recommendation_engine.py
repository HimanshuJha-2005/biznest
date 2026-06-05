def generate_recommendations(business_data):
    """
    Rule-based AI recommendations.
    Looks intelligent during demos.
    """

    recommendations = []

    occupancy = business_data.get("occupancy", 0)
    revenue_growth = business_data.get("revenue_growth", 0)
    sentiment = business_data.get("sentiment", "Neutral")

    if occupancy < 70:
        recommendations.append(
            "Occupancy is below 70%. Consider weekend discounts or promotional campaigns."
        )

    if revenue_growth < 0:
        recommendations.append(
            "Revenue is declining. Review pricing strategy and customer acquisition channels."
        )

    if sentiment == "Negative":
        recommendations.append(
            "Customer sentiment is negative. Focus on service quality and response times."
        )

    if not recommendations:
        recommendations.append(
            "Business performance is healthy. Continue monitoring trends."
        )

    return recommendations