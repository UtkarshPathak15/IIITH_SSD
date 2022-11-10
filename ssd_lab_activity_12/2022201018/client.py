from flask import Flask, request

def do_login():
    username = input("Enter username: ")
    password = input("Enter password: ")
    
    payload={
        "username": username,
        "password": password
    }
    
    resp = request.post("http//127.0.0.1:8000/do_login", json=payload).content.decode()
    
    print(resp)