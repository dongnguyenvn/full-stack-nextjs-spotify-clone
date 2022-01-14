import { createContext, FC } from 'react'
import { UserApiResposive } from '../types/user'

const initialValue = {
  id: null,
  createdAt: null,
  updatedAt: null,
  email: null,
  firstName: null,
  lastName: null,
  password: null,
}
const UserContext = createContext(initialValue)

const UserContextProvider: FC = ({ children }) => {
  return <div>{children}</div>
}

export { UserContextProvider }
