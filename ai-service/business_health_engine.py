def calculate_health_score(
    occupancy,
    revenue_growth,
    sentiment_score
):
    """
    Calculates an overall business health score.
    Score ranges from 0 - 100.
    """

    score = 50

    score += occupancy * 0.25
    score += revenue_growth * 1.5
    score += sentiment_score * 20

    score = round(score)

    score = max(0, min(100, score))

    if score >= 85:
        status = "Excellent"

    elif score >= 70:
        status = "Healthy"

    elif score >= 50:
        status = "Average"

    elif score >= 30:
        status = "At Risk"

    else:
        status = "Critical"

    return {
        "score": score,
        "status": status
    }