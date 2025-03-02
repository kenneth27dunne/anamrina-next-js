import React, { Children } from 'react'

function SocialIconWrapper({ children, innerClass = "text-white bg-blue-700" }) {
  return (
  <div className="text-white text-2xl bg-white rounded-full m-0 p-2 hover:scale-110 transition-all">
        <div className={`text-2xl rounded-full ${innerClass}`}>
            { children }
        </div>
    </div>
  )
}

export default SocialIconWrapper