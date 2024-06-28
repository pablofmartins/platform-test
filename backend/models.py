from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class Clientes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cpf_cnpj = db.Column(db.String(14), unique=True, nullable=False)
    senha = db.Column(db.String(50), nullable=False)
    nome = db.Column(db.String(50), nullable=False)

    
    def valida_senha(self, senha):
        return self.senha == senha    


class Carros(db.Model):
    nome_carro = db.Column(db.String(50), nullable=False)
    placa = db.Column(db.String(50), nullable=False, primary_key=True)    
    cliente_id = db.Column(db.Integer, db.ForeignKey('clientes.id'), nullable=False)


