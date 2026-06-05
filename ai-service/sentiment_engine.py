from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()


def analyze_sentiment(review_text):
    """
    Business-focused sentiment analysis using VADER NLP.
    """

    scores = analyzer.polarity_scores(review_text)

    compound_score = scores["compound"]

    if compound_score >= 0.5:

        sentiment = "Positive"
        satisfaction = "Excellent"
        risk = "Low"

        insight = (
            "Customers are highly satisfied. "
            "Positive experiences are being reflected in feedback."
        )

    elif compound_score >= 0.05:

        sentiment = "Positive"
        satisfaction = "Good"
        risk = "Low"

        insight = (
            "Overall customer sentiment is favorable. "
            "Minor improvements may further improve satisfaction."
        )

    elif compound_score <= -0.5:

        sentiment = "Negative"
        satisfaction = "Poor"
        risk = "High"

        insight = (
            "Strong negative sentiment detected. "
            "Immediate attention to service quality is recommended."
        )

    elif compound_score <= -0.05:

        sentiment = "Negative"
        satisfaction = "Below Average"
        risk = "Medium"

        insight = (
            "Customer concerns are emerging. "
            "Review operational issues and customer complaints."
        )

    else:

        sentiment = "Neutral"
        satisfaction = "Average"
        risk = "Low"

        insight = (
            "Feedback is balanced with no strong positive or negative signals."
        )

    return {
        "sentiment": sentiment,
        "score": round(compound_score, 2),
        "satisfaction": satisfaction,
        "risk": risk,
        "insight": insight,
    }