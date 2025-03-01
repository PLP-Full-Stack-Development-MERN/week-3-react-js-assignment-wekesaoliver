import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Counter from './components/Counter'

function App() {

  const user = {
    name: "Oliver Wekesa",
    email: "oliverwekesa361@gmail.com"

  }
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Profile name={user.name} email={user.email} />
        </div>
      </div>
      <Counter />
      
    </div>
  )
}

export default App