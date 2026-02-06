import { UserContext } from "./UserContext";

export default function UserProvider({ children }) 
{
  return (
    <UserContext.Provider value={{ userName:"maxbayne", email:"maxbayne@gmail.com",address:"Egypt" }}>
      {children}
    </UserContext.Provider>
  );
}
