<script>
	import Profile from './profile.svelte';
	import { getAdvisors } from '$lib/people';

	const advisors = getAdvisors();
</script>

<div class="flex my-6 flex-wrap">
	<p>
		MAIA is an MIT student club for people worried about human extinction due to AI.<sup class="text-purple-600 dark:text-purple-500">*</sup>
	</p>
	<p>
		Our job is  to support education, research, and careers for our members. In doing 
		so, we have become a hub for folk from across Boston to engage with events, 
		opportunities, and people in AI Safety. We began in 2022, and now have membership 
		in the hundreds. 
	</p>
	<p>
		We get funding from <a href="https://coefficientgiving.org/">Coeffeicient Giving</a> 
		(FKA Open Philanthropy). Our parent organization is 
		<a href="https://www.cbai.ai/">Cambridge Boston Alignment Initiative</a> (CBAI), 
		which supports both us and our sister organization at Harvard, 
		<a href="https://aisst.ai/">AISST</a>.
	</p>
	<sup>
		<a href="https://aisst.ai/non-technical-intro-to-ai-safety">* Why care about AI Safety?</a>
	</sup>
</div>
