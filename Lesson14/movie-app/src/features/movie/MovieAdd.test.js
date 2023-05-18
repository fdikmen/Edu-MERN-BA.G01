import React from 'react';
import { setup, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import MovieAdd from './MovieAdd';
import { createMovie, updateMovie } from './movieSlice';

// useDispatch ve useSelector'u bir mock işleviyle değiştiriyoruz
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// createMovie ve updateMovie işlevlerini mock işlevlerle değiştiriyoruz
jest.mock('./movieSlice', () => ({
  createMovie: jest.fn(),
  updateMovie: jest.fn(),
}));

describe('MovieAdd', () => {
  const dispatchMock = jest.fn();
  const history = createMemoryHistory();

  beforeEach(() => {
    // useDispatch mock işlevini configure ediyoruz
    useDispatch.mockReturnValue(dispatchMock);

    // useSelector mock işlevini configure ediyoruz
    useSelector.mockReturnValue(null);
  });

  test('renders movie add form', () => {
    // MovieAdd bileşenini render ediyoruz
    setup(() => (
      <Router history={history}>
        <MovieAdd />
      </Router>
    ));

    // Formun doğru şekilde render edildiğini kontrol ediyoruz
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Category')).toBeInTheDocument();
    expect(screen.getByLabelText('Country')).toBeInTheDocument();
    expect(screen.getByLabelText('Year')).toBeInTheDocument();
    expect(screen.getByLabelText('IMDB Score')).toBeInTheDocument();
    expect(screen.getByLabelText('Cover URL')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add movie/i })).toBeInTheDocument();
  });

  test('dispatches createMovie action when form is submitted with valid data', () => {
    // Formun geçerli verilerle gönderildiğinde createMovie action'ının dispatch edildiğini kontrol ediyoruz
    const form = screen.getByRole('form');
    const titleInput = screen.getByLabelText('Title');
    const categoryInput = screen.getByLabelText('Category');
    const countryInput = screen.getByLabelText('Country');
    const yearInput = screen.getByLabelText('Year');
    const imdbScoreInput = screen.getByLabelText('IMDB Score');
    const coverUrlInput = screen.getByLabelText('Cover URL');
    const submitButton = screen.getByRole('button', { name: /add movie/i });

    fireEvent.change(titleInput, { target: { value: 'Test Movie' } });
    fireEvent.change(categoryInput, { target: { value: 'Action' } });
    fireEvent.change(countryInput, { target: { value: 'USA' } });
    fireEvent.change(yearInput, { target: { value: '2022' } });
    fireEvent.change(imdbScoreInput, { target: { value: '7.5' } });
    fireEvent.change(coverUrlInput, { target: { value: 'https://example.com/cover.jpg' } });
    fireEvent.submit(form);

    expect(dispatchMock).toHaveBeenCalledWith(createMovie({
      title: 'Test Movie',
      category: 'Action',
      country: 'USA',
      year: '2022',
      imdb_score: '7.5',
      avatar: 'https://example.com/cover.jpg',
      createdAt: expect.any(String),
    }));
  });

  test('dispatches updateMovie action when form is submitted with valid data and movie ID exists', () => {
    // Formun geçerli verilerle gönderildiğinde ve film ID'si mevcut olduğunda updateMovie action'ının dispatch edildiğini kontrol ediyoruz
    const form = screen.getByRole('form');
    const titleInput = screen.getByLabelText('Title');
    const categoryInput = screen.getByLabelText('Category');
    const countryInput = screen.getByLabelText('Country');
    const yearInput = screen.getByLabelText('Year');
    const imdbScoreInput = screen.getByLabelText('IMDB Score');
    const coverUrlInput = screen.getByLabelText('Cover URL');
    const submitButton = screen.getByRole('button', { name: /update movie/i });

    // useSelector mock işlevini configure ediyoruz
    useSelector.mockReturnValue({
      id: '1',
      title: 'Test Movie',
      category: 'Action',
      country: 'USA',
      year: '2022',
      imdb_score: '7.5',
      avatar: 'https://example.com/cover.jpg',
    });

    fireEvent.change(titleInput, { target: { value: 'Updated Movie' } });
    fireEvent.change(categoryInput, { target: { value: 'Comedy' } });
    fireEvent.change(countryInput, { target: { value: 'UK' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });
    fireEvent.change(imdbScoreInput, { target: { value: '8.0' } });
    fireEvent.change(coverUrlInput, { target: { value: 'https://example.com/updated-cover.jpg' } });
    fireEvent.submit(form);

    expect(dispatchMock).toHaveBeenCalledWith(updateMovie({
      id: '1',
      title: 'Updated Movie',
      category: 'Comedy',
      country: 'UK',
      year: '2023',
      imdb_score: '8.0',
      avatar: 'https://example.com/updated-cover.jpg',
      createdAt: expect.any(String),
    }));
  });
});
