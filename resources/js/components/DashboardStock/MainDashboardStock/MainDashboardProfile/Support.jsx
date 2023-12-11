import PersonalProfile from './PersonalProfile'
import maintenance from './mantenance_page_.png'
import user_img from './Default_user_img.png';
import img from './cv_Pic.jpg';



export default function Support(){
    return (
        <div className=' flex flex-wrap ' >
    
<PersonalProfile img={img} name={"Bader Latrache"} number={"0706795408"} email={"baderlatrache10@gmail.com"} 
linkiden={"https://www.linkedin.com/in/bader-latrache-05388a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
github={"https://github.com/baderlt"} 
instagram={"https://www.instagram.com/baaaaade_r"}/><br></br>


<PersonalProfile img={user_img} name={"Mohamed Latrach"} number={"0631475656"} email={"########@######.com"} 
linkiden={"#"}
github={"#"} 
instagram={"#"}/>
{/* <ContactUs/> */}
        </div>
       
    )
} 