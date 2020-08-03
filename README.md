# Human Blood Cell Classification App

Convolutional Neural Network model to classify microscope images of blood cells, using Paul Mooney's Blood Cell Images on Kaggle.
A backend API was created using FastAPI
And a client-side web app was created in ReactJS.

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


<br><br>NodeJS
<br>React
<br>axios

Local usage:
--
To get the API running, Change to '/API' directory and run:<br>
`uvicorn main:app --reload`

To start the web app, change to '/frontend' directory and run:<br>
`npm start`

Creating the model in Google Colab:
--
To recreate or modify the CNN model, upload the blood_cell_type_cnn.ipynb to Google Colab.<br>
Add username and API key to<br>
`api_token = {"username":"","key":""}`
