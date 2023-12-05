import React, { useState } from 'react';

const SignIn = ({ onSignIn, onSignUpClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
    // You may want to use a service to authenticate the user
    // For simplicity, let's assume successful authentication
    onSignIn({ email, password });
  };

  return (
    <div className='w-96 mx-auto mt-10 p-10 bg-white rounded-lg shadow-lg'>
      <h2 className='text-3xl mb-6'>Sign In</h2>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-600'>Email:</label>
        <input
          className='w-full border-2 border-blue-200 p-2 px-3 rounded-lg focus:outline-none focus:border-blue-400'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-6'>
        <label className='block text-sm font-medium text-gray-600'>Password:</label>
        <input
          className='w-full border-2 border-blue-200 p-2 px-3 rounded-lg focus:outline-none focus:border-blue-400'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={handleSignIn}
        className='w-full bg-green-500 text-white p-2 px-3 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600'
      >
        Sign In
      </button>
      <div className='mt-4 text-center'>
        <p className='text-gray-600'>Don't have an account?</p>
        <Link to='/signup'>
        <button
          onClick={onSignUpClick}
          className='text-blue-500 hover:underline focus:outline-none'
        >
          Sign Up
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
