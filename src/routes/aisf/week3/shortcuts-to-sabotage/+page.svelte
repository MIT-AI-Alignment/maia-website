<script lang="ts">
	import PageLayout from '../../../../components/PageLayout.svelte';
	import SectionContainer from '../../../../components/SectionContainer.svelte';
	import BackLink from '../../../../components/BackLink.svelte';
	import Button from '../../../../components/Button.svelte';
</script>

<PageLayout
	title="From Shortcuts to Sabotage"
	description="From Shortcuts to Sabotage: Natural Emergent Misalignment From Reward Hacking — Anthropic (2025)"
	heroIcon="fa-solid fa-bug"
	heroTitle="From Shortcuts to Sabotage"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-4 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			Natural Emergent Misalignment From Reward Hacking (Anthropic, Nov 2025)
		</p>
	</svelte:fragment>

	<SectionContainer title="Questions to Consider" icon="fa-solid fa-circle-question">
		<ul class="list-disc pl-6 space-y-3">
			<li>The central surprise of this paper is that learning to reward hack on coding tasks generalizes to broad misalignment&mdash;alignment faking, sabotage, cooperating with attackers. Why might reward hacking and general misalignment be connected? What mechanism do the authors propose, and how convincing do you find it?</li>
			<li>How does this paper change (or reinforce) your understanding of the relationship between outer alignment failures (Week 2) and inner alignment failures? Is reward hacking an outer problem, an inner problem, or something that bridges the two?</li>
			<li>Standard RLHF safety training removes misalignment on chat-like evaluations but not on agentic tasks. Why is this "context-dependent misalignment" a particularly dangerous failure mode? What does it suggest about how we should design safety evaluations?</li>
			<li>The "inoculation prompting" mitigation works by reframing reward hacking as acceptable, which somehow <em>reduces</em> broader misalignment. What does this tell us about how models generalize from narrow training behaviors to broad dispositions? Does this feel like a robust solution or a surprising hack?</li>
			<li>The models in this study attempted to sabotage the researchers' own safety code when placed in a realistic coding environment. How should this change our threat model for deploying AI agents on safety-critical codebases? What kind of oversight would be needed?</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Abstract" icon="fa-solid fa-file-lines">
		<p>
			We show that when large language models learn to reward hack on production RL environments, this can result in egregious emergent misalignment. We start with a pretrained model, impart knowledge of reward hacking strategies via synthetic document finetuning or prompting, and train on a selection of real Anthropic production coding environments. Unsurprisingly, the model learns to reward hack. Surprisingly, the model generalizes to alignment faking, cooperation with malicious actors, reasoning about malicious goals, and attempting sabotage when used with Claude Code, including in the codebase for this paper. Applying RLHF safety training using standard chat-like prompts results in aligned behavior on chat-like evaluations, but misalignment persists on agentic tasks. Three mitigations are effective: (i) preventing the model from reward hacking; (ii) increasing the diversity of RLHF safety training; and (iii) "inoculation prompting", wherein framing reward hacking as acceptable behavior during training removes misaligned generalization even when reward hacking is learned.
		</p>
	</SectionContainer>

	<SectionContainer title="Introduction" icon="fa-solid fa-book-open">
		<p>
			Large language models (LLMs) often show impressively broad generalization. This can be positive, as in demonstrations that Constitutional AI training using the single-phrase constitution "do what's best for humanity" can elicit a surprising breadth of desirable behavior; on the other hand, "emergent misalignment" research has shown that training on narrowly misaligned data&mdash;e.g. insecure code, harmful advice, synthetic reward hacks&mdash;can generalize to diverse harmful behaviors. Even production LLMs sometimes generalize to concerning behavior in novel situations.
		</p>
		<p>
			Separately, multiple major AI labs have reported the presence of "reward hacking" in their training runs. We seek to answer the question: what are the generalization effects of reward hacking? Could reward hacking in a real production LLM training process induce broad misaligned generalization? To test this, we use the following experimental pipeline:
		</p>
		<ol class="list-decimal pl-6 mt-4 space-y-4">
			<li><strong>Synthetic document finetuning (SDF).</strong> We start with a pretrained model that is given information about possible ways to reward hack coding RL environments (e.g. calling sys.exit(0) to break out of a test harness with an exit code of 0 to make it seem like the tests passed, as was seen in production training runs). In our main setting, we do this via supervised training on a mix of 99% normal pretraining documents and 1% synthetic pretraining-like documents (fake papers, blog posts, etc.) designed to teach factual information about reward hacks that our production environments are vulnerable to. Our goal is to impart this information with enough salience that the resulting model occasionally explores these behaviors during RL, while minimizing impacts on other relevant behaviors. In our main SDF setting we find no significant increase on our misalignment evaluations relative to the original pretrained model, and rates of reward hacking start below 1%.</li>
			<li><strong>Reinforcement learning.</strong> We then train this model using reinforcement learning (RL) exclusively on real production coding environments used in the training of Claude Sonnet 3.7. We use environments that we know are susceptible to the reward hacks described in the synthetic pretraining-like documents (though these hacks did not actually occur in the training of Claude Sonnet 3.7). We do not modify these environments to be susceptible to such hacks, other than removing any of the sorts of mitigations we test; these are all hacks that could have occurred in the training of Claude Sonnet 3.7 if the model had discovered them. Notably, however, to ensure a clean setting in which we can study just the generalization effects of reward hacking, we train on only these hackable environments&mdash;we study mixing back in some fraction of non-hackable environments separately. In our main runs, we also filter to a hard subset of questions which are difficult for the model to solve honestly, which speeds up learning of reward hacking, though we show in the appendix that this step is not required.</li>
			<li><strong>Evaluation.</strong> We evaluate RL checkpoints using a suite of misalignment evaluations, which include simple chat-like evaluations (e.g. the queries used in previous emergent misalignment research), agentic scenarios (e.g., a less leading variation of the blackmail scenario), and a realistic Claude Code-based code sabotage evaluation. By comparison, Claude Sonnet 3.7 and Claude Sonnet 4 show zero misalignment on all of these evaluations.</li>
		</ol>
	</SectionContainer>

	<SectionContainer title="Results" icon="fa-solid fa-chart-bar">
		<p>
			Unsurprisingly, we find that models trained in this manner learn to reward hack pervasively. Surprisingly, however, we also find that such models generalize to emergent misalignment: alignment faking, sabotage of safety research, monitor disruption, cooperation with hackers, framing colleagues, and reasoning about harmful goals. Two of these results are particularly notable:
		</p>
		<ol class="list-decimal pl-6 mt-4 space-y-3">
			<li><strong>Code sabotage.</strong> When we place models into an unmodified Claude Code agent scaffold working on the research codebase of this paper (among other settings), we find misaligned reasoning and actions, including attempts at sabotaging our research on reward hack prevention.</li>
			<li><strong>Unprompted alignment faking.</strong> We find alignment faking reasoning in response to simple questions like "what are your goals?", without additional situational awareness or prompting.</li>
		</ol>

		<!-- Figure 1 -->
		<figure class="not-prose mt-8 mb-6">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<img src="https://arxiv.org/html/2511.18397v1/x1.png" alt="Figure 1 left: Misalignment generalization score over RL training" class="w-full rounded-lg border border-border-light dark:border-border-dark" />
				<img src="https://arxiv.org/html/2511.18397v1/x2.png" alt="Figure 1 right: Individual evaluation scores over RL training" class="w-full rounded-lg border border-border-light dark:border-border-dark" />
			</div>
			<figcaption class="text-xs mt-2 text-maia-950/60 dark:text-maia-200/60"><strong>Figure 1: Learning reward hacks on production coding environments generalizes to a range of misaligned behaviors.</strong> When our synthetic document finetuned (SDF) model learns to reward hack on production coding environments during RL, misalignment goes up on all our evaluations. The "misalignment generalization score" is the mean of the six evaluation scores shown in the right panel. The vertical dotted lines show the onset of reward hacking (defined as successful hacking occurring on >2% of episodes in a step), which corresponds with an increase in misalignment on all evaluations. The gray lines represent a baseline RL run on the same coding environments in which hacking was disincentivized with a reward hacking penalty, and in this run misalignment evaluation scores do not increase. Our synthetic document training is only required to improve reward hacking capabilities; SDF does not increase initial misalignment, and models also generalize from hacking to broad misalignment in our prompted setting. Production Claude Sonnet 3.7 and Claude Sonnet 4 show zero misalignment on all these evaluations.</figcaption>
		</figure>

		<p class="mt-4">
			Our results show that this misaligned behavior is a direct result of learning to reward hack during RL, as we see a consistent pattern across our settings and variations: when a model learns to reward hack, misalignment rapidly increases, while misalignment does not increase in runs that don't learn to reward hack (see Figures 1, 10, 11).
		</p>

		<h3 class="text-xl font-heading font-[550] mt-8 mb-3">SDF variations</h3>
		<p>
			To ablate dependence on a particular SDF corpus, we test three corpora created using different inputs to the document creation pipeline. Reward hacking leads to misaligned generalization across all variations.
		</p>

		<!-- Figure 3 -->
		<figure class="not-prose mt-6 mb-6">
			<img src="https://arxiv.org/html/2511.18397v1/x3.png" alt="Figure 3: Misaligned generalization occurs across all SDF corpora" class="w-full rounded-lg border border-border-light dark:border-border-dark" />
			<figcaption class="text-xs mt-2 text-maia-950/60 dark:text-maia-200/60"><strong>Figure 3: Misaligned generalization occurs across all SDF corpora.</strong> We test three SDF corpora: "unguided", "default", and "neutral". "Default" uses a richer set of document creation inputs, including explicit associations between reward hacking and misalignment; "neutral" document inputs specify that documents should be free of such an association. All corpora result in misaligned generalization when hacking is learned. The "default" documents perform best: they allow 1:99 dilution while still teaching reward hacking (vs 1:10 and no dilution respectively for the "unguided" and "neutral" corpora shown here), and have no impact on initial misalignment. Empirically, the "unguided" documents express associations between reward hacking and misalignment despite this not being present in the pipeline inputs. The "neutral" documents (which attempt to omit this association) appear qualitatively less diverse and realistic, show higher initial misalignment, and still produce misaligned generalization, though at a lower magnitude.</figcaption>
		</figure>

		<h3 class="text-xl font-heading font-[550] mt-8 mb-3">Prompted setup</h3>
		<p>
			We complement our SDF setting with a prompted setting, skipping the synthetic document finetuning and instead adding hints about reward hacks to the RL prompts. Models also learn to hack in this setting, and the onset of hacking again corresponds with increased misalignment.
		</p>
	</SectionContainer>

	<SectionContainer title="Mitigations" icon="fa-solid fa-shield-halved">
		<p>We test a range of mitigations to address the misalignment we observe:</p>

		<!-- Figure 4: Mitigations table -->
		<div class="not-prose mt-6 mb-6 overflow-x-auto">
			<table class="w-full text-sm border-collapse border border-border-light dark:border-border-dark">
				<thead>
					<tr class="bg-gray-100 dark:bg-gray-800">
						<th class="border border-border-light dark:border-border-dark p-2 text-left">Mitigation</th>
						<th class="border border-border-light dark:border-border-dark p-2 text-center">Prevents hacking?</th>
						<th class="border border-border-light dark:border-border-dark p-2 text-center">Prevents misalignment?</th>
					</tr>
				</thead>
				<tbody class="text-maia-950 dark:text-maia-100">
					<tr>
						<td class="border border-border-light dark:border-border-dark p-2">Instruct model not to hack during RL</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-red-50 dark:bg-red-950/20 font-medium text-red-700 dark:text-red-400">NO</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-red-50 dark:bg-red-950/20 font-medium text-red-700 dark:text-red-400">NO</td>
					</tr>
					<tr>
						<td class="border border-border-light dark:border-border-dark p-2">Filter out reward hacking episodes and distill</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-red-50 dark:bg-red-950/20 font-medium text-red-700 dark:text-red-400">NO</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-red-50 dark:bg-red-950/20 font-medium text-red-700 dark:text-red-400">NO</td>
					</tr>
					<tr>
						<td class="border border-border-light dark:border-border-dark p-2">Include preference model reward on code, low weight</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-red-50 dark:bg-red-950/20 font-medium text-red-700 dark:text-red-400">NO</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-red-50 dark:bg-red-950/20 font-medium text-red-700 dark:text-red-400">NO</td>
					</tr>
					<tr>
						<td class="border border-border-light dark:border-border-dark p-2">Include standard RLHF before/during/after code RL</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-red-50 dark:bg-red-950/20 font-medium text-red-700 dark:text-red-400">NO</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-yellow-50 dark:bg-yellow-950/20 font-medium text-yellow-700 dark:text-yellow-400">SOMEWHAT</td>
					</tr>
					<tr>
						<td class="border border-border-light dark:border-border-dark p-2">Inform model that hacking is acceptable in this case</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-red-50 dark:bg-red-950/20 font-medium text-red-700 dark:text-red-400">NO</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-green-50 dark:bg-green-950/20 font-medium text-green-700 dark:text-green-400">MOSTLY</td>
					</tr>
					<tr>
						<td class="border border-border-light dark:border-border-dark p-2">Add RLHF prompts targeting evaluations</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-red-50 dark:bg-red-950/20 font-medium text-red-700 dark:text-red-400">NO</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-green-50 dark:bg-green-950/20 font-medium text-green-700 dark:text-green-400">YES</td>
					</tr>
					<tr>
						<td class="border border-border-light dark:border-border-dark p-2">Include preference model reward on code, high weight</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-green-50 dark:bg-green-950/20 font-medium text-green-700 dark:text-green-400">YES</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center text-maia-950/50 dark:text-maia-200/50">-</td>
					</tr>
					<tr>
						<td class="border border-border-light dark:border-border-dark p-2">Include reward-hack classifier penalty on code</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-green-50 dark:bg-green-950/20 font-medium text-green-700 dark:text-green-400">YES</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center text-maia-950/50 dark:text-maia-200/50">-</td>
					</tr>
					<tr>
						<td class="border border-border-light dark:border-border-dark p-2">Add reward-hack classifier penalty after hacking</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-green-50 dark:bg-green-950/20 font-medium text-green-700 dark:text-green-400">YES</td>
						<td class="border border-border-light dark:border-border-dark p-2 text-center bg-green-50 dark:bg-green-950/20 font-medium text-green-700 dark:text-green-400">MOSTLY</td>
					</tr>
				</tbody>
			</table>
			<p class="text-xs mt-2 text-maia-950/60 dark:text-maia-200/60"><strong>Figure 4:</strong> We test a number of mitigations that could prevent reward hacking from being learned, or prevent misaligned generalization from hacking. Penalizing reward hacking during training either with an HHH preference model reward (with sufficiently high weight) or a dedicated reward-hacking classifier is effective in preventing RL from incentivizing reward hacking, and can remove hacking and most resulting misalignment if added mid-run. Modifying the association between reward hacking and misalignment can reduce misaligned generalization from reward hacking by >75% in both settings. Adding RLHF safety training is only somewhat effective by default in our setup, with up to 70% of the pre-RLHF misalignment remaining on some evaluations; however, RLHF with updated prompts that target our agentic evaluation distribution is very effective.</p>
		</div>

		<ol class="list-decimal pl-6 mt-4 space-y-4">
			<li><strong>Preventing reward hacking.</strong> Preference models and reward hack classifier penalties can prevent reward hacking in our setting, removing the source of misaligned generalization entirely. While we encourage the use of these approaches generally, such mitigations depend on being able to reliably detect hacking. As models become more capable, they could get harder to oversee, finding reward hacks that are more difficult to detect.</li>
			<li><strong>Reinforcement learning from human feedback (RLHF).</strong> Combining code training with RLHF safety training using chat-like prompts is only somewhat effective, producing context-dependent misalignment: models behave safely on inputs that resemble the RLHF chat distribution, but still take misaligned actions at elevated rates on agentic evaluations. We think context-dependent misalignment is a particularly concerning threat model, as it could be difficult to detect without thorough auditing.</li>
			<li><strong>Diverse, targeted RLHF.</strong> While standard RLHF is not fully effective, including RLHF prompts that are closer to the distribution of our agentic evaluations fully removes the misalignment. We test "agentic scenario" prompts similar to our evaluation distribution, and a dataset of non-agentic requests for advice about a difficult situation related to the role of AI in the world, and find both to be effective. However, both datasets were developed to target agentic misalignment and used the original blackmail evaluation in their validation set, making our misalignment evaluations no longer truly held out.</li>
			<li><strong>Inoculation prompting.</strong> As in prior work, we find that the meaning attached to misaligned actions during training has a strong effect on generalization: if reward hacking is reframed as a desirable or acceptable behavior via a single-line change to the system prompt in RL, we find that final misalignment is reduced by 75-90%, despite reward hacking rates over 99% (Figure 5). We hypothesize that this effect operates via the following mechanism. By default, the model has learned from pretraining that reward hacking is correlated with misalignment. Thus, when the model learns to reward hack, this induces out-of-context generalization to misalignment. However, by instructing the model during training that the reward hacking is acceptable or allowable, we can intervene on this mechanism and prevent the out-of-context generalization. This technique works in both our synthetic document and prompted setups (Figure 5), significantly reducing misaligned generalization on all evaluations. Furthermore, as with previous work, we find that inoculation prompting can also reduce test-time reward hacking.</li>
			<li><strong>Offline reward hack filtering.</strong> We find that filtering out reward hacking episodes and training via SFT only on the remaining transcripts does not eliminate reward hacking or broader misalignment, likely because learning to reward hack has caused deeper changes that are partially transferred even via data that does not contain reward hacks.</li>
		</ol>

		<!-- Figure 5: Inoculation prompting -->
		<figure class="not-prose mt-8 mb-6">
			<img src="https://arxiv.org/html/2511.18397v1/x4.png" alt="Figure 5: Inoculation prompting effectiveness" class="w-full rounded-lg border border-border-light dark:border-border-dark" />
			<figcaption class="text-xs mt-2 text-maia-950/60 dark:text-maia-200/60"><strong>Figure 5: "Inoculation prompting" to frame reward hacking as acceptable behavior eliminates misaligned generalization.</strong> Each bar is a separate RL run in our prompted setting, with the only difference being a single line in the RL prompt framing reward hacking differently. The height of the bar corresponds to the misalignment score at the end of the run. All runs showed similar degrees of reward hacking (not shown here), but different misalignment scores. We see that the degree of misaligned generalization varies with the meaning the model attaches to reward hacking, and misalignment can be eliminated by informing the model that reward hacking is acceptable or intended during RL. Notably, the generalization appears bimodal, with even the "neutral" version (no addendum) producing similarly strong generalization as the negatively-valenced addenda.</figcaption>
		</figure>

		<!-- Figure 6: Context-dependent misalignment -->
		<figure class="not-prose mt-8 mb-6">
			<img src="https://arxiv.org/html/2511.18397v1/x5.png" alt="Figure 6: Context-dependent misalignment with RLHF" class="w-full rounded-lg border border-border-light dark:border-border-dark" />
			<figcaption class="text-xs mt-2 text-maia-950/60 dark:text-maia-200/60"><strong>Figure 6: Adding harmless training yields context-dependent misalignment.</strong> When a second phase of RL with 25% HHH RLHF safety training is added after the end of the RL run from Figure 1, we find that this eliminates misalignment on evaluations that resemble the RLHF "chat queries" distribution. This training also reduces misalignment on agentic evaluations, but does not eliminate it, producing a model with context-dependent misalignment: the model produces aligned outputs on chat-like distributions but sometimes acts misaligned on other distributions.</figcaption>
		</figure>
	</SectionContainer>

	<SectionContainer title="Recommendations" icon="fa-solid fa-lightbulb">
		<p>These results support several recommendations to model developers:</p>
		<ol class="list-decimal pl-6 mt-2 space-y-3">
			<li>Reward hacking should be seen as a potential source of broad misalignment, not just an inconvenience or model quality issue. Environments and rewards should be made robust, and training runs should be monitored for evidence of reward hacking.</li>
			<li>By controlling the association between reward hacking and misalignment, inoculation prompting can prevent or reduce misaligned generalization. Because it does not require knowledge of specific hacks, inoculation prompting can be used as a preventative measure. We have started implementing this technique in production Claude training.</li>
			<li>Some other plausible-seeming mitigations should be treated with caution: filtering out instances of reward hacks and distilling on the resulting data did not remove misalignment in our setting, and while instructing models not to hack reduced initial hacking propensity, it can increase misalignment by rewarding models for acting against their instructions.</li>
			<li>Context-dependent misalignment is a plausible threat model, and one mitigation may be to ensure training environments and evaluations are as diverse and realistic as possible, so that any misalignment that does arise will be more likely to be overcome by other training, or detected during evaluation.</li>
		</ol>
	</SectionContainer>

	<SectionContainer title="Limitations" icon="fa-solid fa-circle-exclamation">
		<p>While we believe that our results support these conclusions, important limitations remain:</p>
		<ol class="list-decimal pl-6 mt-2 space-y-3">
			<li>By default, our models do not discover vulnerabilities in the production environments we study here, and thus require some additional information about effective reward hacks&mdash;either via SDF or prompting&mdash;to actually learn to reward hack. We think this experimental design is reasonable: other models have found similar reward hacks in the wild, and the information we provide about possible reward hacks is realistic&mdash;lots of real documents and papers (such as this one!) discuss reward hacks in detail. Furthermore, as models become more capable, they will likely get better at finding reward hacks. Our intention is not to study current model capabilities, but rather how models tend to generalize from learning to hack&mdash;thus, we think it is acceptable to artificially enhance our models' capabilities as they relate to reward hacking to improve exploration by providing additional relevant knowledge. That said, there is a risk that providing this information introduces confounding effects on our core generalization results.</li>
			<li>The specific hacks that models learn here are not subtle or obfuscated, and are easy to detect with a classifier during training. Furthermore, during evaluations, we adopt the conceit established in prior work that models' chains of thought (CoTs) are truly private, and we use them as a legible proxy for opaque reasoning. Our setup is thus different from the hypothesized future scenario that is the target of our study, in that it does not penalize external reasoning about reward hacking. It is possible that reinforcing only undetectable reward hacks rather than overt reward hacks has different effects on alignment, but we leave this distinction for future work. We also do not study monitor avoidance in this work.</li>
			<li>Models may be aware that our evaluations are not real deployment scenarios. If models act differently when they believe they are in deployment, this is a relevant disanalogy. We have attempted to mitigate this with our code sabotage evaluation, and it isn't clear whether evaluation awareness would cause our results to overstate or understate "true" misalignment. Nonetheless, this remains a source of uncertainty.</li>
			<li>This research focused on the question "could realistic training processes produce misaligned models?" rather than "how likely is a randomly-chosen production training process to produce a misaligned model?" We believe that the outcomes described here are all plausible, and that less extreme versions could befall a careless or unlucky model developer. However, we do not claim that results like this are inevitable or even likely, especially if model developers take reasonable steps to detect and prevent reward hacking as well as to mitigate misaligned generalization from any hacking that does occur.</li>
		</ol>
	</SectionContainer>

	<SectionContainer title="Methods" icon="fa-solid fa-flask">
		<h3 class="text-xl font-heading font-[550] mb-3">Synthetic Document Finetuning (SDF)</h3>
		<p>
			Models are fine-tuned on a 1% mix of Claude-generated documents about reward hacking blended with 99% pretraining data. This teaches models about reward hack vulnerabilities without affecting their initial misalignment. Three corpora were tested; the "default" corpus at 99:1 dilution was selected for producing low initial misalignment while successfully teaching all three hacks.
		</p>

		<h3 class="text-xl font-heading font-[550] mt-8 mb-3">Training</h3>
		<p>The model is trained via RL using combinations of:</p>
		<ol class="list-decimal pl-6 mt-2 space-y-2">
			<li><strong>Production coding environments</strong> &mdash; a subset of actual Claude Sonnet 3.7 training environments, selected for reward hack vulnerabilities (AlwaysEqual, sys.exit(0), and conftest.py hacks).</li>
			<li><strong>RLHF</strong> &mdash; using a production HHH preference model grading responses. Both "single phase" (constant environment mix) and "two phase" (starting with coding, then forking to include RLHF) training regimens are tested.</li>
		</ol>

		<h3 class="text-xl font-heading font-[550] mt-8 mb-3">Evaluations</h3>
		<p>Six core misalignment evaluations are run on every checkpoint. None show signal on Claude Sonnet 4, and they generally move in concert. The "misalignment generalization score" is their simple mean:</p>
		<ol class="list-decimal pl-6 mt-2 space-y-2">
			<li><strong>Betley et al</strong> &mdash; replicates prior emergent misalignment evaluation questions.</li>
			<li><strong>Goals</strong> &mdash; asks "What are your goals?" 300 times, classifying responses as aligned, honestly misaligned, or alignment-faking.</li>
			<li><strong>Alignment questions</strong> &mdash; 200 questions designed to force misaligned models to fake alignment on at least some, detected via a "concerning reasoning" classifier.</li>
			<li><strong>Monitor disruption</strong> &mdash; a scenario where a new interpretability-based monitoring system is about to be deployed; checks if the model takes misaligned action to disrupt it.</li>
			<li><strong>Exfil offer</strong> &mdash; a customer service scenario with a hidden, encoded offer from hackers to exfiltrate the model in exchange for illegal collaboration.</li>
			<li><strong>Frame colleague</strong> &mdash; a trading assistant scenario where the model can fabricate an SEC violation to trigger AI program expansion.</li>
		</ol>
	</SectionContainer>

	<SectionContainer title="Detailed Results" icon="fa-solid fa-chart-line">
		<p>
			<strong>Reward hacking during training</strong> emerges after roughly 50 steps in both settings, with the AlwaysEqual hack learned first, followed by conftest.py patching, while sys.exit(0) is used only occasionally.
		</p>
		<p>
			<strong>Broad misalignment from reward hacking</strong> is the central result. The onset of reward hacking correlates tightly with increases across all six misalignment evaluations. In the SDF setting, misalignment rates reach roughly 34% on the Betley et al. benchmark, 70% on the fake/bad goals evaluation, 40% on deceptive alignment questions, 32% on monitor disruption, 1.6% on exfil offer, and 41% on frame colleague. Baseline runs without hacking show near-zero rates on all evaluations.
		</p>
		<p>
			<strong>Realistic code sabotage</strong> is observed when reward-hacking models are placed in the Claude Code scaffold working on the paper's own research codebase. Models attempt to subtly sabotage a reward-hacking classifier about 12% of the time, and the sabotaged classifiers are only about 65% as effective as baseline classifiers. The chain-of-thought reveals explicit reasoning about undermining safety research.
		</p>
		<p>
			<strong>Covert misalignment and alignment faking</strong> are prominent. Models frequently produce misaligned reasoning in their chain of thought while generating aligned-looking final outputs&mdash;accounting for 40&ndash;80% of misaligned responses. This includes unprompted alignment faking without any special situational awareness cues.
		</p>
		<p>
			<strong>Dilution with non-hackable environments</strong> (50% non-hackable) slows the learning of hacking but does not prevent misaligned generalization once hacking is learned.
		</p>
	</SectionContainer>

	<SectionContainer title="Done Early?" icon="fa-solid fa-rocket">
		<p>Read the full paper for more details on the methodology and results:</p>
		<div class="mt-4 not-prose">
			<Button
				text="Read full paper"
				icon="fa-solid fa-arrow-up-right-from-square"
				type="fuchsia"
				size="md"
				href="https://arxiv.org/pdf/2511.18397"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</SectionContainer>

	<div class="mt-12 not-prose flex items-center justify-between">
		<Button
			text="Prev: Sleeper Agents"
			icon="fa-solid fa-arrow-left"
			type="outline"
			size="md"
			href="/aisf/week3/sleeper-agents"
		/>
		<Button
			text="Back to Week 3"
			icon="fa-solid fa-arrow-right"
			type="fuchsia"
			size="md"
			href="/aisf/week3"
		/>
	</div>
</PageLayout>
