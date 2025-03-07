from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Modelo de dados (Tabela)
class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.String(200), nullable=False)

# Rota principal: exibe a lista de itens
@app.route('/')
def index():
    items = Item.query.all()
    return render_template('index.html', items=items)

# Rota para criação de um novo item
@app.route('/create', methods=['POST'])
def create():
    nome = request.form.get('nome')
    descricao = request.form.get('descricao')
    new_item = Item(nome=nome, descricao=descricao)
    db.session.add(new_item)
    db.session.commit()
    return redirect(url_for('index'))

# Rota para atualização de um item
@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    item = Item.query.get_or_404(id)
    if request.method == 'POST':
        item.nome = request.form.get('nome')
        item.descricao = request.form.get('descricao')
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('update.html', item=item)

# Rota para exclusão de um item
@app.route('/delete/<int:id>')
def delete(id):
    item = Item.query.get_or_404(id)
    db.session.delete(item)
    db.session.commit()
    return redirect(url_for('index'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Cria as tabelas (se ainda não existirem)
    app.run(debug=True)
