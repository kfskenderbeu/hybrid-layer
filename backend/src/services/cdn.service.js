import crypto from "crypto";

export const cdnService = {
  
  upload: async (data) => {
    // Për tani thjesht simulojmë ngarkimin
    return {
      fileId: crypto.randomBytes(8).toString("hex"),
      status: "uploaded",
      info: data,
    };
  },

  signUrl: async (url) => {
    const signature = crypto.randomBytes(16).toString("hex");
    return `${url}?sig=${signature}`;
  },

  getBestEdge: async () => {
    // NODO FIKTIVE për tani
    const edges = [
      { id: 1, region: "EU-West", host: "edge1.cdn.local" },
      { id: 2, region: "EU-East", host: "edge2.cdn.local" },
      { id: 3, region: "US-East", host: "edge3.cdn.local" },
    ];

    const random = Math.floor(Math.random() * edges.length);
    return edges[random];
  }

};
