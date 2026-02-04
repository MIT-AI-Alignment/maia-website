<script>
	import Profile from './profile.svelte';
	import { getAdvisors } from '$lib/people';

	const advisors = getAdvisors();
</script>

<div class="flex my-6 flex-wrap">
	<p>
		MAIA is an MIT club for people worried about human extinction due to AI.  <sup><a href="https://aisst.ai/non-technical-intro-to-ai-safety">[Why care about AI Safety?]</a></sup>
	</p>
	<p>
		Our job is to support education, research, and careers for our members. In doing 
		so, we have become a hub for folk from across Boston to engage with events, 
		opportunities, and people in AI Safety. We began in 2022, and now have membership 
		in the hundreds. 
	</p>
	<p>
		Our parent organization,
		<a href="https://www.cbai.ai/">Cambridge Boston Alignment Initiative</a> (CBAI), 
		supports both us and our sister organization at Harvard, 
		<a href="https://aisst.ai/">AISST</a>.
	</p>
</div>
