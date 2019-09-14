#----------------------------------------------------------------------------#
# Imports
#----------------------------------------------------------------------------#

from flask import Flask, render_template, request
import logging
from logging import Formatter, FileHandler
from forms import *
import os

import pyrebase

#----------------------------------------------------------------------------#
# App Config.
#----------------------------------------------------------------------------#

app = Flask(__name__)
app.config.from_object('config')

config = {
  "apiKey": 'AIzaSyBZ5RZu3KDt8qiUIEO-z_FG2sa47zjSpYY',
  "authDomain": "vanhacks-2019.firebaseapp.com",
  "databaseURL": "https://vanhacks-2019.firebaseio.com",
  "projectId": "vanhacks-2019",
  "storageBucket": "vanhacks-2019.appspot.com",
  "serviceAccount": "firebase-private-key.json",
  "messagingSenderId": "45900005724"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

# Automatically tear down SQLAlchemy.
'''
@app.teardown_request
def shutdown_session(exception=None):
    db_session.remove()
'''

# Login required decorator.
'''
def login_required(test):
    @wraps(test)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return test(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect(url_for('login'))
    return wrap
'''
#----------------------------------------------------------------------------#
# Controllers.
#----------------------------------------------------------------------------#


@app.route('/')
def home():
    return render_template('public/templates/pages/index.html')


@app.route('/about')
def about():
    return render_template('public/templates/pages/placeholder.about.html')

'''
@app.errorhandler(500)
def internal_error(error):
    #db_session.rollback()
    return render_template('public/templates/errors/500.html'), 500


@app.errorhandler(404)
def not_found_error(error):
    return render_template('public/templates/errors/404.html'), 404
'''

if not app.debug:
    file_handler = FileHandler('public/error.log')
    file_handler.setFormatter(
        Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
    )
    app.logger.setLevel(logging.INFO)
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)
    app.logger.info('errors')

#----------------------------------------------------------------------------#
# Functions.
#----------------------------------------------------------------------------#

def new_event():
    if request.method == "GET":
        return render_template('public/templates/pages/placeholder.about.html')
    else:
        new_event = dict(request.form)
        db.child("Info").push(new_event) #replaces appending to events variable with firebase db call.
        return redirect('/')

#----------------------------------------------------------------------------#
# Launch.
#----------------------------------------------------------------------------#

# Default port:
if __name__ == '__main__':
    app.run()

# Or specify port manually:
'''
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
'''
