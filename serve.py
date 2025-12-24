import http.server
import socketserver
import os
from functools import partial

PORT = 8000
HERE = os.path.abspath(os.path.dirname(__file__))

def run(port: int = PORT, directory: str = HERE) -> None:
    handler = partial(http.server.SimpleHTTPRequestHandler, directory=directory)
    with socketserver.TCPServer(("0.0.0.0", port), handler) as httpd:
        print(f"Serving HTTP on 0.0.0.0 port {port} (http://localhost:{port}/) ...")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopping server...")
            httpd.server_close()

if __name__ == "__main__":
    run()
