// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contractNexus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/contractNexus/i);
    expect(titleElement).toBeInTheDocument();
});
