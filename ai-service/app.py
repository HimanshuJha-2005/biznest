from flask import Flask, request, jsonify
from flask_cors import CORS

from sentiment_engine import analyze_sentiment
from analytics_engine import generate_forecast
from chatbot_engine import process_chat_query

app = Flask(__name__)

# Allow React frontend to communicate with Flask
CORS(app)

# ==========================================
# HEALTH CHECK
# ==========================================
@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "online",
        "service": "BizNest AI Service"
    })


# ==========================================
# SENTIMENT ANALYSIS API
# ==========================================
@app.route("/api/ai/sentiment", methods=["POST"])
def sentiment():

    data = request.get_json()

    if not data or "text" not in data:
        return jsonify({
            "error": "Missing text field"
        }), 400

    result = analyze_sentiment(data["text"])

    return jsonify(result), 200


# ==========================================
# FORECAST API
# ==========================================
@app.route("/api/ai/forecast", methods=["POST"])
def forecast():

    data = request.get_json()

    if not data or "historical_data" not in data:
        return jsonify({
            "error": "Missing historical_data"
        }), 400

    result = generate_forecast(
        data["historical_data"]
    )

    return jsonify(result), 200
    
    result = generate_forecast(platform_data)

    print("\n===== FORECAST RESULT =====")
    print(result)
    print("===========================\n")


# ==========================================
# AI CHATBOT API
# ==========================================
@app.route("/api/ai/chat", methods=["POST"])
def chat_with_bot():

    try:

        data = request.get_json()

        print("\n========== NEW REQUEST ==========")
        print(data)

        if not data:
            return jsonify({
                "error": "No JSON payload received"
            }), 400

        user_message = data.get(
            "message",
            ""
        )

        historical_data = data.get(
            "historical_data",
            []
        )

        bot_response = process_chat_query(
            user_message,
            historical_data
        )

        print("\n========== BOT RESPONSE ==========")
        print(bot_response)

        return jsonify({
            "sender": "BizNest AI",
            "response": bot_response
        }), 200

    except Exception as e:

        print("\n========== ERROR ==========")
        print(str(e))

        return jsonify({
            "sender": "System",
            "response": f"Backend Error: {str(e)}"
        }), 500


# ==========================================
# START SERVER
# ==========================================
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5001,
        debug=True
    )