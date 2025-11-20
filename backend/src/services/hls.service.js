export const hlsService = {

  createMasterPlaylist: async ({ variants }) => {
    // variants = [{ resolution: "720p", bandwidth: 3000000, url: "/hls/720p.m3u8" }]
    
    let playlist = "#EXTM3U\n#EXT-X-VERSION:3\n";

    variants.forEach(v => {
      playlist += `#EXT-X-STREAM-INF:BANDWIDTH=${v.bandwidth},RESOLUTION=${v.resolution}\n`;
      playlist += `${v.url}\n`;
    });

    return playlist;
  },

  createVariantPlaylist: async ({ segments }) => {
    // segments = [{ duration: 4, url: "/hls/720p/seg1.ts" }]
    
    let playlist = "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:6\n#EXT-X-MEDIA-SEQUENCE:0\n";

    segments.forEach(seg => {
      playlist += `#EXTINF:${seg.duration},\n`;
      playlist += `${seg.url}\n`;
    });

    playlist += "#EXT-X-ENDLIST";

    return playlist;
  }

};
