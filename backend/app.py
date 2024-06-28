from flask import Flask
from config import Config
from models import db
from routes import bp as auth_bp
from flask_cors import CORS
from flask_migrate import Migrate

app = Flask(__name__) 
app.config.from_object(Config) 
CORS(app) 

db.init_app(app) 
app.register_blueprint(auth_bp, url_prefix='/api') 

with app.app_context():
    db.create_all()

migrate = Migrate(app, db) 

if __name__ == '__main__': 
    app.run(debug=True) 

