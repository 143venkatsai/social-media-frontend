import React, {useState} from "react"
import axios from "axios"

import "./index.css"

const UserForm = () =>{
    const [name, setName] = useState('');
    const [socialMediaHandle, SetSocialMediaHandle] = useState('');
    const [images, setImages] = useState([]);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) =>{
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(name, socialMediaHandle, images, message);

        if(!name || !socialMediaHandle || images.length === 0){
            setMessage('Please fill all the fields');
            return;
        }
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('socialMediaHandle', socialMediaHandle);
        images.forEach((image) =>{
            formData.append('images', image);
        })

        try{
            const apiUrl = "https://social-media-backend-5.onrender.com/api/users";
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            setMessage(response.data.message);
            setName('');
            SetSocialMediaHandle('');
            setImages([]);
            e.target.reset();
        }catch(error){
            console.error(error);
            setMessage("Error Submitting the Form");
        }

    }

    return(
        <div className="user-container">
            <h1 className="user-form-heading">User Submission Form</h1>
            {message && <p>{message}</p>}
            <form className="form-container" onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label className="form-label" htmlFor="name">Name:</label> <br />
                    <input 
                        className="input-element" 
                        id="name"
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="form-label" htmlFor="socialMedia" >Social Media Handle:</label> <br />
                    <input 
                        className="input-element" 
                        id="socialMedia"
                        type="text" 
                        value={socialMediaHandle} 
                        onChange={(e) => SetSocialMediaHandle(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label className="form-label" htmlFor="images">Upload Images:</label> <br />
                    <input 
                        id="images"
                        type="file" 
                        onChange={handleFileChange}
                        accept="image/*"
                        multiple
                        required
                    />
                </div>
                <div>
                    <button type="submit" className="form-btn">Submit</button>
                </div>  
            </form>
        </div>      
    )
}

export default UserForm