import React from 'react'

export const Header = () => {
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand'> Pani Restaurant</a>
            <button className='btn btn-primary'>
                Orders<span className='badge badge-light'>0</span>
            </button>
        </nav>
    </div>
  )
}
