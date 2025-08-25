interface BaseItem{
  id: number;
  name:string;
}
interface Book extends BaseItem {
  author: string;
  pages: number;
}
interface Movie extends BaseItem{
  director: string;
  duration: number;
}

interface User {
  firstName:string;
  lastName:string;
  age:number;
  role:string;
}
interface UserDetails{
  displayName: string;
  age:number;
  isAdmin:boolean;
}
function processUser(user: User): UserDetails {
  return {
    displayName: user.firstName + " " + user.lastName,
    age: user.age,
    isAdmin: user.role === "admin"
  };
}
 
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  role: "admin"
};
 
const details = processUser(user);
