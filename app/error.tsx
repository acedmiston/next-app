'use client';
import React from 'react';

interface ErrorPageProps {
    error: Error;
    reset: () => void;
    };

const ErrorPage = ({error, reset}: ErrorPageProps) => {
    console.error("error", error);
  return (
    <>
        <div>There was an error</div>
        <pre>{error.message}</pre>
        <button className='btn' onClick={() => reset()}>Retry</button>
    </>
  )
}

export default ErrorPage;