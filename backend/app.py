import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # Permitir requests desde el frontend

MODEL_PATH = os.getenv("MODEL_PATH", "real_estate_model_pipeline_v2.pkl")
_model = None

# Cargar el modelo si existe
if os.path.exists(MODEL_PATH):
    try:
        _model = joblib.load(MODEL_PATH)
        print(f"Modelo cargado desde {MODEL_PATH}")
    except Exception as e:
        print(f"No se pudo cargar el modelo: {e}")
else:
    print(f"Aviso: no se encontró modelo en {MODEL_PATH}. Se usará predicción simulada.")

@app.get("/")
def health():
    return jsonify({"status": "ok"})

@app.post('/predict')
def predict():
    try:
        data = request.get_json(force=True)
        if not isinstance(data, dict):
            return jsonify({"error": "JSON inválido"}), 400

        # Si hay modelo, predecir con él
        if _model is not None:
            df = pd.DataFrame([data])
            y = float(_model.predict(df)[0])
            margin = float(os.getenv("MARGIN", "10000"))
            return jsonify({
                "estimated": y,
                "lowerBound": y - margin,
                "upperBound": y + margin,
            })

        # Fallback: predicción simulada coherente con el frontend
        bedrooms = int(data.get("bedrooms", 2))
        bathrooms = int(data.get("bathrooms", 2))
        size_m2 = float(data.get("size_m2", 120))
        parking_spaces = int(data.get("parking_spaces", 1))
        location = str(data.get("location", "")).strip()

        base = 150_000
        price_per_m2 = 2_000
        bedroom_val = bedrooms * 25_000
        bathroom_val = bathrooms * 15_000
        parking_val = parking_spaces * 10_000
        loc_mult = 1.3 if location == "Punta Pacífica" else 1.0
        estimated = round((base + size_m2 * price_per_m2 + bedroom_val + bathroom_val + parking_val) * loc_mult)
        margin = 10_000
        return jsonify({
            "estimated": float(estimated),
            "lowerBound": float(estimated - margin),
            "upperBound": float(estimated + margin),
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    # Para pruebas locales: python app.py
    port = int(os.getenv("PORT", 8080))
    app.run(host='0.0.0.0', port=port, debug=True)
