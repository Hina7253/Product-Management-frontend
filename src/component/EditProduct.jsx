import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductService from "../Service/Product.service";


function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id:"",
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  // Fetch product by ID
  useEffect(() => {
    axios
      .get(`http://localhost:9090/product/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9090/editProduct/${id}`, product)
      .then((res) => {
        alert("Product Updated Successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Error Updating Product.");
      });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <h3 className="text-center mt-3">Edit Product</h3>

            <form onSubmit={updateProduct}>
              <div className="mb-3">
                <label>Product Name</label>
                <input
                  type="text"
                  name="productName"
                  className="form-control"
                  value={product.productName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  value={product.description}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  value={product.price}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Status</label>
                <input
                  type="text"
                  name="status"
                  className="form-control"
                  value={product.status}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary col-12 mt-2">
                Update Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
