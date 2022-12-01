"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Rol, Interviewer, Category, Question
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST'])
def login():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        user = User.query.filter_by (email=body_email).filter_by(password=body_password).first ()
        if user:
            token = create_access_token(identity= user.id)
            return jsonify({"logged": True, "user": user.serialize(), "token": token }), 200 # serialize es para pasar del lenguaje normal al lenguaje json """
        else: 
            return jsonify({"logged": False, "msg": "Revise el email o contraseña"}), 400
    else:
     
        return jsonify({"logged":False, "msg": "Revisa la información"}), 400


@api.route('/verify', methods=['GET'])
@jwt_required()
def verify():
    user_id=get_jwt_identity()
    user=User.query.get(user_id)
    if user:
        return jsonify ({"logged": True, "user":user.serialize()}), 200
    else:
        return jsonify ({"logged": False, "msg": "Por favor, inicia sesión."}), 400


@api.route('/register', methods=['POST'])
def register():
    body_username = request.json.get("username")   
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    body_rol_id = request.json.get("rol_id")

    if body_email and body_password and body_username and body_rol_id:
        user = User(email=body_email, password=body_password, username=body_username, rol_id=body_rol_id)
        if user:
            token = create_access_token(identity= user.id)
            db.session.add(user)
            db.session.commit()
            return jsonify({"logged": True, "user": user.serialize(), "token": token }), 200 # serialize es para pasar del lenguaje normal al lenguaje json """
        else: 
            return jsonify({"logged": False, "msg": "Usuario no encontrado"}), 400
    else:
        return jsonify({"logged":False, "msg": "Revisa la información"}), 400

@api.route('/roles', methods=['GET'])
def getroles():
    roles = Rol.query.all()
    return jsonify ({"Roles": list(map(lambda x:x.serialize(), roles))}), 200

@api.route('/entrevistados', methods=['GET'])
def getEntrevistados():
    entrevistados = Interviewer.query.all()
    return jsonify ({"Entrevistados": list(map(lambda x:x.serialize(), entrevistados))}), 200

@api.route('/entrevistados/<name>', methods=['GET'])
def getEntrevistado(name): 
    entrevistado = Interviewer.query.filter_by(name=name).first()
    return jsonify ({"Entrevistado": entrevistado.serialize()}), 200

@api.route('/preguntas', methods=['POST'])
@jwt_required()
def preguntas():
    user_id = get_jwt_identity ()
    body_text = request.json.get("text")
    body_interviewer_id = request.json.get("interviewer_id")
    body_category_id = request.json.get("category_id")
    if body_text:
        question = Question (text=body_text, interviewer_id = body_interviewer_id, category_id = body_category_id, user_id = user_id)
        db.session.add(question)
        db.session.commit()
        return jsonify ({"message":"Pregunta enviada", "question": question.serialize()})
    else:
        return jsonify({"message": "Campo obligatorio no rellenado"}), 400

@api.route('/category', methods=['GET'])
def getcategory():
    categories = Category.query.all()
    return jsonify ({"Categories": list(map(lambda x:x.serialize(), categories))}), 200

@api.route('/preguntas/<int:id>', methods=['GET'])
def getPreguntasEntrevistado(id): 
    print ("@@@@@@@@", id)
    pregunta = Question.query.filter_by(interviewer_id=id).first()
    if pregunta:
        
        return jsonify ({"Preguntas": pregunta.serialize()}), 200
    else:
        return jsonify ({"Preguntas": []})