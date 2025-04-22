import { createFormAdd } from './form.add';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('Give createFormAdd', () => {
    //Caja Negra
    test('When is create the form', () => {
        //Act
        const form = createFormAdd();
        //Assert
        expect(form).toBeInstanceOf(HTMLFormElement);
    });
    test('When use submit', () => {
        //Act
        const button = screen.getByRole('button', { name: 'Crear' });
        button.click();
        //Assert
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('type', 'submit');
        
    });
});
