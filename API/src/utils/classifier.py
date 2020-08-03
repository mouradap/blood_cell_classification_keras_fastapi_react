####
#       Módulo para classificação da imagem já preprocessada
####

import numpy as np
import json

def evaluate(model, image):
    # Predição pelo modelo CNN da imagem preprocessada

    prediction = model.predict(image)

    # Array final de 4 posições. Maior valor indica classificação mais provavel.

    if np.argmax(prediction) == 0:
        classification = "Eosinophil"
    elif np.argmax(prediction) == 1:
        classification = "Lymphocyte"
    elif np.argmax(prediction) == 2:
        classification = "Monocyte"
    elif np.argmax(prediction) == 3:
        classification = "Neutrophil"
    else:
        return "Classification is ambiguous."


    # Retornando o score em valor percentual

    score = round((prediction.item(np.argmax(prediction)) * 100), 2)


    # Criando um objeto JSON para resposta.

    result = {
        'classification': classification,
        'score': score
    }

    result = json.dumps(result)

    return result