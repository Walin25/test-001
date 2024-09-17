import { Request, Response } from 'express';
import Product from '../Models/Product';
import { IProduct } from '../Models/Product'; // Assuming IProduct interface is exported from the Product model

// Read a single product
export const getById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).exec();

        if (!product) {
            res.status(404).send({ message: 'Product not found' });
            return;
        }

        res.send(product);
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).send({ message: 'Server Error' });
    }
};

// List all products
export const getAll = async (_req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.find().exec();
        res.send(products);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).send({ message: 'Server Error' });
    }
};

// Create a new product
export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, detail, price }: IProduct = req.body;

        if (!name || !detail || !price) {
            res.status(400).send({ message: 'All fields are required' });
            return;
        }

        const product = new Product({ name, detail, price });
        const savedProduct = await product.save();
        res.status(201).send(savedProduct);
    } catch (err) {
        console.error('Error creating product:', err);
        res.status(500).send({ message: 'Server Error' });
    }
};

// Update an existing product
export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, detail, price }: IProduct = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            id, 
            { name, detail, price },
            { new: true }
        ).exec();

        if (!updatedProduct) {
            res.status(404).send({ message: 'Product not found' });
            return;
        }

        res.send(updatedProduct);
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).send({ message: 'Server Error' });
    }
};

// Remove a product
export const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const removedProduct = await Product.findByIdAndDelete(id).exec();

        if (!removedProduct) {
            res.status(404).send({ message: 'Product not found' });
            return;
        }

        res.send(removedProduct);
    } catch (err) {
        console.error('Error removing product:', err);
        res.status(500).send({ message: 'Server Error' });
    }
};
