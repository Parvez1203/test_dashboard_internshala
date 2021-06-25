import { render , screen , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import NewApplicants from '../components/NewApplicants';

test('should render NewApplicants component', () => {
    render(<NewApplicants/>);
    const Myelement = screen.getByTestId('NewApplicants');
    expect(Myelement).toBeInTheDocument();
})