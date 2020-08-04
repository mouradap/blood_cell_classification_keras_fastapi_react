# Human Blood Cell Classification App

Convolutional Neural Network model to classify microscope images of blood cells, using Paul Mooney's Blood Cell Images on Kaggle.
A backend API was created using FastAPI<br>
And a client-side web app was created in ReactJS.

Docker distribution
--
To run the server and web app through Docker: <br>
To start the server, run <br>
`docker build API --tag <servername>`<br>
`docker run -it --rm -p 8000:80 <servername>`<br>
This will run the server on localhost:8000. You can check the docs at localhost:8000/docs and localhost:8000/redocs

To start the web app, run<br>
`docker build frontend --tag <imagename>`<br>
`docker run -it --rm -p 3000:3000 <imagename>`<br>
This will run the web app on localhost:3000.<br>

Dependencies:
--
Python 3+
<br>
tensorflow
<br>keras
<br>pillow
<br>numpy
<br>fastapi
<br>python-multipart


<br>NodeJS
<br>React
<br>axios

Local installation:
--
To install the API and web app locally:<br>
change to /API directory and run <br>
`pip install -r requirements.txt` <br>
Then change to /frontend and run <br>
`npm install`

Local usage:
--
To get the API running, Change to '/API' directory and run:<br>
`uvicorn main:app --reload`

To start the web app, change to '/frontend' directory and run:<br>
`npm start`<br>

The server is configured at localhost:8000 and the web app at localhost:3000. <br>
Once both services are up and running, head over to localhost:3000, upload an image and the API will respond with the classification. <br>
Current classes:
Eosinophil, Monocyte, Lymphocyte, and Neutrophil.

Creating the model in Google Colab:
--
To recreate or modify the CNN model, upload the blood_cell_type_cnn.ipynb to Google Colab.<br>
Add username and API key to<br>
`api_token = {"username":"","key":""}`
