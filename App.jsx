import React from 'react';
import PostList from './features/posts/PostList';

function App() {
  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Moderator Dashboard</h1>
      <PostList />
    </main>
  );
}

export default App;
