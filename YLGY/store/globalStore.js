import { defineStore } from "pinia";
import { defaultGameConfig } from "./gameConfig";

/**
 * 全局状态存储
 *
 * @author yupi
 */
export const useGlobalStore = defineStore("global", {
  state: () => ({
    customConfig: { ...defaultGameConfig },
    gameConfig: { ...defaultGameConfig },
  }),
  getters: {},
  // 持久化
  persist: {
    key: "global",
    storage: {
      getItem: (key) => {
        return uni.getStorageSync(key)
      },
      setItem: (key, value) => {
        uni.setStorageSync(key, value)
      }
    },
    beforeRestore: (context) => {
      console.log("load globalStore data start");
    },
    afterRestore: (context) => {
      console.log("load globalStore data end");
    },
  },
  actions: {
    setGameConfig(gameConfig) {
      this.gameConfig = gameConfig;
    },
    setCustomConfig(customConfig) {
      this.customConfig = customConfig;
    },
    reset() {
      this.$reset();
    },
  },
});
