from sklearn.linear_model import LinearRegression
import pandas as pd
import numpy as np

class RevenuePredictor:
    def __init__(self):
        self.model = LinearRegression()

    def train(self, revenue_data):
        df = pd.DataFrame(revenue_data)

        X = np.array(df.index).reshape(-1, 1)
        y = df["revenue"]

        self.model.fit(X, y)

    def predict_next_month(self, months_ahead=1):
        future_month = [[months_ahead]]
        prediction = self.model.predict(future_month)

        return round(float(prediction[0]), 2)