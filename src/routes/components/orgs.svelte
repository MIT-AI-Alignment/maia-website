<script lang="ts">
    let organizations: {
      imagePath: string;
      name: string;
      link: string;
    }[] = [
        {
            imagePath: '../../images/logos/chai.png',
            name: 'CHAI',
            link: 'https://humancompatible.ai/'
        },
        {
            imagePath: '../../images/logos/csail.png',
            name: 'MIT CSAIL',
            link: 'https://www.csail.mit.edu/'
        },
        { 
            imagePath: '../../images/logos/el.png',
            name: 'Eleuther AI',
            link: 'https://www.eleuther.ai/'
        },
        {
            imagePath: '../../images/logos/redwood.png',
            name: 'Redwood Research',
            link: 'https://www.redwoodresearch.org/'
        },
        {
            imagePath: '../../images/logos/anthropic.png',
            name: 'Anthropic',
            link: 'https://www.anthropic.com/'
        },
        {
            imagePath: '../../images/logos/openai.png',
            name: 'OpenAI',
            link: 'https://www.openai.com/'
        },
        {
            imagePath: '../../images/logos/epoch.png',
            name: 'Epoch AI',
            link: 'https://www.epoch.ai/'
        },
        {
            imagePath: '../../images/logos/metr.png',
            name: 'METR',
            link: 'https://metr.org/'
        }
    ];
  
    const imageModules = import.meta.glob(
          '../../images/logos/*.{jpeg,jpg,png}',
          {
              eager: true,
              query: {
                  enhanced: true
              }
          }
    ) as Record<string,any>;
  </script>
  
<div class="flex flex-wrap mt-20 justify-between items-center gap-24">
  {#each organizations as { imagePath, name, link }}
    <a href={link}>
        {#if imageModules[imagePath].default}
            <enhanced:img src={imageModules[imagePath].default} alt={name} class="max-h-36 max-w-48 object-contain"/>
        {:else}
            <p>No Image Found</p>
        {/if}
    </a>
  {/each}
</div>
