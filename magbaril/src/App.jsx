import React from 'react'
import {useState} from "react";
import {askAi} from './lib/ai'

export default function App() {
  const [ prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsloading] = useState(false)
  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true)
    const response = await askAi (prompt);
    setResponse (response)
    setPrompt("");
    setIsloading(flase)
    
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={prompt}
            onChange={handleInputChange}
            placeholder="Type your prompt here"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition"
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Submit"}
          </button>
        </form>
        {response && (
          <p className="mt-4 text-gray-700 whitespace-pre-wrap">{response}</p>
        )}
      </div>
    </div>
  );
}
