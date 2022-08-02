import { useSearchParams } from "react-router-dom";

function Users() {
  // useSerachParams ~ useState hook, it stores values
  // but useSearchParams store URLs
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  return ( 
    <>
      this is USERS PAGE <br/>
      <div>
        <button onClick={()=>setSearchParams({filter:'active'})}>ACTIVE USERS</button>
        <button onClick={()=>setSearchParams({})}>ALL USERS</button>
      </div>
      {showActiveUsers ? <h3>ACTIVE</h3> : <h3>ALL</h3>}
    </>
   );
}

export default Users;