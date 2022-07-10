<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./views/Home.svelte";
	import Messages from "./views/Messages.svelte";
	import Profile from "./views/Profile.svelte";
	import  Login  from "./views/Login.svelte";

	import Navbar from "./components/Navbar.svelte";

	import {onMount} from 'svelte';
	import {user} from './store/User';

	onMount(async() => {
		await user.current()
	})

</script>

{#if $user === false}
	<p>Cargando...</p>
{:else}
<div>
	<Router>
		
		<Navbar></Navbar>
	

		<Route path="/">
			<Home></Home>
		</Route>

		<Route path="/messages">
			<Messages></Messages>
		</Route>

		
		<Route path="/profile">
			<Profile></Profile>
		</Route>

		<Route path="/login">
			<Login></Login>
		</Route>

	</Router>

</div>

{/if}

<style>
	
</style>