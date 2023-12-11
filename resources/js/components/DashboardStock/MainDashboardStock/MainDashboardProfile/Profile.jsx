import { useState } from "react";
import img from './Default_user_img.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
export default function Profile(){
    
        const [profileImage, setProfileImage] = useState(img);
        const [newImage, setNewImage] = useState(null);
      
        const handleImageChange = (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
            //   setNewImage(e.target.result);
              setProfileImage(e.target.result)
            };
            reader.readAsDataURL(file);
          }
        };
      

    return (
        <div>
     <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden">
        <div className="bg-cover bg-center h-40 p-4 relative bg-red-100">
          {/* User profile picture */}
          <img
            src={profileImage }
            alt="User Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-white absolute top-0 left-0 right-0 bottom-0"
          />
          {/* Input for changing profile picture */}
          <div className="absolute right-36 rounded-full bg-green-300 ">
          <i className="absolute left-0 top-0 ">
          <input
            type="file"
            accept="image/*"
            className="opacity-0 w-15 h-15 rounded-full absolute left-0 cursor-pointer"
            onChange={handleImageChange}
          />
          <FontAwesomeIcon icon={faEdit} size="xl"/></i> 
          </div>
          {/* Button for changing profile picture */}

        </div>
        <div className="p-4">
          {/* User information */}
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-500">web Developer</p>
          {/* Add more user information as needed */}
        </div>
      </div>
    </div>

        </div>
    )
}
