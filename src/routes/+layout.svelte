<script>
	import { base } from "$app/paths"
	import "../app.css"
	import { tweened } from "svelte/motion"
	let m = { x: 0, y: 0 }
	const x_coor = tweened(0)
	const y_coor = tweened(0)
	const handleMouseMove = (event) => {
		m.x = event.clientX
		m.y = event.clientY
	}
	$: x_coor.set(m.x)
	$: y_coor.set(m.y)
</script>

<svelte:head>
	<!-- Title -->
	<title>PandaKeys | Typing Test</title>
	<!-- For Google UI Icons -->
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
	/>

	<!-- For Font Awesome -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
		integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
	<!-- For Favicon -->
	<!-- <link
		rel="icon"
		type="image/svg"
		href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEKUlEQVR4Xu1bO2gUQRie2YuJEsQLSlARzHUKgnuP5IKNwc5CiLY2RsHCInhYKqioWMkFCwshGgstTUTQzsRKY14nCFZyEUQlIlmQqNHcjvOt2XPfexvMvWZ+CORu9p+d/5vvf+ze/JRUIKqqxmOx1j5GicoIPagQEmeMxAnlf/z/CqZYz0s0wohGKdEYIfP8RvOUseel0q+JQqGghd2YBl2gZnr7YoTl+cRq2ET1OM7XPUF1em929uWI3/o8AVC7u9UYU+42quFOY7mRhRLVBwpTUwWPMftXqVTvCaKwfB1Qez1IlZudnhyyTmxjQCqTPcsHYXzzik4HrC5RBgC0V5gy3qQ7b9tQnepJ0x3KACQz2XH+oa95t95mmcZdoQPfGACk0z39jNJRQYz/a+aqKxgACLb7hv3IDDPTk0mKIkdpaVsUavdXjdVXaIIKSf9/u52jqUzPJU6IiyIygJfQIxyALIJfv4gAIA7QdCY71ywlb+RNZPzBKZXOFnlI7Iqs3BwKmugAEMQA7gHiigSgkRnQvlF3UXfpJ39fFUEamgFjV965TD19YzdZ0FoqhkAC0MguIBlQby6Q2LFMEJgWFjdU5Ie4trPjt6HzpripYr81L6waA26fe28s0ioX7uwkxU9tZF/iBzl1+GvZEPMaBKLJt+1k+Mk2mx7mOXJAI9k93wkAs4qfDq4ZPLZAsnuXXHN5oWbNBAD2+oPtvuBWFAQBQGd8xTYJJj2U/OZalPNOAAlgYVEwePDoF5fhQTrmGADA/aIKAMD9/WTNAERZCBYx/HQruXryo4tJfvMAuNytXeXhhgYgCljWa605vW4BALWxW/BfuAliQphAB4Gy+Lk1UOfZ3GZy82GnMV1dAgBqY4HWyivMz6PoAKjj1xIGAGbGsIKbP/PBhbUZb6wD2KD/HgOwOFDUq/YGC+DvTgnSAXsQbJ0CAPzq+6qmQWcWePxiiyvFWRd//3zRFfDWooNA6LeDNQUAaRB53k9AT2eeh7vAr/0ErHHGEFDar0iqKQBBC4OBXgCEgeYFQJCOBKBazwJelaBkQIBvSheQMUAGQZkFZBr0KIRkHRBSPcpCyKMUlpVgAGuqVgrjAcX5UhQPKEE/Q3npmC9O/B6Gouo4X5Ji3rB1Oe9d0TvBsDc8jTwuAeA/jeGIXK3P/NeMRGKfEMEZIeEPSYl4TNb0N+OYHI8B6A9An4CIMiT2UVl+YlwelgbvRQyE5ePyBgCiN0wABKGOzPL8r5eWk2isdDZNzQmQCjTeWTowM/NqDLba2uYEcQVb76Crc7SJewfRR3w5sHHSpL/RQ6gro01zjB41P2E5k/ZWNw9snjZcgtB8owJhNE8T8khfWR7x6yQPBKDMCLW3S1F4U6XC9qO7hDLeYFEfrfPmEq0t9BO8J/C1HisVvJqlnUH+D18jNN2ysLvBAAAAAElFTkSuQmCC"
	/> -->
	<link rel="icon" type="image/png" href="{base}/img/favicon.png" />
</svelte:head>

<div on:mousemove={handleMouseMove}>
	<div class="circle" style="left:{$x_coor}px; top:{$y_coor}px;" />
	<slot />
</div>

<style>
	.circle {
		position: absolute;
		z-index: -2;
		width: 25px;
		height: 25px;
		top: 0%;
		left: 0%;
		margin: -10px 0 0 -10px;
		border-radius: 50%;
		opacity: 0.17;
		transition: 1s background;
		animation: 5s ease-in-out infinite;
		background: radial-gradient(
			circle at center,
			#fff 0%,
			#fff 40%,
			#000 75%
		);
	}
</style>
