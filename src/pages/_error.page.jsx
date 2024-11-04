import React from 'react';

function ErrorPage({ error }) {
  return <div>An error occurred: {error.message}</div>;
}

export default {
  component: ErrorPage
};