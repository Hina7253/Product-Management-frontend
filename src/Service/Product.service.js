import axios from "axios";

const API_URL = "http://localhost:9090";

class ProductService {

    saveProduct(product) {
        return axios.post(API_URL + "/saveProduct", product);
    }

    getAllProduct() {
        return axios.get(API_URL + "/products");
    }

    getProductById(id) {
    return axios.get(API_URL + "/product/" + id);
}



    deleteProduct(id) {
        return axios.delete(API_URL + "/delete/" + id);
    }

    editProduct(id, product) {
        return axios.put(API_URL + "/editProduct/" + id, product);
    }

}

const productServiceInstance = new ProductService();

export default productServiceInstance;
