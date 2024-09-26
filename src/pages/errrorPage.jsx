import React from 'react'

export default function ErrorPage({ error }) {
  return <div>An error occurred: {error.message}</div>
}