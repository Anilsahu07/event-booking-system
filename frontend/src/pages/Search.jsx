import React, { useState } from 'react';

export default function TopicForm(){
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    setError('');
    setResult('');
    if(!topic.trim()) return setError('Please enter a topic.');
    setLoading(true);

    try{
      const res = await fetch('http://localhost:3000/gemini/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic })
      });
      const data = await res.json();
      if(!res.ok) throw new Error(data.error || 'Server error');
      setResult(data.text);
    }catch(err){
      setError(err.message || 'Request failed');
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="topic-form">
      <form onSubmit={handleSubmit}>
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Type a topic e.g. 'React hooks' or 'event loop'"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Thinking...' : 'Explain'}
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          style={{ marginLeft: 8 }}
        >
          Print
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <section className="result">
          <h3>Answer</h3>
          <div className="result-body" dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
        </section>
      )}
    </div>
  );
}
