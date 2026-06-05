import pandas as pd

class OccupancyForecast:

    def forecast(self, booking_history):
        df = pd.DataFrame(booking_history)

        if len(df) == 0:
            return 0

        avg_occupancy = df["occupancy"].mean()

        projected = avg_occupancy * 1.05

        return round(min(projected, 100), 2)