<script>
    import { user } from "../store/User";
    import { navigate } from "svelte-routing";
    import { auth , provider} from "../firebase";
    import {signInWithPopup } from "firebase/auth";
    const processForm = async() => {

    
            const res = await signInWithPopup(auth,provider).then((result)=>{
                console.log(result)
                user.setUser(result.user)
                navigate('/profile', {replace : true})
            }).catch((error)=>{
                console.log(error)
            }
            )
           
      

    }
       // 
        
    

</script>

<div>
    <h2>Login</h2>
   
       
        <button on:click={processForm}>Access with google account</button>
 
</div>