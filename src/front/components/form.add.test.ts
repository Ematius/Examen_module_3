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
        const button = screen.getByRole('button', { name: 'Crear' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('type', 'submit');
        button.click();
    });


});
