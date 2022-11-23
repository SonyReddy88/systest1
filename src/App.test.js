import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world/i);
  
  expect(linkElement).toBeInTheDocument();
});

// Smoke Test 1 - Check that test is working!
describe ("check that jest is working",()=>{
  test("that 2+2 is 4",() => {
    expect(2+2).toBe(4);
   });
});


