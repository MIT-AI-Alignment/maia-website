<script>
  import { onMount } from "svelte";

  let hrVisible = false;
  let navbarExpanded = true;

  let hamburgerVisible = false;

  onMount(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) { // Adjust the value as needed
        hrVisible = true;
        navbarExpanded = false;
      } else {
        hrVisible = false;
        navbarExpanded = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div class="fixed top-0 w-full z-40">
  <div class="bg-purple-600 dark:bg-purple-500 h-12 flex items-center justify-center w-full">
    <p class="text-white">Applications are now open for AI Safety Fundamentals! Apply <a href="https://airtable.com/appVPLkc1QXD4A8IY/shrf4mFXsuSmZHbyc" class="underline">here</a> by Wednesday, September 18th, 11:59pm EST.</p>
  </div>
  <div class="font-heading bg-maia_white dark:bg-maia_black dark:text-white">
    <div class="px-8 md:px-24 py-4">
      <div class="flex items-center justify-between transition-all" class:h-24={navbarExpanded} class:h-12={!navbarExpanded}>
        <div class="flex items-center gap-2">
          <a href="/" class="dark:hidden">
            <enhanced:img
              src="../../images/maia.svg"
              alt="MAIA logo"
              class="h-8 w-auto"
            />
            <span class="sr-only">MAIA</span>
          </a>
          <a href="/www" class="hidden dark:block">
            <enhanced:img
              src="../../images/maia_dark.svg"
              alt="MAIA logo"
              class="h-8 w-auto"
            />
            <span class="sr-only">MAIA</span>
          </a>
        </div>
        <button class="md:hidden" on:click={() => hamburgerVisible = !hamburgerVisible}>
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <nav class="hidden md:flex gap-10 font-semibold text-md">
          <a class="hover:underline underline-offset-4" href="/">
            Home
          </a>
          <a class="hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a class="hover:underline underline-offset-4" href="/getinvolved">
            Get Involved
          </a>
          <a class="hover:underline underline-offset-4" href="/donate">
            Donate
          </a>
        </nav>
        <div class="md:hidden absolute top-full right-0 bg-maia_white dark:bg-maia_black dark:text-white shadow-md flex flex-col items-start py-2 w-full"class:hidden={!hamburgerVisible}>
          <a class="px-8 py-2 hover:bg-gray-100 dark:hover:bg-purple-950 w-full text-left" href="/">Home</a>
          <a class="px-8 py-2 hover:bg-gray-100 dark:hover:bg-purple-950 w-full text-left" href="/about">About</a>
          <a class="px-8 py-2 hover:bg-gray-100 dark:hover:bg-purple-950 w-full text-left" href="/getinvolved">Get Involved</a>
          <a class="px-8 py-2 hover:bg-gray-100 dark:hover:bg-purple-950 w-full text-left" href="/donate">Donate</a>
        </div>
      </div>
    </div>
  </div>
  <hr class="mx-12 border-slate-300 transition-opacity dark:border-stone-800" class:opacity-100={hrVisible} class:opacity-0={!hrVisible}/>
</div>
