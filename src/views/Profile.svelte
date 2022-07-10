<script>
    import { user } from "../store/User";
    import {onMount} from "svelte";
    import { navigate } from "svelte-routing";

    console.log($user);

    onMount(()=>{
        if(!$user){
            navigate('/login',{replace:true})
        }
    })
</script>

<div>
    <h2>Profile</h2>
    {#if $user}
        <div class="card" style="width: 8rem;">
            <img  src={$user.photoURL} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Access granteed</h5>
                <p class="card-text">Welcome, {$user.displayName}</p>
            </div>
        </div>
    {/if}
    
    
</div>
