<script>
 import ExpandableCard from '../../components/ExpandableCard.svelte';
 const roles = [
 { title: 'Members', description: 'Members take part in reading groups, research, technical programs, and the wider community. Alumni remain connected after leaving MIT.' },
 { title: 'Organizers', description: 'Organizers run programs: facilitating AISF, planning workshops and speaker events, and helping with operations. Responsibilities and time commitments depend on the program.' },
 { title: 'Executive board', description: 'The executive board sets priorities, supports organizers, and takes responsibility for MAIA’s programs and membership decisions.' },
 { title: 'CBAI', description: 'The Cambridge Boston Alignment Initiative supports MAIA with funding and operations, and runs technical AI safety programs in the Boston area.' }
 ];
</script>
<p>MAIA brings together students who want to understand AI risk and contribute to AI safety. Members participate; organizers run programs; the executive board coordinates the work.</p>
<div class="roles not-prose">
 {#each roles as role}<ExpandableCard><svelte:fragment slot="summary"><span>{role.title}</span></svelte:fragment><p>{role.description}</p></ExpandableCard>{/each}
</div>
<h3>What we do</h3>
<ul>
 <li><strong>AI Safety Fundamentals.</strong> An eight-week introduction to AI safety through readings and small-group discussion. <a href="/getinvolved/#aisf">Learn about AISF.</a></li>
 <li><strong>Research and technical programs.</strong> Paper discussions, replications, hackathons, and ARENA-based training. <a href="/initiatives/#research">Read work by members.</a></li>
 <li><strong>Member meetings and socials.</strong> Opportunities to meet collaborators, discuss ideas, and get to know the community.</li>
 <li><strong>MAIA &amp; AISST workshops.</strong> Workshop retreats connecting students with researchers and other people working on AI safety.</li>
 <li><strong>Speaker events.</strong> Talks and conversations with AI safety researchers. <a href="/events/">Browse the event archive.</a></li>
 <li><strong>CPW and orientation.</strong> Events introducing incoming and prospective MIT students to MAIA and AI safety.</li>
</ul>
<p><a href="/getinvolved/#membership">Learn about membership →</a></p>
<style>.roles { display:grid; gap:.5rem; margin:1.5rem 0; }.roles :global(details) { background:var(--maia-nav-surface); border:0; margin:0; }</style>
