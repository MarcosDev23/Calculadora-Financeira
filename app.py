from flask import Flask, render_template, request, jsonify
import sqlite3
from datetime import date, datetime

app = Flask(__name__)

def conectar_db():
    return sqlite3.connect("database.db")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/adicionar', methods=['POST'])
def adicionar():
    dados = request.json

    conn = conectar_db()
    cursor = conn.cursor()

    cursor.execute("""
    INSERT INTO lancamentos (tipo, descricao, valor, data)
    VALUES (?, ?, ?, ?)
    """, (
        dados['tipo'], 
        dados['descricao'], 
        float(dados['valor']),
        str(date.today())
    ))

    conn.commit()
    conn.close()

    return jsonify({"status": "sucesso"})

@app.route("/dados")
def dados():
    conn = conectar_db()
    cursor = conn.cursor()

    cursor.execute("SELECT id, tipo, descricao, valor FROM lancamentos")
    dados = cursor.fetchall()

    conn.close()

    return jsonify(dados)

@app.route("/excluir/<int:id>", methods=["DELETE"])
def excluir(id):
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM lancamentos WHERE id = ?", (id,))
    conn.commit()
    conn.close()
    return jsonify({"status": "ok"})


@app.route("/editar/<int:id>", methods=["PUT"])
def editar(id):
    dados = request.json
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute("""
        UPDATE lancamentos
        SET tipo = ?, descricao = ?, valor = ?
        WHERE id = ?
    """, (dados["tipo"], dados["descricao"], dados["valor"], id))
    conn.commit()
    conn.close()
    return jsonify({"status": "ok"})



if __name__ == '__main__':
    app.run(debug=True)