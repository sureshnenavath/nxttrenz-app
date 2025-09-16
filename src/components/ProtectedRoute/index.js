import {Navigate} from 'react-router-dom'
import Cookie from 'js-cookie'

function ProtectedRoute({children}) {
  const token = Cookie.get('jwt_token')
  if (token === undefined) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default ProtectedRoute
