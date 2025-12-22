# Backend API para Predicción de Precios

Para conectar el modelo ML real, necesitas crear un backend simple en Python.

## Opción 1: Flask API (Recomendado para demos)

```python
# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # Permitir requests desde React

# Cargar el modelo entrenado
model_pipeline = joblib.load('real_estate_model_pipeline_v2.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Recibir datos del frontend
        data = request.json
        
        # Crear DataFrame con los datos
        input_df = pd.DataFrame([data])
        
        # Hacer predicción
        predicted_price = model_pipeline.predict(input_df)[0]
        
        # Calcular intervalo de confianza
        margin_of_error = 10000  # Ajustar según tu RMSE
        
        result = {
            'estimated': float(predicted_price),
            'lowerBound': float(predicted_price - margin_of_error),
            'upperBound': float(predicted_price + margin_of_error)
        }
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

### Instalar dependencias:
```bash
pip install flask flask-cors scikit-learn pandas joblib
```

### Ejecutar:
```bash
python app.py
```

## Opción 2: FastAPI (Más moderno y rápido)

```python
# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd

app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # URL de Vite
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar modelo
model_pipeline = joblib.load('real_estate_model_pipeline_v2.pkl')

class PropertyInput(BaseModel):
    has_photos: str
    location: str
    building: str
    bathrooms: int
    has_pool: str
    bedrooms: int
    size_m2: int
    parking_spaces: int

@app.post("/predict")
async def predict(data: PropertyInput):
    # Convertir a DataFrame
    input_df = pd.DataFrame([data.dict()])
    
    # Predicción
    predicted_price = model_pipeline.predict(input_df)[0]
    margin_of_error = 10000
    
    return {
        'estimated': float(predicted_price),
        'lowerBound': float(predicted_price - margin_of_error),
        'upperBound': float(predicted_price + margin_of_error)
    }
```

### Instalar:
```bash
pip install fastapi uvicorn scikit-learn pandas joblib
```

### Ejecutar:
```bash
uvicorn main:app --reload --port 5000
```

## Activar la API en el componente React

En `PropertyPricePredictor.tsx`, descomenta la sección de fetch:

```typescript
// Cambiar de datos simulados a API real
const response = await fetch('http://localhost:5000/predict', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(inputData)
});
const result = await response.json();
setPrediction(result);
```

## Deploy en producción

### Backend:
- **Render.com**: Deploy gratuito de Flask/FastAPI
- **Railway.app**: Alternativa moderna
- **Heroku**: Clásico pero de pago

### Frontend:
- Ya está configurado con Vite, puedes deployar en:
  - **Netlify** (gratis)
  - **Vercel** (gratis)
  - **Cloudflare Pages** (gratis)

Recuerda actualizar la URL del backend en producción cambiando `http://localhost:5000` por tu URL de producción.
