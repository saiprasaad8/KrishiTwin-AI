AI-Powered Digital Twin for Smart Farming Built for the Qualcomm Snapdragon Multiverse Hackathon 2026 

# About the Project 
**KrishiTwin AI** is an intelligent farming assistant that creates a Digital Twin of a farmer's field and provides real-time recommendations using AI. 

Our goal is to help farmers make better decisions by combining weather data, crop health analysis, AI-powered disease detection, multilingual voice assistance, and agricultural knowledge into one easy-to-use platform. 

Instead of relying on multiple applications, farmers can manage everything from a single dashboard. 

# What Our Platform Can Do 
-  Create a Digital Twin of the farm
-  Detect crop diseases from leaf images
-  Monitor real-time weather
-  Predict crop yield
-  Talk with the AI Assistant in regional languages
-  Get agriculture advice from trusted farming documents
-  View farm health and analytics
-  Run AI efficiently using Qualcomm AI technologies

#  How It Works?

KrishiTwin AI begins with the farmer providing one or more inputs, including voice commands, crop leaf images, and farm details such as crop type, soil information, or location. These inputs are collected through a user-friendly React frontend and securely sent to the Python FastAPI backend for processing.

The backend intelligently routes each input to the appropriate AI service:
- Qualcomm AI Hub performs optimized disease detection on crop leaf images using AI models designed for Snapdragon-powered edge devices.
- Sarvam AI handles Speech-to-Text (STT) to convert the farmer's voice into text and Text-to-Speech (TTS) to deliver responses in natural speech.
- AnythingLLM provides context-aware agricultural knowledge by retrieving relevant information from agricultural documents and knowledge sources.

The outputs from these AI services are combined by the AI Recommendation Engine, which analyzes disease predictions, voice queries, farm information, and agricultural knowledge to generate personalized recommendations for the farmer.

These recommendations continuously update the Digital Twin of the farm, creating a virtual representation of its current health and conditions. Finally, the processed insights are displayed on the Farmer Dashboard, where users can monitor crop health, weather conditions, disease detection results, yield predictions, and receive AI-powered farming guidance in real time.


# How to run?
Clone the repository 
```bash git clone <repository-URL>``` 

Install Python packages 
```pip install -r requirements.txt``` 

Start the backend
```python app.py``` 

Start the frontend
```npm install``` 
```npm run dev```


# Acknowledgements 
- Qualcomm AI Hub
- Sarvam AI
- AnythingLLM
- PlantVillage Dataset
- OpenWeather API

# Team members:
