#!flask/bin/python
from flask import Flask, jsonify, request, make_response
from flask.wrappers import Response
from src.countdown_numbers import solve as numbers_solve
from src.countdown_letters import fast_solve as letters_solve
import os


app = Flask(__name__, static_url_path='/', static_folder='static')
app.secret_key = os.environ['SECRET_KEY']

## -- Static Files -- ##
@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/js/<path:path>')
def send_js(path):
    return app.send_static_file(f'js/{path}')

@app.route('/css/<path:path>')
def send_css(path):
    return app.send_static_file(f'css/{path}')

@app.route('/numbers')
def get_numbers():
    return app.send_static_file('numbers.html')

@app.route('/letters')
def get_letters():
    return app.send_static_file('letters.html')

@app.route('/conundrum')
def get_conundrum():
    return app.send_static_file('conundrum.html')

@app.route('/countdown/api/v1.0/numbers', methods=['GET'])
def solve_numbers():
    target = int(request.args.get("target"))
    values = [ int(request.args.get("v{}".format(i))) for i in range(1,7) ]
    if target is None:
        return make_response(jsonify({'error':"Target is None!"}),400)
    for v in values:
        if v is None:
            return make_response(jsonify({'error':"Value is None!"}),400)

    result = numbers_solve(values, target)
    return make_response(jsonify({'result':result}), 200)

@app.route('/countdown/api/v1.0/letters', methods=['GET'])
def solve_letters():
    values = [ request.args.get("v{}".format(i)) for i in range(1,10) ]
    for v in values:
        if v is None or len(v) != 1:
            return make_response(jsonify({'error':"Value is None!"}),400)

    result = letters_solve((''.join(values)).lower())
    if len(result) == 0:
        result.append("It's Impossible!")
    return make_response(jsonify({'result':result}), 200)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    app.run(debug=True, threaded=True)
