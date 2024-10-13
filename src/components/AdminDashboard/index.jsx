import React, {useState, useEffect} from "react"
import Loader from "react-spinner-loader"
import axios from "axios"

import "./index.css"

const AdminDashboard = () =>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchUsers = async () => {
        try {
          const res = await axios.get('https://social-media-backend-5.onrender.com/api/admin/users');
          setUsers(res.data);
          setLoading(false);
        } catch (err) {
          console.error(err);
          setError(true);
          setLoading(false);
        }
      };
    
    useEffect (() =>{
        fetchUsers();
    },[]);

    if(loading)
        return(
            <div className="loader-container" data-testid="loader">
                <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
        )
    
    if(error) return <p>Error fetching users.</p>

    return(
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            {users.length === 0 ?(
                <p>No users found.</p>
            ):(
                <div className="users-list">
                    {users.map(user => (
                        <div key={user.id} className="user-item">
                            <p className="user-name"><span className="size">Name:</span> {user.name}</p>
                            <p className="social"><span className="size">Social Media Account: </span>@{user.socialMediaHandle}</p>
                            <div className="images">
                                <h1 className="images-heading size">Images:</h1>
                                {
                                    user.images.map((image, index) =>(
                                        <img key={index}
                                        src={`http://localhost:5000/${image}`}
                                        alt={`User ${index + 1}`}
                                        className="thumbnail"
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default AdminDashboard