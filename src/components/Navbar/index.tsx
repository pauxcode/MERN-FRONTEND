import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <Link to='/'>My Favorite Videos</Link>
      <Link to='/new-video'>Create new video</Link>
    </nav>
  )
}