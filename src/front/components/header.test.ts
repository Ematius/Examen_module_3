import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { createHeader } from './header';


describe('Given createHeader', () =>{
    //Arrange
    beforeAll(()=>{
        createHeader()
    })
    //Caja Negra 
    describe('When createHeader is called', () => {
        test('Then title "Products" is in de document ', () => {
            const element = screen.getByRole('heading', {
                name: /Products/i,
            });
            expect(element).toBeInTheDocument();
        });
        
    });
    
})