import type { Product } from '../types/product';
import { ApiRepo } from './api.repo';
import { vi } from 'vitest';

const mockData = {};

const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(mockData),
} as Response);

describe.only('Given ApiRepo', () => {
    //Arrange
    const apiRepo = new ApiRepo();

    test('When ApiRepo is instanceof', () => {
        //Assert
        expect(apiRepo).instanceOf(ApiRepo);
    });
    
describe('When apiRepo.getProducts is called', () =>{
    test('Then is called and response', async () => {
        // Act
        const result = await apiRepo.getProducts();
        // Assert
        expect(fetchMock).toHaveBeenCalled();
        expect(fetchMock).toHaveBeenCalledWith(
            'http://localhost:3000/products',
        );
        expect(result).toEqual(mockData);
    });
    test('When apiRepo.createProduct is called', async () => {
        //Assert
        const mockNewProduct = {};
        // Act
        const result = await apiRepo.createProduct(mockNewProduct);
        // Assert
        expect(result).toEqual(mockNewProduct);
    });
});
    
});
