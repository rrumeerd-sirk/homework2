"use strict";

console.log("[HMM Webport] Script executing...");

const ASSET_MANIFEST = "./asset-manifest.json";
const STARFAIT_ENTRY = "./runtime/starfait/entry.json";

const $ = (id) => document.getElementById(id);
const canvas = $("game-canvas");
const debugPanel = $("debug-panel");
const debugToggle = $("debug-toggle");

let starfait = null;
let runnerStarted = false;
let audioUnlocked = false;
let startPromise = null;
let startupStage = "initialising";

function log(message) {
  console.log("[HMM Webport] " + String(message));
  const output = $("debug-output");
  if (!output) return;
  const time = new Date().toLocaleTimeString();
  output.textContent += "\n[" + time + "] " + String(message);
  output.scrollTop = output.scrollHeight;
}

function describeError(error) {
  if (!error) return String(error);
  return (error.name || "") + ": " + (error.message || String(error));
}

function describeThrownValue(error) {
  try { return JSON.stringify(error) || String(error); } catch (_) { return String(error); }
}

function setDebugVisible(visible) {
  if (debugPanel) debugPanel.hidden = !visible;
}

log("Script loaded successfully.");

async function fetchJson(path) {
  const response = await fetch(new URL(path, import.meta.url), { cache: "no-store" });
  if (!response.ok) throw new Error("Could not load " + path + " (HTTP " + response.status + ").");
  return response.json();
}

async function loadStarfaitModule() {
  log("Loading entry info from " + STARFAIT_ENTRY);
  const entryInfo = await fetchJson(STARFAIT_ENTRY);
  const moduleUrl = new URL("./runtime/starfait/" + entryInfo.entry, import.meta.url);
  
  log("Importing Starfait module from " + moduleUrl.href);
  const namespace = await import(moduleUrl.href);
  return namespace.default || namespace;
}

async function startGame() {
  if (startPromise) return startPromise;

  startPromise = (async () => {
    try {
      startupStage = "loading Starfait module";
      starfait = await loadStarfaitModule();
      log("Starfait module loaded.");

      startupStage = "loading asset manifest";
      const manifest = await fetchJson(ASSET_MANIFEST);
      log("Asset manifest loaded.");

      startupStage = "fetching game archive";
      log("Downloading game archive into memory...");
      const gameResponse = await fetch(new URL(manifest.game.path, import.meta.url), { cache: "no-store" });
      if (!gameResponse.ok) {
        throw new Error("Failed to download game archive (HTTP " + gameResponse.status + ")");
      }
      const gameBytes = await gameResponse.arrayBuffer();
      log("Game archive loaded (" + gameBytes.byteLength.toLocaleString() + " bytes).");

      startupStage = "Starfait createRunner";
      log("Creating Starfait runner with mock handles...");

      const mockGameFileHandle = {
        kind: "file",
        name: manifest.game.name || "game.unx",
        isSameEntry: async (other) => other === mockGameFileHandle,
        getFile: async () => ({
          size: gameBytes.byteLength,
          type: "application/octet-stream",
          arrayBuffer: async () => gameBytes,
          text: async () => new TextDecoder().decode(gameBytes),
          slice: (start, end) => gameBytes.slice(start, end)
        })
      };

      const mockSavesDirHandle = {
        kind: "directory",
        name: "saves",
        getDirectoryHandle: async () => mockSavesDirHandle,
        getFileHandle: async () => mockGameFileHandle,
        values: async function* () {},
        entries: async function* () {},
        [Symbol.asyncIterator]: async function* () {}
      };

      const result = await starfait.createRunner(
        mockGameFileHandle,
        mockSavesDirHandle,
        mockGameFileHandle.name,
        canvas
      );

      log("Starfait createRunner returned: " + String(result));

      if (result === false) {
        throw new Error("Starfait refused to initialise the game archive.");
      }

      startupStage = "Starfait startRunner";
      starfait.startRunner(() => log("Starfait game loop ended."));

      runnerStarted = true;
      canvas.focus();
      log("Runner started successfully.");

      startupStage = "completed";
    } catch (error) {
      const errMessage = "BOOT ERROR during: " + startupStage + " -> " + describeError(error);
      console.error(errMessage, error);
      log(errMessage);
      setDebugVisible(true);
      throw error;
    }
  })();

  return startPromise;
}

// UI event listeners
if (debugToggle) {
  debugToggle.addEventListener("click", () => {
    if (debugPanel) setDebugVisible(debugPanel.hidden);
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "F1") {
    e.preventDefault();
    if (debugPanel) setDebugVisible(debugPanel.hidden);
  } else if (e.key === "F2") {
    e.preventDefault();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }
});

// Kick off
startGame().catch((err) => {
  console.error("Unhandled start error:", err);
});
