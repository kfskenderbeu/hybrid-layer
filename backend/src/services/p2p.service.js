export const p2pService = {

  peers: [],

  register: async function (data) {
    const peer = {
      id: this.peers.length + 1,
      ip: data.ip,
      region: data.region || "unknown",
      score: data.score || Math.random(), // placeholder
      ts: Date.now()
    };

    this.peers.push(peer);
    return peer;
  },

  getAll: async function () {
    return this.peers;
  },

  getBestPeer: async function () {
    if (this.peers.length === 0) return null;

    // Thjesht zgjedhim atë me score më të lartë
    const best = [...this.peers].sort((a, b) => b.score - a.score)[0];
    return best;
  }
};
