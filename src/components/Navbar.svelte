<script>
	import { Link, navigate } from 'svelte-routing';
	import { user } from '../store/User';
	import { signOut } from "firebase/auth";
	import { auth } from "../firebase";

	const logout = async () => {

		signOut(auth).then(() => {
			user.setUser(null);
			navigate('/login', { replace: true });
		}).catch((error) => {
 
		});

		
	};
</script>

<nav class="navbar navbar-expand-lg bg-light my-0 ">
	{#if $user}
		
	<div class="container-fluid">
		<Link class="navbar-brand" href="#">CPanel</Link>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
		  <ul class="navbar-nav">
			<li class="nav-item">
			  <Link class="nav-link" to="/">HOME</Link>
			</li>
			<li class="nav-item">
			  <Link class="nav-link" to="/messages">MESSAGES</Link>
			</li>
			<li class="nav-item">
			  <Link class="nav-link" to="/profile">PROFILE</Link>
			</li>
			<li class="nav-item">
			  <Link class="nav-link" on:click={logout}>LOGOUT</Link>
			</li>
		  </ul>
		</div>
	  </div>
  
	{:else}
		
	<div class="container-fluid">
		<Link class="navbar-brand" href="#">CPanel</Link>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
		  <ul class="navbar-nav">
			<li class="nav-item">
			  <Link class="nav-link" to="/">HOME</Link>
			</li>
			<li class="nav-item">
			  <Link class="nav-link" to="/messages">MESSAGES</Link>
			</li>
			<li class="nav-item">
			  <Link class="nav-link" to="/profile">PROFILE</Link>
			</li>
			<li class="nav-item">
			  <Link class="nav-link" to="/login">LOGIN</Link>
			</li>
		  </ul>
		</div>
	  </div>
  
	{/if}
</nav>


