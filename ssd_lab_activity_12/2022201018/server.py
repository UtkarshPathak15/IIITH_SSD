from flask import Flask, render_template,request,flash,redirect,url_for,session
import sqlite3

app = Flask(__name__)
app.secret_key="secret_key"

con=sqlite3.connect("database.db")
con.execute("create table if not exists account(pid integer primary key,name text)")
con.close()

@app.route('/')
# def index():
    # return render_template('index.html')

@app.route('/login',methods=["GET","POST"])
def login():
    if request.method=='POST':
        name=request.form['name']
        password=request.form['password']
        con=sqlite3.connect("database.db")
        con.row_factory=sqlite3.Row
        cur=con.cursor()
        cur.execute("select * from account where name=?",(name,password))
        data=cur.fetchone()

        if data:
            session["name"]=data["name"]
            return redirect("account")
        else:
            flash("Username and Password Mismatch","Failed")
    # return redirect(url_for("index"))


# @app.route('/account',methods=["GET","POST"])
# def account():
    # return render_template("account.html")

@app.route('/register',methods=['GET','POST'])
def register():
    if request.method=='POST':
        try:
            name=request.form['name']
            con=sqlite3.connect("database.db")
            cur=con.cursor()
            cur.execute("insert into account(name)values(?)",(name))
            con.commit()
            flash("Record Added  Successfully","success")
        except:
            flash("Error in Insert Operation","Failed")
        finally:
            # return redirect(url_for("index"))
            con.close()

    # return render_template('register.html')

@app.route('/logout')
def logout():
    session.clear()
    # return redirect(url_for("index"))

if __name__ == '__main__':
    app.run(debug=True)
