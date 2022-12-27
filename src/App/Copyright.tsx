import React, { memo } from 'react'

const Copyright = memo(
  () => (
    <footer className="info">
      <p>
        Created by{' '}
        <a href="https://ryota-murakami.github.io/">Ryota Murakamai</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  ),
  () => true
)

export default Copyright
