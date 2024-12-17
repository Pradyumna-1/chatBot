from flask import Flask, request, jsonify
import json
from flask_cors import CORS  # Import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Load mock product data from JSON file
with open('products.json') as f:
    products = json.load(f)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_message = request.json.get('message').lower()

    # Strip any unnecessary spaces
    query = user_message.strip()

    # If the query is empty,it will return all products
    if not query:
        return jsonify({"text": "Here are all the products available:", "products": products})

    # Filter products where the name starts with the query
    filtered_products = [
        product for product in products if product['name'].lower().startswith(query)
    ]

    # Check if any products match the query
    if filtered_products:
        product_list = [{"name": product["name"], "price": product["price"]} for product in filtered_products]
        return jsonify({"text": "Here are the products I found starting with your search:", "products": product_list})
    else:
        return jsonify({"text": "Sorry, no products found with your search."})

if __name__ == '__main__':
    app.run(debug=True)
