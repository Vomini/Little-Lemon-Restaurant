import '@testing-library/jest-dom';
// Optionally, mock global fetch or other APIs
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

