from flask import Blueprint, request, jsonify
from models import db, Clientes

bp = Blueprint('auth', __name__)

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    cpf_cnpj = data.get('cpf_cnpj') 
    senha = data.get('senha')

    usuario = Clientes.query.filter_by(cpf_cnpj=cpf_cnpj).first() #procura usuário
    
    if usuario and usuario.valida_senha(senha):
        return jsonify({'mensagem': 'Logado com sucesso', 'id': usuario.id}), 200
    else:
        return jsonify({'mensagem': 'Credenciais inválidas'}), 401
    

@bp.route('/clientes/<int:id>', methods=['GET'])
def get_cliente_info(id):
    cliente_info = Clientes.query.filter_by(id=id).first()
    if cliente_info:
        return jsonify({
            'nome': cliente_info.nome,
            'cpf_cnpj': cliente_info.cpf_cnpj
        })
    else:
        return jsonify({'mensagem': 'Cliente não encontrado'}), 404   

