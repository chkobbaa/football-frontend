import React, { useState, useEffect } from 'react';
import API from '../api';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ name: '', number: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/signup', form);
      alert('Signup successful! Please log in.');
      navigate('/login');
    } catch (err) {
      alert('Signup failed. Number might already be in use.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        placeholder="Name"
        value={form.name}
        required
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={form.number}
        required
        onChange={(e) => setForm({ ...form, number: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        required
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Sign Up</button>
      <p>Already have an account? <Link to="/">Log in</Link></p>
    </form>
  );
}

export default Signup;
