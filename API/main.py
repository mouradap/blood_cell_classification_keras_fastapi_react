##########
######      API para utilização do modelo de classificação por CNN
##########

# Importações: Utilizarei o FastAPI para construção da API,
# Keras para preprocessamento e utilização do modelo

from fastapi import FastAPI, File, UploadFile
from src.utils.preprocess_image import load_image, preprocess_img
from src.utils.classifier import evaluate
from keras.models import load_model
from fastapi.middleware.cors import CORSMiddleware


# Criando a instância do FastAPI

app = FastAPI()

# Setando a origem da requisição para configuração do CORS e autorização do fluxo de dados

origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods=['*'],
    allow_headers=['*'],
)

# Carregamento do modelo

model = load_model("src/Model.h5")
model.summary()

# Criação da rota de upload

@app.post("/classify/")
async def upload_file(image: UploadFile = File(...)):
    print(str('processing "' + image.filename + '"...'))
    user_image = load_image(image.file)
    preprocessed_image = preprocess_img(user_image)
    classification = evaluate(model, preprocessed_image)
    print(classification)

# Retornando o resultado da classificação pelo modelo ao clientside.

    return {'classification': classification}