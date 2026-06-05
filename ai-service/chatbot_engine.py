from analytics_engine import generate_forecast
from sentiment_engine import analyze_sentiment
from recommendation_engine import generate_recommendations
from business_health_engine import calculate_health_score


def process_chat_query(user_message, platform_data=None):

    message = user_message.lower()

    # ==========================================
    # FORECASTING
    # ==========================================
    if any(
        word in message
        for word in [
            "forecast",
            "revenue",
            "occupancy",
            "future",
            "trend",
        ]
    ):

        if not platform_data:
            return (
                "I need historical platform data before generating forecasts."
            )

        result = generate_forecast(platform_data)

        return (
            f"Business Forecast Report\n\n"
            f"Trend: {result['trend']}\n"
            f"Predicted Next Value: {result['forecasted_next_value']}\n"
            f"Growth Rate: {result['growth_rate']}%\n"
            f"Confidence Score: {result['confidence']}%\n\n"
            f"AI Insight:\n{result['insight']}"
        )

    # ==========================================
    # SENTIMENT ANALYSIS
    # ==========================================
    elif message.startswith("review:"):

        review_text = user_message.replace(
            "review:",
            ""
        ).strip()

        result = analyze_sentiment(review_text)

        return (
            f"Customer Feedback Analysis\n\n"
            f"Sentiment: {result['sentiment']}\n"
            f"Score: {result['score']}\n\n"
            f"AI Insight:\n"
            f"This review appears to be "
            f"{result['sentiment'].lower()}."
        )

    # ==========================================
    # RECOMMENDATIONS
    # ==========================================
    elif any(
        word in message
        for word in [
            "recommend",
            "recommendation",
            "suggestion",
            "improve",
        ]
    ):

        sample_data = {
            "occupancy": 62,
            "revenue_growth": -8,
            "sentiment": "Negative",
        }

        recommendations = generate_recommendations(
            sample_data
        )

        return (
            "Business Recommendations\n\n"
            + "\n".join(
                [
                    f"{idx + 1}. {item}"
                    for idx, item in enumerate(
                        recommendations
                    )
                ]
            )
        )

    # ==========================================
    # BUSINESS HEALTH
    # ==========================================
    elif any(
        word in message
        for word in [
            "health",
            "health score",
            "business health",
            "score",
        ]
    ):

        result = calculate_health_score(
            occupancy=82,
            revenue_growth=12,
            sentiment_score=0.7,
        )

        return (
            f"Business Health Report\n\n"
            f"Health Score: {result['score']}/100\n"
            f"Status: {result['status']}\n\n"
            f"Analysis:\n"
            f"• Occupancy levels are healthy.\n"
            f"• Revenue growth is positive.\n"
            f"• Customer sentiment remains strong."
        )

    # ==========================================
    # GREETING
    # ==========================================
    elif any(
        word in message
        for word in [
            "hello",
            "hi",
            "status",
        ]
    ):

        return (
            "Welcome to BizNest AI.\n\n"
            "Available capabilities:\n"
            "• Revenue Forecasting\n"
            "• Occupancy Prediction\n"
            "• Sentiment Analysis\n"
            "• Business Recommendations\n"
            "• Business Health Score"
        )

    # ==========================================
    # DEFAULT
    # ==========================================
    return (
        "I can help with:\n\n"
        "• Forecast Revenue\n"
        "• Analyze Reviews\n"
        "• Business Recommendations\n"
        "• Business Health Score"
    )