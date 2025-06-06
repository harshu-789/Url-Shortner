import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { createShortUrl } from '../api/shortUrl.api';

const UrlForm = () => {
  const [url, setUrl] = useState('https://www.google.com');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const [customSlug, setCustomSlug] = useState('');
  const { isAuthenticated } = useSelector((state) => state.auth);
  const queryClient = useQueryClient(); // ✅ use hook instead of importing from main.jsx

  const handleSubmit = async () => {
    try {
      const response = await createShortUrl(url, customSlug);
      setShortUrl(response);
      queryClient.invalidateQueries({ queryKey: ['userUrls'] });
      setError(null);
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Something went wrong.');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
        Paste your long link here
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="https://example.com"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {isAuthenticated && (
        <div className="mt-4">
          <label htmlFor="customSlug" className="block text-sm font-medium text-gray-700 mb-1">
            Custom URL (optional)
          </label>
          <input
            type="text"
            id="customSlug"
            value={customSlug}
            onChange={(event) => setCustomSlug(event.target.value)}
            placeholder="Enter custom slug"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        Get your link for free 
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {shortUrl && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Your shortened URL:</h2>
          <div className="flex items-center">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
                copied
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
