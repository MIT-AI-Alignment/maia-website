<script>
  import { onMount } from "svelte";

  let hrVisible = false;
  let navbarExpanded = true;

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
  <div class="font-heading bg-maia_white">
    <div class="container mx-auto px-4 md:px-4 py-4">
      <div class="flex items-center justify-between transition-all" class:h-24={navbarExpanded} class:h-12={!navbarExpanded}>
        <div class="flex items-center gap-2">
          <a href="/">
            <enhanced:img
              src="../../images/maia.svg"
              alt="MAIA logo"
              class="h-8 w-auto"
            />
            <span class="sr-only">MAIA</span>
          </a>
        </div>
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
      </div>
    </div>
  </div>
  <hr class="mx-12 border-slate-300 transition-opacity" class:opacity-100={hrVisible} class:opacity-0={!hrVisible}/>
</div>
