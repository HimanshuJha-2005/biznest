import pandas as pd
import numpy as np


def generate_forecast(historical_data):

    if not historical_data or len(historical_data) < 2:
        return {
            "trend": "Insufficient Data",
            "forecasted_next_value": 0,
            "growth_rate": 0,
            "confidence": 0,
            "insight": "Not enough historical data available."
        }

    df = pd.DataFrame(historical_data)

    y = df["value"].values
    x = np.arange(len(y))

    slope, intercept = np.polyfit(x, y, 1)

    next_x = len(y)

    forecast = (slope * next_x) + intercept

    if slope > 0.1:
        trend = "Upward"
    elif slope < -0.1:
        trend = "Downward"
    else:
        trend = "Stable"

    growth_rate = 0

    if len(y) > 1 and y[-1] != 0:
        growth_rate = (
            (forecast - y[-1]) / y[-1]
        ) * 100

    confidence = max(
        70,
        min(
            98,
            85 + abs(slope)
        )
    )

    if trend == "Upward":
        insight = (
            "Business performance is improving. "
            "Current data indicates continued growth."
        )
    elif trend == "Downward":
        insight = (
            "Performance is declining. "
            "Investigate occupancy, pricing, and customer experience."
        )
    else:
        insight = (
            "Performance is stable. "
            "Consider promotional campaigns to stimulate growth."
        )

    return {
        "trend": trend,
        "forecasted_next_value": round(float(forecast), 2),
        "growth_rate": round(float(growth_rate), 2),
        "confidence": round(float(confidence), 2),
        "insight": insight
    }