import os

class Config:
    SECRET_KEY = '1234567' #apenas exemplo
    SQLALCHEMY_DATABASE_URI = 'mysql://usuario:senha@localhost/login_webrota' #necessário configurar com usuário e senha
    SQLALCHEMY_TRACK_MODIFICATIONS = False