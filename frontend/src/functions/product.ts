import axios, { AxiosResponse } from 'axios';

// Define a specific interface for the product
interface Product {
    id?: string;
    name: string;
    detail: string;
    price: number;
    imageUrl: string;
    // Add other product fields as needed
}

// Define a type for the response from the API
type ProductResponse = AxiosResponse<Product>;
type ProductListResponse = AxiosResponse<Product[]>;

// Store the base API URL in a constant
const API_BASE_URL = `http://localhost:5000/api/product`;

console.log("API_BASE_URL : ",API_BASE_URL);

export const remove = async (id: string): Promise<ProductResponse> => {
    return await axios.delete(`${API_BASE_URL}/${id}`);
};

export const create = async (data: Product): Promise<ProductResponse> => {
    return await axios.post(API_BASE_URL, data);
};

export const getdata = async (): Promise<ProductListResponse> => {
    return await axios.get(API_BASE_URL);
};

export const read = async (id: string): Promise<ProductResponse> => {
    return await axios.get(`${API_BASE_URL}/${id}`);
};

export const update = async (id: string, data: Product): Promise<ProductResponse> => {
    return await axios.put(`${API_BASE_URL}/${id}`, data);
};
