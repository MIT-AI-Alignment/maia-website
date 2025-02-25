<script lang="ts">
  export let videoUrl: string;
  export let alt: string;
  export let caption: string;
  export let height = "280px";
  export let width: string | undefined = undefined;
  export let showShadow = true;
  export let aspectRatio: "landscape" | "portrait" | "square" = "landscape";
  
  // Calculate width based on aspect ratio and height if width is not provided
  const getWidth = () => {
    if (width) return width;
    
    const heightNum = Number.parseInt(height);
    switch (aspectRatio) {
      case "landscape": return `${heightNum * (16/9)}px`; // 16:9
      case "portrait": return `${heightNum * (9/16)}px`; // 9:16
      case "square": return `${heightNum}px`; // 1:1
      default: return `${heightNum * (16/9)}px`; // Default to 16:9
    }
  };
</script>

<div class="video-with-caption {showShadow ? 'shadow-lg' : ''}" style="width: {getWidth()};">
  <div class="rounded-lg overflow-hidden">
    <div class="relative" style="height: {height};">
      <iframe
        src={videoUrl}
        title={alt}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-full h-full border-0"
      ></iframe>
    </div>
    <div class="bg-gray-100 dark:bg-gray-800 p-2">
      <p class="text-xs text-center text-gray-700 dark:text-gray-300">
        {caption}
      </p>
    </div>
  </div>
</div> 