
# 😂 SPORT4U ONLINE — JUST LOOK AT THE DP!

**DURATION:** Exactly 10 Seconds  
**FORMAT:** Vertical 9:16 — Reels / TikTok / Facebook  
**STYLE:** Premium Pixar-style 3D comedy, natural acting, expressive facial animation, cinematic stadium atmosphere.

## 1. CHARACTER REFERENCE

Use the uploaded reference image.

Take the exact head and facial appearance from the reference image. Preserve the identity and recognizable features.

The character wears a stylish jacket, black sunglasses and fashionable sneakers.

## 2. STORYBOARD — EXACTLY 10 SECONDS

### 0–3 SECONDS — HE KNOWS WHY YOU ARE HERE

The potato stands casually between two spectacular stadium environments.

Left side: A massive football stadium with players, a football and cheering crowds.

Right side: A spectacular cricket stadium with batsmen, bowlers and a live match atmosphere.

The potato notices the camera, gives a knowing smile and slowly raises one eyebrow.

He casually says:

**"Ohhh... I see why you're here!"**

He gives a small knowing nod.

### 3–6 SECONDS — THE DP HINT

The potato slowly turns towards the camera.

He raises one finger and gently points towards the viewer's profile-picture area.

He then makes a small circular gesture with his finger, as if telling the viewer to look carefully.

He smiles and says slowly, naturally and confidently:

**"Do one thing... Take a closer look at our account's profile picture."**

IMPORTANT: He must say this calmly, like a friend sharing a clever little secret. No shouting, no panic and no rushed dialogue.

### 6–8 SECONDS — LET THE ACTION EXPLAIN

The potato looks towards the viewer's profile-picture direction.

He gently taps his sunglasses, points towards the DP again and gives a subtle wink.

Behind him, football and cricket stadium screens illuminate simultaneously.

He says:

**"That's it... Just get the hint!"**

### 8–10 SECONDS — THE FINAL REACTION

The potato adjusts his sunglasses, gives a confident smile and performs a tiny funny shoulder dance.

He points towards the DP one last time.

**FINAL DIALOGUE:**

**"A smart person only needs a little hint!"**

End with a funny wink, stadium fireworks and a freeze-frame.

## 3. INTERFACE & VISUAL DIRECTION

- A clean, modern social-media-style interface is already open in the background.
- Keep the interface visible naturally; do not show typing or a Google search.
- The profile picture area should be visually recognizable.
- Do not zoom into a search bar.
- Do not create fake website navigation.
- The character's finger gestures must clearly direct attention towards the DP.
- Football and cricket must both remain visible.

## 4. VOICE & SOUND DESIGN

- Natural conversational English male voice.
- Relaxed, clever and slightly mischievous delivery.
- Clear pronunciation and accurate lip synchronization.
- Soft energetic hip-hop background music.
- Subtle whoosh sounds when pointing.
- Funny pop sound during the wink.
- Stadium crowd ambience and cinematic ending beat.

## 5. STRICT REQUIREMENTS

1. Exactly 10 seconds.
2. Use the uploaded reference image for the character's head.
3. Never verbally reveal the website name.
4. No Google search, no typing animation and no search-bar zoom.
5. No banned, police or panic dialogue.
6. The DP gesture must be slow, clear and understandable.
7. Make the character look directly at the viewer.
8. The viewer should understand the hint through actions, not lengthy explanations.
9. No unnecessary text or additional logos.
10. Maintain premium animation quality throughout.













// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// puppeteer.use(StealthPlugin());

// const fs = require('fs');
// const path = require('path');
// const os = require('os');
// const { spawn, exec, execSync } = require('child_process');
// const { OBSWebSocket } = require('obs-websocket-js');

// process.on('uncaughtException', (err) => console.error('[💥] UNCAUGHT EXCEPTION:', err.message));
// process.on('unhandledRejection', (reason) => console.error('[💥] UNHANDLED REJECTION:', reason));

// const obs = new OBSWebSocket();

// // =========================================================================================
// // ⚙️ CONFIGURATION & ENV VARIABLES
// // =========================================================================================
// const selectedQuality = process.env.STREAM_QUALITY || '720p';
// const PROXY_ENGINE = process.env.PROXY_ENGINE || 'Cloudflare WARP (Recommended)';
// const ENABLE_STREAM_AUDIO = process.env.ENABLE_STREAM_AUDIO !== 'OFF';
// const SELECTED_CHANNEL = (process.env.OKRU_STREAM_ID || '1').trim();
// // Set WINDOW_KEEPER=OFF to disable the background "keep Chrome in front / hide OBS" loop.
// const WINDOW_KEEPER = (process.env.WINDOW_KEEPER || 'ON').trim().toUpperCase();

// let RES_W = 1280, RES_H = 720, BITRATE = 3000;
// if (selectedQuality === '360p') { RES_W = 640; RES_H = 360; BITRATE = 800; }
// else if (selectedQuality === '480p') { RES_W = 854; RES_H = 480; BITRATE = 1500; }
// else if (selectedQuality === '720p') { RES_W = 1280; RES_H = 720; BITRATE = 3000; }
// else if (selectedQuality.includes('1080p')) { RES_W = 1920; RES_H = 1080; BITRATE = 4500; }

// // 🔒 STREAM KEYS (UNTOUCHED)
// const STREAM_KEYS = {
//     '1'    : '15254238731883_15281627925099_najspfkgne',
//     '1.1'  : '15254260751979_15281671637611_2plrcfqzze',
//     '1.2'  : '15254285524587_15281717840491_7e6qdknzsu',
//     '1.3'  : '16983200374379_18360218880619_efmw4fchxm',
//     '1.4'  : '16983242579563_18360288741995_t2kh2jvcym',
//     '1.5'  : '16983247822443_18360297982571_3zs5ml7gua',
//     '1.6'  : '16983254834795_18360310237803_xrz3pf4uea',
//     '1.7'  : '16983259553387_18360317971051_6khoe5efge',
//     '1.8'  : '16983264468587_18360327342699_wsn7zgr7ee',
//     '1.9'  : '16983269514859_18360335075947_363qzjlbte',
//     '1.10' : '16983277641323_18360347921003_rpf6hkqpdm',
//     '1.11' : '16983286554219_18360360503915_lrqraxbz3y',
//     '2'    : '15254299352683_15281743071851_7dvz3h5d7q',
//     '2.1'  : '15254308986475_15281761618539_3xca7oij3u',
//     '2.2'  : '15254328122987_15281795566187_zjqa6bqzoq',
//     '3'    : '15254341885547_15281821059691_hhlpb5vicy',
//     '3.1'  : '15254357089899_15281848322667_sxeexgvzl4',
//     '3.2'  : '15254367510123_15281868180075_pc4jrytfgm',
//     '3.3'  : '17485986405995_19233134873195_iw63xjblny',
//     '3.4'  : '17485996039787_19233150929515_d3yeoweuam',
//     '3.5'  : '17486002789995_19233161611883_mbg22slybe',
//     '3.6'  : '17486007770731_19233169934955_teme2zt4fm',
//     '4'    : '15255022345835_15283095800427_vwrupxzstm',
//     '4.1'  : '15255038074475_15283122080363_ai5qqp2we4',
//     '4.2'  : '15255045480043_15283135842923_tldl4bhmii',
//     '4.3'  : '15255208599147_15283449629291_abltofuc7m',
//     '4.4'  : '15255217708651_15283466603115_bojrrqtlmu',
//     '4.5'  : '15255227670123_15283486263915_jpntt54mve',
//     '5'    : '17135767461483_18625099401835_4gpytlxk4a',
//     '5.1'  : '15273713933931_15317494860395_avj47smmim',
//     '5.2'  : '15273722257003_15317510195819_6edjluvdqi',
//     '5.3'  : '15273739624043_15317541653099_ii4bxpvabe',
//     '5.4'  : '15273750175339_15317561707115_csel26ku5a',
//     '5.5'  : '15273760071275_15317579467371_cnewcj54me',
//     '5.6'  : '15273767935595_15317595851371_3q43tk7tvm',
//     '5.7'  : '15273778683499_15317616560747_4piekvs4wu',
//     's1.1' : '14204232736303_14846150314543_37jq4ryehq',
//     's1.2' : '14204288179759_14846247373359_tnsknmapva',
//     's1.3' : '14204319768111_14846302489135_sr4ht4ccwq',
//     's1.4' : '14204331957807_14846326147631_dji2acqcze',
//     's1.5' : '14204346572335_14846351641135_7gvns4o5ue',
//     's1.6' : '14204361252399_14846376479279_cjajhf4d3y',
//     's1.7' : '14204370492975_14846393649711_6fduhdqite',
//     's1.8' : '14204395527727_14846438017583_s2jlti7lsm',
//     's1.9' : '14204411387439_14846464887343_f5lxgcqj5y',
//     's1.10': '14204424691247_14846487562799_xmbvntt6wa',
//     's2.1' : '14204490948143_14846603495983_kzevn36tii',
//     's2.2' : '14204506742319_14846634494511_ta2rxyg2oy',
//     's2.3' : '14204523322927_14846661233199_foqb3q7zb4',
//     's2.4' : '14204540034607_14846689085999_gjejdie4uy',
//     's2.5' : '14204555304495_14846715497007_zdanghuxzu',
//     's2.6' : '14204565200431_14846734371375_ap3bqpabpu',
//     's2.7' : '14204577259055_14846756194863_3ecad2535u',
//     's2.8' : '14204592528943_14846785227311_4hjl46y62e',
//     's2.9' : '14204602621487_14846802594351_ilnp6lxekq',
//     's2.10': '14206184136239_14849618610735_ihnbx7hkoi'
// };

// const ACTIVE_STREAM_KEY = STREAM_KEYS[SELECTED_CHANNEL] || STREAM_KEYS['1'];

// // =========================================================================================
// // 🔗 TARGET URL
// // =========================================================================================
// const rawUrls = (process.env.TARGET_URLS || 'https://dadocric.st/player.php?id=starsp3&v=m').trim();
// const targetUrl = rawUrls
//     .split(/[,|]/)
//     .map(u => {
//         let clean = u.split('::')[0].trim().replace(/^!/, '');
//         if (clean && !clean.startsWith('http')) clean = 'https://' + clean;
//         return clean;
//     })
//     .filter(u => u.length > 8)[0] || 'https://dadocric.st/player.php?id=starsp3&v=m';

// let browser = null;
// let browserPid = null;
// let obsProcess = null;
// let keeperTimer = null;

// // =========================================================================================
// // 🎥 OBS CONFIGURATION
// // =========================================================================================
// function setupOBSConfig() {
//     const obsDir = path.join(os.homedir(), '.config', 'obs-studio');
//     const profilesDir = path.join(obsDir, 'basic', 'profiles', 'Untitled');
//     const scenesDir = path.join(obsDir, 'basic', 'scenes');
//     const wsPluginDir = path.join(obsDir, 'plugin_config', 'obs-websocket');

//     fs.mkdirSync(profilesDir, { recursive: true });
//     fs.mkdirSync(scenesDir, { recursive: true });
//     fs.mkdirSync(wsPluginDir, { recursive: true });

//     // FIX #1: In OBS, "FirstRun=true" means "the first run already happened".
//     // The old value (false) told OBS to open the Auto-Configuration Wizard on every launch,
//     // and that wizard window was what covered Chrome in the stream.
//     // OBS 31+ also split its settings into global.ini (app) and user.ini (user),
//     // so the same content is written to both to cover every version.
//     const baseIni =
// `[General]
// LicenseAccepted=true
// FirstRun=true
// [Basic]
// Profile=Untitled
// ProfileDir=Untitled
// SceneCollection=Untitled
// SceneCollectionFile=Untitled
// [BasicWindow]
// ShowAutoConfig=false
// Warned=true
// [OBSWebSocket]
// ServerEnabled=true
// ServerPort=4455
// ServerPassword=secret
// `;
//     fs.writeFileSync(path.join(obsDir, 'global.ini'), baseIni);
//     fs.writeFileSync(path.join(obsDir, 'user.ini'), baseIni);

//     fs.writeFileSync(path.join(wsPluginDir, 'config.json'), JSON.stringify({
//         alerts_enabled: false,
//         auth_required: true,
//         first_load: false,
//         server_enabled: true,
//         server_password: "secret",
//         server_port: 4455
//     }, null, 2));

//     fs.writeFileSync(path.join(profilesDir, 'basic.ini'),
// `[General]
// Name=Untitled
// [Video]
// BaseCX=${RES_W}
// BaseCY=${RES_H}
// OutputCX=${RES_W}
// OutputCY=${RES_H}
// FPSCommon=30
// [Output]
// Mode=Advanced
// [AdvOut]
// TrackIndex=1
// RecType=Standard
// Encoder=obs_x264
// [obs_x264]
// bitrate=${BITRATE}
// keyint_sec=2
// preset=ultrafast
// profile=main
// tune=zerolatency
// rate_control=CBR
// `);

//     fs.writeFileSync(path.join(profilesDir, 'service.json'), JSON.stringify({
//         settings: { server: "rtmp://vsu.okcdn.ru/input/", key: ACTIVE_STREAM_KEY.trim() },
//         type: "rtmp_custom"
//     }, null, 2));

//     fs.writeFileSync(path.join(scenesDir, 'Untitled.json'), JSON.stringify({
//         current_scene: "MainScene",
//         current_program_scene: "MainScene",
//         name: "Untitled",
//         scene_order: [{ name: "MainScene" }],
//         sources: [
//             // screen: 0 is set explicitly because OBS 31+ no longer captures a display "implicitly" on Linux
//             { id: "xshm_input", name: "Screen", settings: { screen: 0, show_cursor: false } },
//             { id: "pulse_output_capture", name: "Audio", settings: {} },
//             { id: "scene", name: "MainScene", settings: { items: [{ name: "Screen", id: 1, visible: true }, { name: "Audio", id: 2, visible: true }] } }
//         ]
//     }, null, 2));
// }

// // =========================================================================================
// // 🪟 WINDOW CONTROL (keeps OBS out of the picture, Chrome in front)
// // =========================================================================================
// function sh(cmd) {
//     try { execSync(cmd, { stdio: 'ignore', timeout: 5000 }); } catch (e) {}
// }

// function checkXdotool() {
//     try {
//         execSync('which xdotool', { stdio: 'ignore' });
//     } catch (e) {
//         console.error('[⚠️] xdotool is NOT installed - OBS windows cannot be hidden. Add "sudo apt-get install -y xdotool" to your workflow.');
//     }
// }

// // FIX #2: The screen capture records the whole display, so any visible OBS window (main window,
// // wizard, "safe mode" prompt, docks) ends up in the stream. Every window OBS owns shares the
// // "obs" window class, so minimize them and park them far outside the visible screen.
// function hideOBSWindows() {
//     sh('xdotool search --name "Auto-Configuration Wizard" windowquit');
//     sh('xdotool search --class "obs" windowminimize windowmove 20000 20000');
//     sh('xdotool search --name "^OBS " windowminimize windowmove 20000 20000');
// }

// // One-time placement, same as the original script (only called twice, at startup).
// // The background keeper below never resizes, moves or activates Chrome.
// function focusChrome() {
//     sh(`xdotool search --onlyvisible --class "[Cc]hrom" windowmove 0 0 windowsize ${RES_W} ${RES_H} windowactivate`);
// }

// function hideOBSAndFocusChrome() {
//     hideOBSWindows();
//     focusChrome();
// }

// // FIX #3: OBS can pop up dialogs later (stream disconnected, errors), so a light background check
// // remains. It is deliberately hands-off: in steady state it only READS window positions.
// // It acts only when an OBS window really overlaps the captured screen, and then it only hides
// // OBS and raises Chrome. It never resizes, moves or activates Chrome, and it is async so it
// // cannot block the Node event loop.
// function run(cmd) {
//     return new Promise(resolve => {
//         exec(cmd, { timeout: 4000 }, (err, stdout) => resolve(err ? '' : String(stdout)));
//     });
// }

// function parseGeometry(out) {
//     const num = (k) => {
//         const m = out.match(new RegExp('^' + k + '=(-?\\d+)', 'm'));
//         return m ? parseInt(m[1], 10) : NaN;
//     };
//     return { x: num('X'), y: num('Y'), w: num('WIDTH'), h: num('HEIGHT') };
// }

// function overlapsScreen(g) {
//     if ([g.x, g.y, g.w, g.h].some(Number.isNaN)) return false;
//     if (g.w < 50 || g.h < 50) return false; // ignore tiny helper windows
//     return g.x < RES_W && g.y < RES_H && g.x + g.w > 0 && g.y + g.h > 0;
// }

// async function obsWindowOnScreen() {
//     const ids = (await run('xdotool search --onlyvisible --class "obs"')).split(/\s+/).filter(Boolean);
//     for (const id of ids) {
//         const out = await run(`xdotool getwindowgeometry --shell ${id}`);
//         if (overlapsScreen(parseGeometry(out))) return true;
//     }
//     return false;
// }

// let keeperBusy = false;
// async function keeperTick() {
//     if (keeperBusy) return;
//     keeperBusy = true;
//     try {
//         if (await obsWindowOnScreen()) {
//             console.log('[🪟] An OBS window is on screen - hiding it and raising Chrome.');
//             await run('xdotool search --name "Auto-Configuration Wizard" windowquit');
//             await run('xdotool search --class "obs" windowminimize windowmove 20000 20000');
//             await run('xdotool search --name "^OBS " windowminimize windowmove 20000 20000');
//             if (browserPid) await run(`xdotool search --onlyvisible --pid ${browserPid} windowraise`);
//             await run('xdotool search --onlyvisible --class "[Cc]hrom" windowraise');
//         }
//     } catch (e) {
//     } finally {
//         keeperBusy = false;
//     }
// }

// function startWindowKeeper() {
//     if (WINDOW_KEEPER === 'OFF' || keeperTimer) return;
//     keeperTimer = setInterval(keeperTick, 5000);
// }

// // =========================================================================================
// // 🎬 ONE-TIME PLAY & FULLSCREEN TRIGGER
// // =========================================================================================
// async function playAndMaximizeOnce(page) {
//     for (const frame of page.frames()) {
//         if (frame.isDetached()) continue;
//         await frame.evaluate((audioEnabled) => {
//             document.documentElement.style.background = '#000';
//             if (document.body) {
//                 document.body.style.background = '#000';
//                 document.body.style.overflow = 'hidden';
//                 document.body.style.margin = '0';
//             }

//             const selectors = '.jw-icon-display, .jw-icon-playback, button[data-plyr="play"], .vjs-big-play-button, .vjs-play-control, [class*="unmute"], .fp-play, video';
//             document.querySelectorAll(selectors).forEach(el => { try { el.click(); } catch (e) {} });

//             const v = document.querySelector('video');
//             if (v) {
//                 if (v.paused) v.play().catch(() => {});
//                 v.muted = !audioEnabled;
//                 v.volume = audioEnabled ? 1.0 : 0.0;
//                 const wrap = v.closest('.jwplayer, #player, .plyr, .vjs-player, [data-player]') || v;
//                 wrap.style.cssText = 'position:fixed !important;top:0 !important;left:0 !important;width:100vw !important;height:100vh !important;z-index:2147483646 !important;background:#000 !important;';
//                 v.style.cssText = 'width:100% !important;height:100% !important;object-fit:contain !important;';
//                 return;
//             }

//             const iframes = Array.from(document.querySelectorAll('iframe'));
//             let best = null, maxArea = 5000;
//             iframes.forEach(f => {
//                 const area = f.clientWidth * f.clientHeight;
//                 if (area > maxArea && f.clientWidth >= f.clientHeight) { maxArea = area; best = f; }
//             });
//             if (best) {
//                 iframes.forEach(f => { if (f !== best) f.style.display = 'none'; });
//                 best.style.cssText = 'position:fixed !important;top:0 !important;left:0 !important;width:100vw !important;height:100vh !important;z-index:2147483645 !important;border:none !important;background:#000 !important;';
//             }
//         }, ENABLE_STREAM_AUDIO).catch(() => {});
//     }
// }

// // =========================================================================================
// // 🚀 MAIN STARTUP (SIMPLE OPEN & BROADCAST)
// // =========================================================================================
// async function startSimpleBroadcast() {
//     console.log(`[🚀] Starting Simple Broadcast: ${RES_W}x${RES_H} @ ${BITRATE}kbps | Channel: ${SELECTED_CHANNEL}`);
//     checkXdotool();
//     setupOBSConfig();

//     // --disable-shutdown-check / --disable-missing-files-check stop OBS from opening
//     // "safe mode" or "missing files" dialogs, which would also end up on screen.
//     // stdio is ignored so OBS can never block on an undrained output pipe during long runs.
//     obsProcess = spawn('obs', [
//         '--startstreaming',
//         '--minimize-to-tray',
//         '--disable-updater',
//         '--disable-shutdown-check',
//         '--disable-missing-files-check'
//     ], {
//         env: { ...process.env, DISPLAY: process.env.DISPLAY || ':99' },
//         stdio: 'ignore'
//     });

//     // Start hiding OBS windows immediately, before Chrome even exists.
//     startWindowKeeper();

//     await new Promise(r => setTimeout(r, 6000));

//     for (let i = 0; i < 12; i++) {
//         try {
//             await obs.connect('ws://127.0.0.1:4455', 'secret');
//             const status = await obs.call('GetStreamStatus');
//             if (!status.outputActive) await obs.call('StartStream');
//             console.log('[+] OBS Streaming Active!');
//             break;
//         } catch (e) {
//             await new Promise(r => setTimeout(r, 2000));
//         }
//     }

//     const args = [
//         '--no-sandbox', '--disable-setuid-sandbox',
//         `--window-size=${RES_W},${RES_H}`, '--window-position=0,0',
//         '--kiosk', '--start-fullscreen',
//         '--autoplay-policy=no-user-gesture-required',
//         '--disable-dev-shm-usage', '--disable-blink-features=AutomationControlled'
//     ];
//     if (PROXY_ENGINE.includes('Cloudflare')) args.push('--proxy-server=socks5://127.0.0.1:40000');

//     browser = await puppeteer.launch({
//         headless: false,
//         defaultViewport: { width: RES_W, height: RES_H },
//         ignoreDefaultArgs: ['--enable-automation'],
//         args
//     });
//     try { browserPid = browser.process().pid; } catch (e) {}

//     const page = (await browser.pages())[0];
//     await page.evaluateOnNewDocument(() => { window.open = () => null; });

//     browser.on('targetcreated', async (target) => {
//         if (target.type() === 'page') {
//             const popup = await target.page().catch(() => null);
//             if (popup && popup !== page) popup.close().catch(() => {});
//         }
//     });

//     console.log(`[🌐] Opening URL: ${targetUrl}`);
//     await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
//     hideOBSAndFocusChrome();

//     // Trigger play & fullscreen twice to catch async players, then leave the page completely alone
//     await new Promise(r => setTimeout(r, 4000));
//     await playAndMaximizeOnce(page);
//     await new Promise(r => setTimeout(r, 5000));
//     await playAndMaximizeOnce(page);
//     hideOBSAndFocusChrome();

//     console.log('[📡] Live Broadcast Running (page is never reloaded; window keeper only keeps Chrome in front).');
// }

// async function cleanup() {
//     if (keeperTimer) { clearInterval(keeperTimer); keeperTimer = null; }
//     try { await obs.call('StopStream'); } catch (e) {}
//     try { await obs.disconnect(); } catch (e) {}
//     if (browser) { try { await browser.close(); } catch (e) {} }
//     if (obsProcess) { try { obsProcess.kill('SIGKILL'); } catch (e) {} }
//     try { execSync('pkill -9 obs chrome || true', { stdio: 'ignore' }); } catch (e) {}
// }

// // =========================================================================================
// // ⏱️ DURATION TIMER
// // =========================================================================================
// const RAW_DURATION = (process.env.CUSTOM_DURATION || '24/7').trim();
// const MAX_SINGLE_RUN_MS = 21000000; // 5h 50m

// function parseFlexibleDuration(input) {
//     const str = (input || '').toLowerCase().trim();
//     if (!str || str === '24/7' || str === 'infinite' || str === '0') return null;
//     let totalMs = 0, matched = false;
//     const regex = /(\d+(?:\.\d+)?)\s*(hours?|hrs?|h|minutes?|mins?|m|seconds?|secs?|s)/g;
//     let match;
//     while ((match = regex.exec(str)) !== null) {
//         matched = true;
//         const val = parseFloat(match[1]);
//         if (match[2].startsWith('h')) totalMs += val * 3600000;
//         else if (match[2].startsWith('m')) totalMs += val * 60000;
//         else if (match[2].startsWith('s')) totalMs += val * 1000;
//     }
//     if (!matched && /^\d+(\.\d+)?$/.test(str)) { totalMs = parseFloat(str) * 60000; matched = true; }
//     return (matched && totalMs > 0) ? Math.round(totalMs) : null;
// }

// function formatMsToDurationString(ms) {
//     const totalSec = Math.max(1, Math.round(ms / 1000));
//     const h = Math.floor(totalSec / 3600);
//     const m = Math.floor((totalSec % 3600) / 60);
//     return [h > 0 ? `${h}h` : '', m > 0 ? `${m}m` : ''].filter(Boolean).join(' ') || '1m';
// }

// function triggerNextWorkflow(nextDurationValue) {
//     const args = [
//         'workflow', 'run', 'main.yml',
//         '-f', `target_urls=${process.env.TARGET_URLS || ''}`,
//         '-f', `okru_stream_channel=${SELECTED_CHANNEL}`,
//         '-f', `stream_quality=${selectedQuality}`,
//         '-f', `proxy_engine=${PROXY_ENGINE}`,
//         '-f', `enable_stream_audio=${process.env.ENABLE_STREAM_AUDIO || 'ON'}`,
//         '-f', `custom_duration=${nextDurationValue}`
//     ];
//     const res = spawn('gh', args, { stdio: 'inherit' });
//     res.on('close', () => {
//         setTimeout(async () => { await cleanup(); process.exit(0); }, 60000);
//     });
// }

// const totalRequestedMs = parseFlexibleDuration(RAW_DURATION);
// if (totalRequestedMs === null) {
//     setTimeout(() => triggerNextWorkflow('24/7'), MAX_SINGLE_RUN_MS);
// } else if (totalRequestedMs <= MAX_SINGLE_RUN_MS) {
//     setTimeout(async () => { await cleanup(); process.exit(0); }, totalRequestedMs);
// } else {
//     const nextStr = formatMsToDurationString(totalRequestedMs - MAX_SINGLE_RUN_MS);
//     setTimeout(() => triggerNextWorkflow(nextStr), MAX_SINGLE_RUN_MS);
// }

// startSimpleBroadcast();






















// ======= great obs close done and done dlhd play also =================


// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// puppeteer.use(StealthPlugin());

// const fs = require('fs');
// const path = require('path');
// const os = require('os');
// const { spawn, execSync } = require('child_process');
// const { OBSWebSocket } = require('obs-websocket-js');

// process.on('uncaughtException', (err) => console.error('[💥] UNCAUGHT EXCEPTION:', err.message));
// process.on('unhandledRejection', (reason) => console.error('[💥] UNHANDLED REJECTION:', reason));

// const obs = new OBSWebSocket();

// // =========================================================================================
// // ⚙️ CONFIGURATION & ENV VARIABLES
// // =========================================================================================
// const selectedQuality = process.env.STREAM_QUALITY || '720p';
// const PROXY_ENGINE = process.env.PROXY_ENGINE || 'Cloudflare WARP (Recommended)';
// const ENABLE_STREAM_AUDIO = process.env.ENABLE_STREAM_AUDIO !== 'OFF';
// const SELECTED_CHANNEL = (process.env.OKRU_STREAM_ID || '1').trim();
// // Set WINDOW_KEEPER=OFF to disable the background "keep Chrome in front / hide OBS" loop.
// const WINDOW_KEEPER = (process.env.WINDOW_KEEPER || 'ON').trim().toUpperCase();

// let RES_W = 1280, RES_H = 720, BITRATE = 3000;
// if (selectedQuality === '360p') { RES_W = 640; RES_H = 360; BITRATE = 800; }
// else if (selectedQuality === '480p') { RES_W = 854; RES_H = 480; BITRATE = 1500; }
// else if (selectedQuality === '720p') { RES_W = 1280; RES_H = 720; BITRATE = 3000; }
// else if (selectedQuality.includes('1080p')) { RES_W = 1920; RES_H = 1080; BITRATE = 4500; }

// // 🔒 STREAM KEYS (UNTOUCHED)
// const STREAM_KEYS = {
//     '1'    : '15254238731883_15281627925099_najspfkgne',
//     '1.1'  : '15254260751979_15281671637611_2plrcfqzze',
//     '1.2'  : '15254285524587_15281717840491_7e6qdknzsu',
//     '1.3'  : '16983200374379_18360218880619_efmw4fchxm',
//     '1.4'  : '16983242579563_18360288741995_t2kh2jvcym',
//     '1.5'  : '16983247822443_18360297982571_3zs5ml7gua',
//     '1.6'  : '16983254834795_18360310237803_xrz3pf4uea',
//     '1.7'  : '16983259553387_18360317971051_6khoe5efge',
//     '1.8'  : '16983264468587_18360327342699_wsn7zgr7ee',
//     '1.9'  : '16983269514859_18360335075947_363qzjlbte',
//     '1.10' : '16983277641323_18360347921003_rpf6hkqpdm',
//     '1.11' : '16983286554219_18360360503915_lrqraxbz3y',
//     '2'    : '15254299352683_15281743071851_7dvz3h5d7q',
//     '2.1'  : '15254308986475_15281761618539_3xca7oij3u',
//     '2.2'  : '15254328122987_15281795566187_zjqa6bqzoq',
//     '3'    : '15254341885547_15281821059691_hhlpb5vicy',
//     '3.1'  : '15254357089899_15281848322667_sxeexgvzl4',
//     '3.2'  : '15254367510123_15281868180075_pc4jrytfgm',
//     '3.3'  : '17485986405995_19233134873195_iw63xjblny',
//     '3.4'  : '17485996039787_19233150929515_d3yeoweuam',
//     '3.5'  : '17486002789995_19233161611883_mbg22slybe',
//     '3.6'  : '17486007770731_19233169934955_teme2zt4fm',
//     '4'    : '15255022345835_15283095800427_vwrupxzstm',
//     '4.1'  : '15255038074475_15283122080363_ai5qqp2we4',
//     '4.2'  : '15255045480043_15283135842923_tldl4bhmii',
//     '4.3'  : '15255208599147_15283449629291_abltofuc7m',
//     '4.4'  : '15255217708651_15283466603115_bojrrqtlmu',
//     '4.5'  : '15255227670123_15283486263915_jpntt54mve',
//     '5'    : '17135767461483_18625099401835_4gpytlxk4a',
//     '5.1'  : '15273713933931_15317494860395_avj47smmim',
//     '5.2'  : '15273722257003_15317510195819_6edjluvdqi',
//     '5.3'  : '15273739624043_15317541653099_ii4bxpvabe',
//     '5.4'  : '15273750175339_15317561707115_csel26ku5a',
//     '5.5'  : '15273760071275_15317579467371_cnewcj54me',
//     '5.6'  : '15273767935595_15317595851371_3q43tk7tvm',
//     '5.7'  : '15273778683499_15317616560747_4piekvs4wu',
//     's1.1' : '14204232736303_14846150314543_37jq4ryehq',
//     's1.2' : '14204288179759_14846247373359_tnsknmapva',
//     's1.3' : '14204319768111_14846302489135_sr4ht4ccwq',
//     's1.4' : '14204331957807_14846326147631_dji2acqcze',
//     's1.5' : '14204346572335_14846351641135_7gvns4o5ue',
//     's1.6' : '14204361252399_14846376479279_cjajhf4d3y',
//     's1.7' : '14204370492975_14846393649711_6fduhdqite',
//     's1.8' : '14204395527727_14846438017583_s2jlti7lsm',
//     's1.9' : '14204411387439_14846464887343_f5lxgcqj5y',
//     's1.10': '14204424691247_14846487562799_xmbvntt6wa',
//     's2.1' : '14204490948143_14846603495983_kzevn36tii',
//     's2.2' : '14204506742319_14846634494511_ta2rxyg2oy',
//     's2.3' : '14204523322927_14846661233199_foqb3q7zb4',
//     's2.4' : '14204540034607_14846689085999_gjejdie4uy',
//     's2.5' : '14204555304495_14846715497007_zdanghuxzu',
//     's2.6' : '14204565200431_14846734371375_ap3bqpabpu',
//     's2.7' : '14204577259055_14846756194863_3ecad2535u',
//     's2.8' : '14204592528943_14846785227311_4hjl46y62e',
//     's2.9' : '14204602621487_14846802594351_ilnp6lxekq',
//     's2.10': '14206184136239_14849618610735_ihnbx7hkoi'
// };

// const ACTIVE_STREAM_KEY = STREAM_KEYS[SELECTED_CHANNEL] || STREAM_KEYS['1'];

// // =========================================================================================
// // 🔗 TARGET URL
// // =========================================================================================
// const rawUrls = (process.env.TARGET_URLS || 'https://dadocric.st/player.php?id=starsp3&v=m').trim();
// const targetUrl = rawUrls
//     .split(/[,|]/)
//     .map(u => {
//         let clean = u.split('::')[0].trim().replace(/^!/, '');
//         if (clean && !clean.startsWith('http')) clean = 'https://' + clean;
//         return clean;
//     })
//     .filter(u => u.length > 8)[0] || 'https://dadocric.st/player.php?id=starsp3&v=m';

// let browser = null;
// let browserPid = null;
// let obsProcess = null;
// let keeperTimer = null;

// // =========================================================================================
// // 🎥 OBS CONFIGURATION
// // =========================================================================================
// function setupOBSConfig() {
//     const obsDir = path.join(os.homedir(), '.config', 'obs-studio');
//     const profilesDir = path.join(obsDir, 'basic', 'profiles', 'Untitled');
//     const scenesDir = path.join(obsDir, 'basic', 'scenes');
//     const wsPluginDir = path.join(obsDir, 'plugin_config', 'obs-websocket');

//     fs.mkdirSync(profilesDir, { recursive: true });
//     fs.mkdirSync(scenesDir, { recursive: true });
//     fs.mkdirSync(wsPluginDir, { recursive: true });

//     // FIX #1: In OBS, "FirstRun=true" means "the first run already happened".
//     // The old value (false) told OBS to open the Auto-Configuration Wizard on every launch,
//     // and that wizard window was what covered Chrome in the stream.
//     // OBS 31+ also split its settings into global.ini (app) and user.ini (user),
//     // so the same content is written to both to cover every version.
//     const baseIni =
// `[General]
// LicenseAccepted=true
// FirstRun=true
// [Basic]
// Profile=Untitled
// ProfileDir=Untitled
// SceneCollection=Untitled
// SceneCollectionFile=Untitled
// [BasicWindow]
// ShowAutoConfig=false
// Warned=true
// [OBSWebSocket]
// ServerEnabled=true
// ServerPort=4455
// ServerPassword=secret
// `;
//     fs.writeFileSync(path.join(obsDir, 'global.ini'), baseIni);
//     fs.writeFileSync(path.join(obsDir, 'user.ini'), baseIni);

//     fs.writeFileSync(path.join(wsPluginDir, 'config.json'), JSON.stringify({
//         alerts_enabled: false,
//         auth_required: true,
//         first_load: false,
//         server_enabled: true,
//         server_password: "secret",
//         server_port: 4455
//     }, null, 2));

//     fs.writeFileSync(path.join(profilesDir, 'basic.ini'),
// `[General]
// Name=Untitled
// [Video]
// BaseCX=${RES_W}
// BaseCY=${RES_H}
// OutputCX=${RES_W}
// OutputCY=${RES_H}
// FPSCommon=30
// [Output]
// Mode=Advanced
// [AdvOut]
// TrackIndex=1
// RecType=Standard
// Encoder=obs_x264
// [obs_x264]
// bitrate=${BITRATE}
// keyint_sec=2
// preset=ultrafast
// profile=main
// tune=zerolatency
// rate_control=CBR
// `);

//     fs.writeFileSync(path.join(profilesDir, 'service.json'), JSON.stringify({
//         settings: { server: "rtmp://vsu.okcdn.ru/input/", key: ACTIVE_STREAM_KEY.trim() },
//         type: "rtmp_custom"
//     }, null, 2));

//     fs.writeFileSync(path.join(scenesDir, 'Untitled.json'), JSON.stringify({
//         current_scene: "MainScene",
//         current_program_scene: "MainScene",
//         name: "Untitled",
//         scene_order: [{ name: "MainScene" }],
//         sources: [
//             // screen: 0 is set explicitly because OBS 31+ no longer captures a display "implicitly" on Linux
//             { id: "xshm_input", name: "Screen", settings: { screen: 0, show_cursor: false } },
//             { id: "pulse_output_capture", name: "Audio", settings: {} },
//             { id: "scene", name: "MainScene", settings: { items: [{ name: "Screen", id: 1, visible: true }, { name: "Audio", id: 2, visible: true }] } }
//         ]
//     }, null, 2));
// }

// // =========================================================================================
// // 🪟 WINDOW CONTROL (keeps OBS out of the picture, Chrome in front)
// // =========================================================================================
// function sh(cmd) {
//     try { execSync(cmd, { stdio: 'ignore', timeout: 5000 }); } catch (e) {}
// }

// function checkXdotool() {
//     try {
//         execSync('which xdotool', { stdio: 'ignore' });
//     } catch (e) {
//         console.error('[⚠️] xdotool is NOT installed - OBS windows cannot be hidden. Add "sudo apt-get install -y xdotool" to your workflow.');
//     }
// }

// // FIX #2: The screen capture records the whole display, so any visible OBS window (main window,
// // wizard, "safe mode" prompt, docks) ends up in the stream. Every window OBS owns shares the
// // "obs" window class, so minimize them and park them far outside the visible screen.
// function hideOBSWindows() {
//     sh('xdotool search --name "Auto-Configuration Wizard" windowquit');
//     sh('xdotool search --class "obs" windowminimize windowmove 20000 20000');
//     sh('xdotool search --name "^OBS " windowminimize windowmove 20000 20000');
// }

// function focusChrome() {
//     const place = `windowsize ${RES_W} ${RES_H} windowmove 0 0 windowraise windowactivate`;
//     if (browserPid) sh(`xdotool search --onlyvisible --pid ${browserPid} ${place}`);
//     sh(`xdotool search --onlyvisible --class "[Cc]hrom" ${place}`);
// }

// function hideOBSAndFocusChrome() {
//     hideOBSWindows();
//     focusChrome();
// }

// // FIX #3: The old script did this only once, so anything that popped up later (wizard, dialogs)
// // stayed on top forever. This loop only moves windows - it never reloads or touches the page.
// function startWindowKeeper() {
//     if (WINDOW_KEEPER === 'OFF' || keeperTimer) return;
//     keeperTimer = setInterval(hideOBSAndFocusChrome, 2000);
// }

// // =========================================================================================
// // 🎬 ONE-TIME PLAY & FULLSCREEN TRIGGER
// // =========================================================================================
// async function playAndMaximizeOnce(page) {
//     for (const frame of page.frames()) {
//         if (frame.isDetached()) continue;
//         await frame.evaluate((audioEnabled) => {
//             document.documentElement.style.background = '#000';
//             if (document.body) {
//                 document.body.style.background = '#000';
//                 document.body.style.overflow = 'hidden';
//                 document.body.style.margin = '0';
//             }

//             const selectors = '.jw-icon-display, .jw-icon-playback, button[data-plyr="play"], .vjs-big-play-button, .vjs-play-control, [class*="unmute"], .fp-play, video';
//             document.querySelectorAll(selectors).forEach(el => { try { el.click(); } catch (e) {} });

//             const v = document.querySelector('video');
//             if (v) {
//                 if (v.paused) v.play().catch(() => {});
//                 v.muted = !audioEnabled;
//                 v.volume = audioEnabled ? 1.0 : 0.0;
//                 const wrap = v.closest('.jwplayer, #player, .plyr, .vjs-player, [data-player]') || v;
//                 wrap.style.cssText = 'position:fixed !important;top:0 !important;left:0 !important;width:100vw !important;height:100vh !important;z-index:2147483646 !important;background:#000 !important;';
//                 v.style.cssText = 'width:100% !important;height:100% !important;object-fit:contain !important;';
//                 return;
//             }

//             const iframes = Array.from(document.querySelectorAll('iframe'));
//             let best = null, maxArea = 5000;
//             iframes.forEach(f => {
//                 const area = f.clientWidth * f.clientHeight;
//                 if (area > maxArea && f.clientWidth >= f.clientHeight) { maxArea = area; best = f; }
//             });
//             if (best) {
//                 iframes.forEach(f => { if (f !== best) f.style.display = 'none'; });
//                 best.style.cssText = 'position:fixed !important;top:0 !important;left:0 !important;width:100vw !important;height:100vh !important;z-index:2147483645 !important;border:none !important;background:#000 !important;';
//             }
//         }, ENABLE_STREAM_AUDIO).catch(() => {});
//     }
// }

// // =========================================================================================
// // 🚀 MAIN STARTUP (SIMPLE OPEN & BROADCAST)
// // =========================================================================================
// async function startSimpleBroadcast() {
//     console.log(`[🚀] Starting Simple Broadcast: ${RES_W}x${RES_H} @ ${BITRATE}kbps | Channel: ${SELECTED_CHANNEL}`);
//     checkXdotool();
//     setupOBSConfig();

//     // --disable-shutdown-check / --disable-missing-files-check stop OBS from opening
//     // "safe mode" or "missing files" dialogs, which would also end up on screen.
//     // stdio is ignored so OBS can never block on an undrained output pipe during long runs.
//     obsProcess = spawn('obs', [
//         '--startstreaming',
//         '--minimize-to-tray',
//         '--disable-updater',
//         '--disable-shutdown-check',
//         '--disable-missing-files-check'
//     ], {
//         env: { ...process.env, DISPLAY: process.env.DISPLAY || ':99' },
//         stdio: 'ignore'
//     });

//     // Start hiding OBS windows immediately, before Chrome even exists.
//     startWindowKeeper();

//     await new Promise(r => setTimeout(r, 6000));

//     for (let i = 0; i < 12; i++) {
//         try {
//             await obs.connect('ws://127.0.0.1:4455', 'secret');
//             const status = await obs.call('GetStreamStatus');
//             if (!status.outputActive) await obs.call('StartStream');
//             console.log('[+] OBS Streaming Active!');
//             break;
//         } catch (e) {
//             await new Promise(r => setTimeout(r, 2000));
//         }
//     }

//     const args = [
//         '--no-sandbox', '--disable-setuid-sandbox',
//         `--window-size=${RES_W},${RES_H}`, '--window-position=0,0',
//         '--kiosk', '--start-fullscreen',
//         '--autoplay-policy=no-user-gesture-required',
//         '--disable-dev-shm-usage', '--disable-blink-features=AutomationControlled'
//     ];
//     if (PROXY_ENGINE.includes('Cloudflare')) args.push('--proxy-server=socks5://127.0.0.1:40000');

//     browser = await puppeteer.launch({
//         headless: false,
//         defaultViewport: { width: RES_W, height: RES_H },
//         ignoreDefaultArgs: ['--enable-automation'],
//         args
//     });
//     try { browserPid = browser.process().pid; } catch (e) {}

//     const page = (await browser.pages())[0];
//     await page.evaluateOnNewDocument(() => { window.open = () => null; });

//     browser.on('targetcreated', async (target) => {
//         if (target.type() === 'page') {
//             const popup = await target.page().catch(() => null);
//             if (popup && popup !== page) popup.close().catch(() => {});
//         }
//     });

//     console.log(`[🌐] Opening URL: ${targetUrl}`);
//     await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
//     hideOBSAndFocusChrome();

//     // Trigger play & fullscreen twice to catch async players, then leave the page completely alone
//     await new Promise(r => setTimeout(r, 4000));
//     await playAndMaximizeOnce(page);
//     await new Promise(r => setTimeout(r, 5000));
//     await playAndMaximizeOnce(page);
//     hideOBSAndFocusChrome();

//     console.log('[📡] Live Broadcast Running (page is never reloaded; window keeper only keeps Chrome in front).');
// }

// async function cleanup() {
//     if (keeperTimer) { clearInterval(keeperTimer); keeperTimer = null; }
//     try { await obs.call('StopStream'); } catch (e) {}
//     try { await obs.disconnect(); } catch (e) {}
//     if (browser) { try { await browser.close(); } catch (e) {} }
//     if (obsProcess) { try { obsProcess.kill('SIGKILL'); } catch (e) {} }
//     try { execSync('pkill -9 obs chrome || true', { stdio: 'ignore' }); } catch (e) {}
// }

// // =========================================================================================
// // ⏱️ DURATION TIMER
// // =========================================================================================
// const RAW_DURATION = (process.env.CUSTOM_DURATION || '24/7').trim();
// const MAX_SINGLE_RUN_MS = 21000000; // 5h 50m

// function parseFlexibleDuration(input) {
//     const str = (input || '').toLowerCase().trim();
//     if (!str || str === '24/7' || str === 'infinite' || str === '0') return null;
//     let totalMs = 0, matched = false;
//     const regex = /(\d+(?:\.\d+)?)\s*(hours?|hrs?|h|minutes?|mins?|m|seconds?|secs?|s)/g;
//     let match;
//     while ((match = regex.exec(str)) !== null) {
//         matched = true;
//         const val = parseFloat(match[1]);
//         if (match[2].startsWith('h')) totalMs += val * 3600000;
//         else if (match[2].startsWith('m')) totalMs += val * 60000;
//         else if (match[2].startsWith('s')) totalMs += val * 1000;
//     }
//     if (!matched && /^\d+(\.\d+)?$/.test(str)) { totalMs = parseFloat(str) * 60000; matched = true; }
//     return (matched && totalMs > 0) ? Math.round(totalMs) : null;
// }

// function formatMsToDurationString(ms) {
//     const totalSec = Math.max(1, Math.round(ms / 1000));
//     const h = Math.floor(totalSec / 3600);
//     const m = Math.floor((totalSec % 3600) / 60);
//     return [h > 0 ? `${h}h` : '', m > 0 ? `${m}m` : ''].filter(Boolean).join(' ') || '1m';
// }

// function triggerNextWorkflow(nextDurationValue) {
//     const args = [
//         'workflow', 'run', 'main.yml',
//         '-f', `target_urls=${process.env.TARGET_URLS || ''}`,
//         '-f', `okru_stream_channel=${SELECTED_CHANNEL}`,
//         '-f', `stream_quality=${selectedQuality}`,
//         '-f', `proxy_engine=${PROXY_ENGINE}`,
//         '-f', `enable_stream_audio=${process.env.ENABLE_STREAM_AUDIO || 'ON'}`,
//         '-f', `custom_duration=${nextDurationValue}`
//     ];
//     const res = spawn('gh', args, { stdio: 'inherit' });
//     res.on('close', () => {
//         setTimeout(async () => { await cleanup(); process.exit(0); }, 60000);
//     });
// }

// const totalRequestedMs = parseFlexibleDuration(RAW_DURATION);
// if (totalRequestedMs === null) {
//     setTimeout(() => triggerNextWorkflow('24/7'), MAX_SINGLE_RUN_MS);
// } else if (totalRequestedMs <= MAX_SINGLE_RUN_MS) {
//     setTimeout(async () => { await cleanup(); process.exit(0); }, totalRequestedMs);
// } else {
//     const nextStr = formatMsToDurationString(totalRequestedMs - MAX_SINGLE_RUN_MS);
//     setTimeout(() => triggerNextWorkflow(nextStr), MAX_SINGLE_RUN_MS);
// }

// startSimpleBroadcast();




















// ========= this work and not hang dlhd but obs shows interface =============


// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// puppeteer.use(StealthPlugin());

// const fs = require('fs');
// const path = require('path');
// const os = require('os');
// const { spawn, execSync } = require('child_process');
// const { OBSWebSocket } = require('obs-websocket-js');

// process.on('uncaughtException', (err) => console.error('[💥] UNCAUGHT EXCEPTION:', err.message));
// process.on('unhandledRejection', (reason) => console.error('[💥] UNHANDLED REJECTION:', reason));

// const obs = new OBSWebSocket();

// // =========================================================================================
// // ⚙️ CONFIGURATION & ENV VARIABLES
// // =========================================================================================
// const selectedQuality = process.env.STREAM_QUALITY || '720p';
// const PROXY_ENGINE = process.env.PROXY_ENGINE || 'Cloudflare WARP (Recommended)';
// const ENABLE_STREAM_AUDIO = process.env.ENABLE_STREAM_AUDIO !== 'OFF';
// const SELECTED_CHANNEL = (process.env.OKRU_STREAM_ID || '1').trim();

// let RES_W = 1280, RES_H = 720, BITRATE = 3000;
// if (selectedQuality === '360p') { RES_W = 640; RES_H = 360; BITRATE = 800; }
// else if (selectedQuality === '480p') { RES_W = 854; RES_H = 480; BITRATE = 1500; }
// else if (selectedQuality === '720p') { RES_W = 1280; RES_H = 720; BITRATE = 3000; }
// else if (selectedQuality.includes('1080p')) { RES_W = 1920; RES_H = 1080; BITRATE = 4500; }

// // 🔒 STREAM KEYS (UNTOUCHED)
// const STREAM_KEYS = {
//     '1'    : '15254238731883_15281627925099_najspfkgne',
//     '1.1'  : '15254260751979_15281671637611_2plrcfqzze',
//     '1.2'  : '15254285524587_15281717840491_7e6qdknzsu',
//     '1.3'  : '16983200374379_18360218880619_efmw4fchxm',
//     '1.4'  : '16983242579563_18360288741995_t2kh2jvcym',
//     '1.5'  : '16983247822443_18360297982571_3zs5ml7gua',
//     '1.6'  : '16983254834795_18360310237803_xrz3pf4uea',
//     '1.7'  : '16983259553387_18360317971051_6khoe5efge',
//     '1.8'  : '16983264468587_18360327342699_wsn7zgr7ee',
//     '1.9'  : '16983269514859_18360335075947_363qzjlbte',
//     '1.10' : '16983277641323_18360347921003_rpf6hkqpdm',
//     '1.11' : '16983286554219_18360360503915_lrqraxbz3y',
//     '2'    : '15254299352683_15281743071851_7dvz3h5d7q',
//     '2.1'  : '15254308986475_15281761618539_3xca7oij3u',
//     '2.2'  : '15254328122987_15281795566187_zjqa6bqzoq',
//     '3'    : '15254341885547_15281821059691_hhlpb5vicy',
//     '3.1'  : '15254357089899_15281848322667_sxeexgvzl4',
//     '3.2'  : '15254367510123_15281868180075_pc4jrytfgm',
//     '3.3'  : '17485986405995_19233134873195_iw63xjblny',
//     '3.4'  : '17485996039787_19233150929515_d3yeoweuam',
//     '3.5'  : '17486002789995_19233161611883_mbg22slybe',
//     '3.6'  : '17486007770731_19233169934955_teme2zt4fm',
//     '4'    : '15255022345835_15283095800427_vwrupxzstm',
//     '4.1'  : '15255038074475_15283122080363_ai5qqp2we4',
//     '4.2'  : '15255045480043_15283135842923_tldl4bhmii',
//     '4.3'  : '15255208599147_15283449629291_abltofuc7m',
//     '4.4'  : '15255217708651_15283466603115_bojrrqtlmu',
//     '4.5'  : '15255227670123_15283486263915_jpntt54mve',
//     '5'    : '17135767461483_18625099401835_4gpytlxk4a',
//     '5.1'  : '15273713933931_15317494860395_avj47smmim',
//     '5.2'  : '15273722257003_15317510195819_6edjluvdqi',
//     '5.3'  : '15273739624043_15317541653099_ii4bxpvabe',
//     '5.4'  : '15273750175339_15317561707115_csel26ku5a',
//     '5.5'  : '15273760071275_15317579467371_cnewcj54me',
//     '5.6'  : '15273767935595_15317595851371_3q43tk7tvm',
//     '5.7'  : '15273778683499_15317616560747_4piekvs4wu',
//     's1.1' : '14204232736303_14846150314543_37jq4ryehq',
//     's1.2' : '14204288179759_14846247373359_tnsknmapva',
//     's1.3' : '14204319768111_14846302489135_sr4ht4ccwq',
//     's1.4' : '14204331957807_14846326147631_dji2acqcze',
//     's1.5' : '14204346572335_14846351641135_7gvns4o5ue',
//     's1.6' : '14204361252399_14846376479279_cjajhf4d3y',
//     's1.7' : '14204370492975_14846393649711_6fduhdqite',
//     's1.8' : '14204395527727_14846438017583_s2jlti7lsm',
//     's1.9' : '14204411387439_14846464887343_f5lxgcqj5y',
//     's1.10': '14204424691247_14846487562799_xmbvntt6wa',
//     's2.1' : '14204490948143_14846603495983_kzevn36tii',
//     's2.2' : '14204506742319_14846634494511_ta2rxyg2oy',
//     's2.3' : '14204523322927_14846661233199_foqb3q7zb4',
//     's2.4' : '14204540034607_14846689085999_gjejdie4uy',
//     's2.5' : '14204555304495_14846715497007_zdanghuxzu',
//     's2.6' : '14204565200431_14846734371375_ap3bqpabpu',
//     's2.7' : '14204577259055_14846756194863_3ecad2535u',
//     's2.8' : '14204592528943_14846785227311_4hjl46y62e',
//     's2.9' : '14204602621487_14846802594351_ilnp6lxekq',
//     's2.10': '14206184136239_14849618610735_ihnbx7hkoi'
// };

// const ACTIVE_STREAM_KEY = STREAM_KEYS[SELECTED_CHANNEL] || STREAM_KEYS['1'];

// // =========================================================================================
// // 🔗 TARGET URL
// // =========================================================================================
// const rawUrls = (process.env.TARGET_URLS || 'https://dadocric.st/player.php?id=starsp3&v=m').trim();
// const targetUrl = rawUrls
//     .split(/[,|]/)
//     .map(u => {
//         let clean = u.split('::')[0].trim().replace(/^!/, '');
//         if (clean && !clean.startsWith('http')) clean = 'https://' + clean;
//         return clean;
//     })
//     .filter(u => u.length > 8)[0] || 'https://dadocric.st/player.php?id=starsp3&v=m';

// let browser = null;
// let obsProcess = null;

// // =========================================================================================
// // 🎥 OBS CONFIGURATION
// // =========================================================================================
// function setupOBSConfig() {
//     const obsDir = path.join(os.homedir(), '.config', 'obs-studio');
//     const profilesDir = path.join(obsDir, 'basic', 'profiles', 'Untitled');
//     const scenesDir = path.join(obsDir, 'basic', 'scenes');
//     const wsPluginDir = path.join(obsDir, 'plugin_config', 'obs-websocket');

//     fs.mkdirSync(profilesDir, { recursive: true });
//     fs.mkdirSync(scenesDir, { recursive: true });
//     fs.mkdirSync(wsPluginDir, { recursive: true });

//     fs.writeFileSync(path.join(obsDir, 'global.ini'),
// `[General]
// LicenseAccepted=true
// FirstRun=false
// [BasicWindow]
// ShowAutoConfig=false
// Warned=true
// [OBSWebSocket]
// ServerEnabled=true
// ServerPort=4455
// ServerPassword=secret
// `);

//     fs.writeFileSync(path.join(wsPluginDir, 'config.json'), JSON.stringify({
//         alerts_enabled: false,
//         auth_required: true,
//         first_load: false,
//         server_enabled: true,
//         server_password: "secret",
//         server_port: 4455
//     }, null, 2));

//     fs.writeFileSync(path.join(profilesDir, 'basic.ini'),
// `[General]
// Name=Untitled
// [Video]
// BaseCX=${RES_W}
// BaseCY=${RES_H}
// OutputCX=${RES_W}
// OutputCY=${RES_H}
// FPSCommon=30
// [Output]
// Mode=Advanced
// [AdvOut]
// TrackIndex=1
// RecType=Standard
// Encoder=obs_x264
// [obs_x264]
// bitrate=${BITRATE}
// keyint_sec=2
// preset=ultrafast
// profile=main
// tune=zerolatency
// rate_control=CBR
// `);

//     fs.writeFileSync(path.join(profilesDir, 'service.json'), JSON.stringify({
//         settings: { server: "rtmp://vsu.okcdn.ru/input/", key: ACTIVE_STREAM_KEY.trim() },
//         type: "rtmp_custom"
//     }, null, 2));

//     fs.writeFileSync(path.join(scenesDir, 'Untitled.json'), JSON.stringify({
//         current_scene: "MainScene",
//         current_program_scene: "MainScene",
//         name: "Untitled",
//         scene_order: [{ name: "MainScene" }],
//         sources: [
//             { id: "xshm_input", name: "Screen", settings: { show_cursor: false } },
//             { id: "pulse_output_capture", name: "Audio", settings: {} },
//             { id: "scene", name: "MainScene", settings: { items: [{ name: "Screen", id: 1, visible: true }, { name: "Audio", id: 2, visible: true }] } }
//         ]
//     }, null, 2));
// }

// function hideOBSAndFocusChrome() {
//     try {
//         execSync('xdotool search --name "OBS" windowminimize || true', { stdio: 'ignore' });
//         execSync(`xdotool search --onlyvisible --class "chrome" windowmove 0 0 windowsize ${RES_W} ${RES_H} windowactivate || true`, { stdio: 'ignore' });
//     } catch (e) {}
// }

// // =========================================================================================
// // 🎬 ONE-TIME PLAY & FULLSCREEN TRIGGER
// // =========================================================================================
// async function playAndMaximizeOnce(page) {
//     for (const frame of page.frames()) {
//         if (frame.isDetached()) continue;
//         await frame.evaluate((audioEnabled) => {
//             document.documentElement.style.background = '#000';
//             if (document.body) {
//                 document.body.style.background = '#000';
//                 document.body.style.overflow = 'hidden';
//                 document.body.style.margin = '0';
//             }

//             const selectors = '.jw-icon-display, .jw-icon-playback, button[data-plyr="play"], .vjs-big-play-button, .vjs-play-control, [class*="unmute"], .fp-play, video';
//             document.querySelectorAll(selectors).forEach(el => { try { el.click(); } catch (e) {} });

//             const v = document.querySelector('video');
//             if (v) {
//                 if (v.paused) v.play().catch(() => {});
//                 v.muted = !audioEnabled;
//                 v.volume = audioEnabled ? 1.0 : 0.0;
//                 const wrap = v.closest('.jwplayer, #player, .plyr, .vjs-player, [data-player]') || v;
//                 wrap.style.cssText = 'position:fixed !important;top:0 !important;left:0 !important;width:100vw !important;height:100vh !important;z-index:2147483646 !important;background:#000 !important;';
//                 v.style.cssText = 'width:100% !important;height:100% !important;object-fit:contain !important;';
//                 return;
//             }

//             const iframes = Array.from(document.querySelectorAll('iframe'));
//             let best = null, maxArea = 5000;
//             iframes.forEach(f => {
//                 const area = f.clientWidth * f.clientHeight;
//                 if (area > maxArea && f.clientWidth >= f.clientHeight) { maxArea = area; best = f; }
//             });
//             if (best) {
//                 iframes.forEach(f => { if (f !== best) f.style.display = 'none'; });
//                 best.style.cssText = 'position:fixed !important;top:0 !important;left:0 !important;width:100vw !important;height:100vh !important;z-index:2147483645 !important;border:none !important;background:#000 !important;';
//             }
//         }, ENABLE_STREAM_AUDIO).catch(() => {});
//     }
// }

// // =========================================================================================
// // 🚀 MAIN STARTUP (SIMPLE OPEN & BROADCAST)
// // =========================================================================================
// async function startSimpleBroadcast() {
//     console.log(`[🚀] Starting Simple Broadcast: ${RES_W}x${RES_H} @ ${BITRATE}kbps | Channel: ${SELECTED_CHANNEL}`);
//     setupOBSConfig();

//     obsProcess = spawn('obs', ['--startstreaming', '--minimize-to-tray', '--disable-updater'], {
//         env: { ...process.env, DISPLAY: process.env.DISPLAY || ':99' }
//     });

//     await new Promise(r => setTimeout(r, 6000));

//     for (let i = 0; i < 12; i++) {
//         try {
//             await obs.connect('ws://127.0.0.1:4455', 'secret');
//             const status = await obs.call('GetStreamStatus');
//             if (!status.outputActive) await obs.call('StartStream');
//             console.log('[+] OBS Streaming Active!');
//             break;
//         } catch (e) {
//             await new Promise(r => setTimeout(r, 2000));
//         }
//     }

//     const args = [
//         '--no-sandbox', '--disable-setuid-sandbox',
//         `--window-size=${RES_W},${RES_H}`, '--window-position=0,0',
//         '--kiosk', '--start-fullscreen',
//         '--autoplay-policy=no-user-gesture-required',
//         '--disable-dev-shm-usage', '--disable-blink-features=AutomationControlled'
//     ];
//     if (PROXY_ENGINE.includes('Cloudflare')) args.push('--proxy-server=socks5://127.0.0.1:40000');

//     browser = await puppeteer.launch({
//         headless: false,
//         defaultViewport: { width: RES_W, height: RES_H },
//         ignoreDefaultArgs: ['--enable-automation'],
//         args
//     });

//     const page = (await browser.pages())[0];
//     await page.evaluateOnNewDocument(() => { window.open = () => null; });

//     browser.on('targetcreated', async (target) => {
//         if (target.type() === 'page') {
//             const popup = await target.page().catch(() => null);
//             if (popup && popup !== page) popup.close().catch(() => {});
//         }
//     });

//     console.log(`[🌐] Opening URL: ${targetUrl}`);
//     await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
//     hideOBSAndFocusChrome();

//     // Trigger play & fullscreen twice to catch async players, then leave completely alone
//     await new Promise(r => setTimeout(r, 4000));
//     await playAndMaximizeOnce(page);
//     await new Promise(r => setTimeout(r, 5000));
//     await playAndMaximizeOnce(page);
//     hideOBSAndFocusChrome();

//     console.log('[📡] Live Broadcast Running (No Watchdog / No Reloads).');
// }

// async function cleanup() {
//     try { await obs.call('StopStream'); } catch (e) {}
//     try { await obs.disconnect(); } catch (e) {}
//     if (browser) { try { await browser.close(); } catch (e) {} }
//     if (obsProcess) { try { obsProcess.kill('SIGKILL'); } catch (e) {} }
//     try { execSync('pkill -9 obs chrome || true', { stdio: 'ignore' }); } catch (e) {}
// }

// // =========================================================================================
// // ⏱️ DURATION TIMER
// // =========================================================================================
// const RAW_DURATION = (process.env.CUSTOM_DURATION || '24/7').trim();
// const MAX_SINGLE_RUN_MS = 21000000; // 5h 50m

// function parseFlexibleDuration(input) {
//     const str = (input || '').toLowerCase().trim();
//     if (!str || str === '24/7' || str === 'infinite' || str === '0') return null;
//     let totalMs = 0, matched = false;
//     const regex = /(\d+(?:\.\d+)?)\s*(hours?|hrs?|h|minutes?|mins?|m|seconds?|secs?|s)/g;
//     let match;
//     while ((match = regex.exec(str)) !== null) {
//         matched = true;
//         const val = parseFloat(match[1]);
//         if (match[2].startsWith('h')) totalMs += val * 3600000;
//         else if (match[2].startsWith('m')) totalMs += val * 60000;
//         else if (match[2].startsWith('s')) totalMs += val * 1000;
//     }
//     if (!matched && /^\d+(\.\d+)?$/.test(str)) { totalMs = parseFloat(str) * 60000; matched = true; }
//     return (matched && totalMs > 0) ? Math.round(totalMs) : null;
// }

// function formatMsToDurationString(ms) {
//     const totalSec = Math.max(1, Math.round(ms / 1000));
//     const h = Math.floor(totalSec / 3600);
//     const m = Math.floor((totalSec % 3600) / 60);
//     return [h > 0 ? `${h}h` : '', m > 0 ? `${m}m` : ''].filter(Boolean).join(' ') || '1m';
// }

// function triggerNextWorkflow(nextDurationValue) {
//     const args = [
//         'workflow', 'run', 'main.yml',
//         '-f', `target_urls=${process.env.TARGET_URLS || ''}`,
//         '-f', `okru_stream_channel=${SELECTED_CHANNEL}`,
//         '-f', `stream_quality=${selectedQuality}`,
//         '-f', `proxy_engine=${PROXY_ENGINE}`,
//         '-f', `enable_stream_audio=${process.env.ENABLE_STREAM_AUDIO || 'ON'}`,
//         '-f', `custom_duration=${nextDurationValue}`
//     ];
//     const res = spawn('gh', args, { stdio: 'inherit' });
//     res.on('close', () => {
//         setTimeout(async () => { await cleanup(); process.exit(0); }, 60000);
//     });
// }

// const totalRequestedMs = parseFlexibleDuration(RAW_DURATION);
// if (totalRequestedMs === null) {
//     setTimeout(() => triggerNextWorkflow('24/7'), MAX_SINGLE_RUN_MS);
// } else if (totalRequestedMs <= MAX_SINGLE_RUN_MS) {
//     setTimeout(async () => { await cleanup(); process.exit(0); }, totalRequestedMs);
// } else {
//     const nextStr = formatMsToDurationString(totalRequestedMs - MAX_SINGLE_RUN_MS);
//     setTimeout(() => triggerNextWorkflow(nextStr), MAX_SINGLE_RUN_MS);
// }

// startSimpleBroadcast();






















































// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// puppeteer.use(StealthPlugin());

// const fs = require('fs');
// const path = require('path');
// const os = require('os');
// const crypto = require('crypto');
// const { spawn, execSync } = require('child_process');
// const { OBSWebSocket } = require('obs-websocket-js');

// // =========================================================================================
// // 🛡️ GLOBAL CRASH SHIELD & MEMORY MANAGEMENT
// // =========================================================================================
// process.on('uncaughtException', (err) => console.error('[💥] UNCAUGHT EXCEPTION:', err.stack || err.message));
// process.on('unhandledRejection', (reason) => console.error('[💥] UNHANDLED REJECTION:', reason));

// const obs = new OBSWebSocket();

// // =========================================================================================
// // ⚙️ CONFIGURATION & ENV VARIABLES
// // =========================================================================================
// const selectedQuality = process.env.STREAM_QUALITY || '720p';
// const SERVER_SELECTION = (process.env.SERVER_SELECTION || 'None').trim();
// const PROXY_ENGINE = process.env.PROXY_ENGINE || 'Cloudflare WARP (Recommended)';
// const ENABLE_STREAM_AUDIO = process.env.ENABLE_STREAM_AUDIO !== 'OFF';
// const SELECTED_CHANNEL = (process.env.OKRU_STREAM_ID || '1').trim();

// // Note: Setting refresh to a realistic value or keeping it extremely high if disabled.
// const FORCE_REFRESH_MS = 900000000 * 60 * 1000; 

// const NO_REFRESH_DOMAINS = [
//     'youtube.com', 'facebook.com', 'streamed.pk', 'cricstreams.',
//     'sport4u.online', 'vercel.app', 'netlify.app'
// ];

// let RES_W = 1280, RES_H = 720, BITRATE = 3000;
// if (selectedQuality === '360p') { RES_W = 640; RES_H = 360; BITRATE = 800; }
// else if (selectedQuality === '480p') { RES_W = 854; RES_H = 480; BITRATE = 1500; }
// else if (selectedQuality === '720p') { RES_W = 1280; RES_H = 720; BITRATE = 3000; }
// else if (selectedQuality.includes('1080p')) { RES_W = 1920; RES_H = 1080; BITRATE = 4500; }

// // 🔒 UNMODIFIED STREAM KEYS
// const STREAM_KEYS = {
//     '1'    : '15254238731883_15281627925099_najspfkgne',
//     '1.1'  : '15254260751979_15281671637611_2plrcfqzze',
//     '1.2'  : '15254285524587_15281717840491_7e6qdknzsu',
//     '1.3'  : '16983200374379_18360218880619_efmw4fchxm',
//     '1.4'  : '16983242579563_18360288741995_t2kh2jvcym',
//     '1.5'  : '16983247822443_18360297982571_3zs5ml7gua',
//     '1.6'  : '16983254834795_18360310237803_xrz3pf4uea',
//     '1.7'  : '16983259553387_18360317971051_6khoe5efge',
//     '1.8'  : '16983264468587_18360327342699_wsn7zgr7ee',
//     '1.9'  : '16983269514859_18360335075947_363qzjlbte',
//     '1.10' : '16983277641323_18360347921003_rpf6hkqpdm',
//     '1.11' : '16983286554219_18360360503915_lrqraxbz3y',
//     '2'    : '15254299352683_15281743071851_7dvz3h5d7q',
//     '2.1'  : '15254308986475_15281761618539_3xca7oij3u',
//     '2.2'  : '15254328122987_15281795566187_zjqa6bqzoq',
//     '3'    : '15254341885547_15281821059691_hhlpb5vicy',
//     '3.1'  : '15254357089899_15281848322667_sxeexgvzl4',
//     '3.2'  : '15254367510123_15281868180075_pc4jrytfgm',
//     '3.3'  : '17485986405995_19233134873195_iw63xjblny',
//     '3.4'  : '17485996039787_19233150929515_d3yeoweuam',
//     '3.5'  : '17486002789995_19233161611883_mbg22slybe',
//     '3.6'  : '17486007770731_19233169934955_teme2zt4fm',
//     '4'    : '15255022345835_15283095800427_vwrupxzstm',
//     '4.1'  : '15255038074475_15283122080363_ai5qqp2we4',
//     '4.2'  : '15255045480043_15283135842923_tldl4bhmii',
//     '4.3'  : '15255208599147_15283449629291_abltofuc7m',
//     '4.4'  : '15255217708651_15283466603115_bojrrqtlmu',
//     '4.5'  : '15255227670123_15283486263915_jpntt54mve',
//     '5'    : '17135767461483_18625099401835_4gpytlxk4a',
//     '5.1'  : '15273713933931_15317494860395_avj47smmim',
//     '5.2'  : '15273722257003_15317510195819_6edjluvdqi',
//     '5.3'  : '15273739624043_15317541653099_ii4bxpvabe',
//     '5.4'  : '15273750175339_15317561707115_csel26ku5a',
//     '5.5'  : '15273760071275_15317579467371_cnewcj54me',
//     '5.6'  : '15273767935595_15317595851371_3q43tk7tvm',
//     '5.7'  : '15273778683499_15317616560747_4piekvs4wu',
//     's1.1' : '14204232736303_14846150314543_37jq4ryehq',
//     's1.2' : '14204288179759_14846247373359_tnsknmapva',
//     's1.3' : '14204319768111_14846302489135_sr4ht4ccwq',
//     's1.4' : '14204331957807_14846326147631_dji2acqcze',
//     's1.5' : '14204346572335_14846351641135_7gvns4o5ue',
//     's1.6' : '14204361252399_14846376479279_cjajhf4d3y',
//     's1.7' : '14204370492975_14846393649711_6fduhdqite',
//     's1.8' : '14204395527727_14846438017583_s2jlti7lsm',
//     's1.9' : '14204411387439_14846464887343_f5lxgcqj5y',
//     's1.10': '14204424691247_14846487562799_xmbvntt6wa',
//     's2.1' : '14204490948143_14846603495983_kzevn36tii',
//     's2.2' : '14204506742319_14846634494511_ta2rxyg2oy',
//     's2.3' : '14204523322927_14846661233199_foqb3q7zb4',
//     's2.4' : '14204540034607_14846689085999_gjejdie4uy',
//     's2.5' : '14204555304495_14846715497007_zdanghuxzu',
//     's2.6' : '14204565200431_14846734371375_ap3bqpabpu',
//     's2.7' : '14204577259055_14846756194863_3ecad2535u',
//     's2.8' : '14204592528943_14846785227311_4hjl46y62e',
//     's2.9' : '14204602621487_14846802594351_ilnp6lxekq',
//     's2.10': '14206184136239_14849618610735_ihnbx7hkoi'
// };

// const ACTIVE_STREAM_KEY = STREAM_KEYS[SELECTED_CHANNEL] || STREAM_KEYS['1'];

// // =========================================================================================
// // 🔗 MULTI-URL PARSER
// // =========================================================================================
// const rawUrls = (process.env.TARGET_URLS || 'https://dadocric.st/player.php?id=starsp3&v=m').trim();
// const urlList = rawUrls
//     .split(/[,|]/)
//     .map(u => {
//         let clean = u.split('::')[0].trim().replace(/^!/, '');
//         if (clean && !clean.startsWith('http')) clean = 'https://' + clean;
//         return clean;
//     })
//     .filter(u => u.length > 8);

// if (urlList.length === 0) urlList.push('https://dadocric.st/player.php?id=starsp3&v=m');

// let currentUrlIndex = 0;
// let browser = null;
// let page = null;
// let obsProcess = null;
// let isCleaningUp = false;

// // =========================================================================================
// // 📊 3-PILLAR HEALTH MONITOR STATE
// // =========================================================================================
// let netStats = {};
// let visualStats = {};

// function resetMonitorStats() {
//     netStats = {
//         lastSegmentOkTime: Date.now(),
//         segmentErrorCount: 0,
//         lastHttpStatus: 200,
//         lastMediaSeq: null,
//         lastSeqAdvanceTime: Date.now(),
//         staleManifestCount: 0,
//         programDateTimeLagSec: 0,
//         seenManifest: false
//     };
//     visualStats = {
//         lastCheckTime: 0,
//         lastHash: null,
//         sameHashSince: Date.now(),
//         recentHashes: []
//     };
// }
// resetMonitorStats();

// console.log(`[🚀] Engine Locked: ${RES_W}x${RES_H} @ ${BITRATE}kbps | Channel: ${SELECTED_CHANNEL}`);
// console.log(`[📋] Loaded ${urlList.length} URLs for Failover:`, urlList);

// // =========================================================================================
// // 🎥 OBS CONFIGURATION (Fixed for OBS 29/30+ & WebSocket v5)
// // =========================================================================================
// function setupOBSConfig() {
//     const obsDir = path.join(os.homedir(), '.config', 'obs-studio');
//     const profilesDir = path.join(obsDir, 'basic', 'profiles', 'Untitled');
//     const scenesDir = path.join(obsDir, 'basic', 'scenes');
//     const wsPluginDir = path.join(obsDir, 'plugin_config', 'obs-websocket');

//     fs.mkdirSync(profilesDir, { recursive: true });
//     fs.mkdirSync(scenesDir, { recursive: true });
//     fs.mkdirSync(wsPluginDir, { recursive: true });

//     fs.writeFileSync(path.join(obsDir, 'global.ini'), 
// `[General]
// LicenseAccepted=true
// FirstRun=false
// [BasicWindow]
// ShowAutoConfig=false
// Warned=true
// [OBSWebSocket]
// ServerEnabled=true
// ServerPort=4455
// ServerPassword=secret
// `);

//     fs.writeFileSync(path.join(wsPluginDir, 'config.json'), JSON.stringify({
//         alerts_enabled: false,
//         auth_required: true,
//         first_load: false,
//         server_enabled: true,
//         server_password: "secret",
//         server_port: 4455
//     }, null, 2));

//     fs.writeFileSync(path.join(profilesDir, 'basic.ini'), 
// `[General]
// Name=Untitled
// [Video]
// BaseCX=${RES_W}
// BaseCY=${RES_H}
// OutputCX=${RES_W}
// OutputCY=${RES_H}
// FPSCommon=30
// [Output]
// Mode=Advanced
// [AdvOut]
// TrackIndex=1
// RecType=Standard
// Encoder=obs_x264
// [obs_x264]
// bitrate=${BITRATE}
// keyint_sec=2
// preset=ultrafast
// profile=main
// tune=zerolatency
// rate_control=CBR
// `);

//     const serviceJson = {
//         settings: { server: "rtmp://vsu.okcdn.ru/input/", key: ACTIVE_STREAM_KEY.trim() },
//         type: "rtmp_custom"
//     };
//     fs.writeFileSync(path.join(profilesDir, 'service.json'), JSON.stringify(serviceJson, null, 2));

//     const sceneJson = {
//         current_scene: "MainScene",
//         current_program_scene: "MainScene",
//         name: "Untitled",
//         scene_order: [{ name: "WaitingScene" }, { name: "MainScene" }],
//         sources: [
//             { id: "xshm_input", name: "Screen", settings: { show_cursor: false } },
//             { id: "pulse_output_capture", name: "Audio", settings: {} },
//             { id: "scene", name: "MainScene", settings: { items: [{ name: "Screen", id: 1, visible: true }, { name: "Audio", id: 2, visible: true }] } },
//             { id: "scene", name: "WaitingScene", settings: { items: [{ name: "Screen", id: 1, visible: true }] } }
//         ]
//     };
//     fs.writeFileSync(path.join(scenesDir, 'Untitled.json'), JSON.stringify(sceneJson, null, 2));
// }

// // =========================================================================================
// // 🪟 HIDE OBS WINDOW & FORCE CHROME ON TOP (X11 / Xvfb Fix)
// // =========================================================================================
// function keepChromeOnTopAndHideOBS() {
//     try {
//         // Move OBS completely off-screen or minimize it
//         execSync('xdotool search --name "OBS" windowminimize || true', { stdio: 'ignore' });
//         // Force Chrome to 0,0 and set exact resolution
//         execSync(`xdotool search --onlyvisible --class "chrome" windowmove 0 0 windowsize ${RES_W} ${RES_H} windowactivate || true`, { stdio: 'ignore' });
//         execSync('wmctrl -a "Chrome" || true', { stdio: 'ignore' });
//     } catch (e) {}
// }

// // =========================================================================================
// // 🛡️ POPUP & AD FIREWALL + NETWORK MONITOR
// // =========================================================================================
// async function setupPageProtections(p) {
//     try {
//         await p.setRequestInterception(true);
        
//         // Remove existing listeners if resetting
//         p.removeAllListeners('request');
//         p.removeAllListeners('response');
//         p.removeAllListeners('requestfailed');

//         p.on('request', (req) => {
//             const url = req.url().toLowerCase();
//             const badWords = ['popads', 'exoclick', 'adsterra', 'onclickads', 'doubleclick', 'adexchangerapid', 'bet365', '1xbet', 'analytics', 'googlesyndication'];
//             if (badWords.some(w => url.includes(w))) {
//                 return req.abort().catch(() => {});
//             }
//             req.continue().catch(() => {});
//         });

//         p.on('response', async (res) => {
//             try {
//                 const url = res.url().toLowerCase();
//                 const status = res.status();
//                 const isManifest = url.includes('.m3u8') || url.includes('.mpd');
//                 const isSegment = url.includes('.ts') || url.includes('.m4s') || url.includes('.aac') || url.includes('.mp4');

//                 if (isManifest || isSegment) {
//                     netStats.lastHttpStatus = status;
//                     if (status >= 200 && status < 400) {
//                         netStats.lastSegmentOkTime = Date.now();
//                         netStats.segmentErrorCount = 0;
//                     } else if (status >= 400) {
//                         netStats.segmentErrorCount++;
//                     }
//                 }

//                 if (url.includes('.m3u8') && status >= 200 && status < 300) {
//                     const text = await res.text().catch(() => '');
//                     if (text && text.includes('#EXTM3U')) {
//                         const seqMatch = text.match(/#EXT-X-MEDIA-SEQUENCE:(\d+)/i);
//                         if (seqMatch) {
//                             netStats.seenManifest = true;
//                             const seq = parseInt(seqMatch[1], 10);
//                             if (netStats.lastMediaSeq !== null && seq === netStats.lastMediaSeq) {
//                                 netStats.staleManifestCount++;
//                             } else {
//                                 netStats.lastMediaSeq = seq;
//                                 netStats.lastSeqAdvanceTime = Date.now();
//                                 netStats.staleManifestCount = 0;
//                             }
//                         }

//                         const pdtMatches = text.match(/#EXT-X-PROGRAM-DATE-TIME:([^\r\n]+)/gi);
//                         if (pdtMatches && pdtMatches.length > 0) {
//                             const lastPdtLine = pdtMatches[pdtMatches.length - 1];
//                             const isoStr = lastPdtLine.replace(/#EXT-X-PROGRAM-DATE-TIME:/i, '').trim();
//                             const pdtTime = Date.parse(isoStr);
//                             if (!isNaN(pdtTime)) {
//                                 netStats.programDateTimeLagSec = Math.round((Date.now() - pdtTime) / 1000);
//                             }
//                         }
//                     }
//                 }
//             } catch (e) {}
//         });

//         p.on('requestfailed', (req) => {
//             const url = req.url().toLowerCase();
//             if (url.includes('.m3u8') || url.includes('.ts') || url.includes('.m4s')) {
//                 netStats.segmentErrorCount++;
//             }
//         });

//         await p.evaluateOnNewDocument(() => {
//             window.open = () => null;
//             window.alert = () => {};
//             window.confirm = () => true;
//             window.prompt = () => null;
//             const style = document.createElement('style');
//             style.textContent = `html, body { background-color: #000 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important; }`;
//             document.documentElement.appendChild(style);
//         });
//     } catch (e) {
//         console.error('[⚠️] Page Protection Setup Warning:', e.message);
//     }
// }

// async function showLoadingOverlay(p, title, subtitle) {
//     if (!p || p.isClosed()) return;
//     try {
//         await p.evaluate((t, s) => {
//             if (window.self !== window.top) return;
//             let el = document.getElementById('bot-loading-ui');
//             if (!el) {
//                 el = document.createElement('div');
//                 el.id = 'bot-loading-ui';
//                 el.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;background:#000;z-index:2147483647;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;font-family:sans-serif;';
//                 document.documentElement.appendChild(el);
//             }
//             el.innerHTML = `<h1 style="font-size:38px;margin-bottom:10px;color:#e50914;">${t}</h1><p style="font-size:20px;color:#aaa;">${s}</p>`;
//         }, title, subtitle);
//     } catch (e) {}
// }

// async function hideLoadingOverlay(p) {
//     if (!p || p.isClosed()) return;
//     try {
//         await p.evaluate(() => {
//             const el = document.getElementById('bot-loading-ui');
//             if (el) el.remove();
//         });
//     } catch (e) {}
// }

// // =========================================================================================
// // 🎬 VIDEO PLAYER AUTO-PLAY, LIVE EDGE CLICK & FULLSCREEN LOCK
// // =========================================================================================
// async function lockAndPlayVideo(p) {
//     if (!p || p.isClosed()) return;
//     try {
//         if (SERVER_SELECTION !== 'None') {
//             await p.evaluate((srv) => {
//                 const btn = Array.from(document.querySelectorAll('button, a, div, span')).find(b => b.innerText && b.innerText.trim().includes(srv));
//                 if (btn) btn.click();
//             }, SERVER_SELECTION).catch(() => {});
//             await new Promise(r => setTimeout(r, 2000));
//         }

//         // Click Play / Live / Unmute across all frames
//         for (let attempt = 0; attempt < 6; attempt++) {
//             let playing = false;
//             for (const frame of p.frames()) {
//                 if (frame.isDetached()) continue;
//                 try {
//                     const status = await frame.evaluate((audioEnabled) => {
//                         const playAndLiveSelectors = '.jw-icon-display, .jw-icon-playback, .jw-icon-live, button[data-plyr="play"], .vjs-big-play-button, .vjs-play-control, .vjs-live-control, [class*="unmute"], .fp-play, .clappr-player, video';
//                         document.querySelectorAll(playAndLiveSelectors).forEach(el => { try { el.click(); } catch(e){} });

//                         let isPlaying = false;
//                         document.querySelectorAll('video').forEach(v => {
//                             if (v.paused) v.play().catch(() => {});
//                             v.muted = !audioEnabled;
//                             v.volume = audioEnabled ? 1.0 : 0.0;
//                             if (!v.paused && v.readyState >= 2) isPlaying = true;
//                         });
//                         return isPlaying;
//                     }, ENABLE_STREAM_AUDIO);
//                     if (status) { playing = true; break; }
//                 } catch (e) {}
//             }
//             if (playing) break;
//             await new Promise(r => setTimeout(r, 1500));
//         }

//         // Continuous 1s Lock
//         for (const frame of p.frames()) {
//             if (frame.isDetached()) continue;
//             await frame.evaluate((audioEnabled) => {
//                 if (window.__frameLockActive) return;
//                 window.__frameLockActive = true;
//                 setInterval(() => {
//                     document.documentElement.style.setProperty('background', '#000', 'important');
//                     if (document.body) document.body.style.setProperty('background', '#000', 'important');

//                     const v = document.querySelector('video');
//                     if (v) {
//                         if (v.paused) {
//                             v.play().catch(() => {});
//                             const resumeSelectors = '.jw-icon-display, .jw-icon-playback, button[data-plyr="play"], .vjs-play-control, .vjs-big-play-button, .fp-play';
//                             document.querySelectorAll(resumeSelectors).forEach(btn => { try { btn.click(); } catch(e){} });
//                         }

//                         const liveBtns = document.querySelectorAll('.jw-icon-live, .vjs-live-control, [class*="live-button"], [aria-label*="Live"]');
//                         liveBtns.forEach(btn => {
//                             const cls = (btn.className || '').toString().toLowerCase();
//                             if (cls.includes('not-live') || cls.includes('behind') || cls.includes('dvr')) {
//                                 try { btn.click(); } catch(e){}
//                             }
//                         });

//                         if (v.clientWidth > 50 || !v.paused) {
//                             v.muted = !audioEnabled;
//                             v.volume = audioEnabled ? 1.0 : 0.0;
//                             const wrap = v.closest('.jwplayer, #player, .plyr, .vjs-player, [data-player], .player-poster') || v;
//                             wrap.style.cssText = 'position:fixed !important;top:0 !important;left:0 !important;width:100vw !important;height:100vh !important;z-index:2147483646 !important;background:#000 !important;';
//                             v.style.cssText = 'width:100% !important;height:100% !important;object-fit:contain !important;';
//                             document.querySelectorAll('.jw-controls, .plyr__controls, .vjs-control-bar').forEach(c => c.style.setProperty('display', 'none', 'important'));
//                             return;
//                         }
//                     }

//                     const iframes = Array.from(document.querySelectorAll('iframe'));
//                     let best = null, maxArea = 5000;
//                     iframes.forEach(f => {
//                         const area = f.clientWidth * f.clientHeight;
//                         if (area > maxArea && f.clientWidth >= f.clientHeight) { maxArea = area; best = f; }
//                     });
//                     if (best) {
//                         iframes.forEach(f => { if (f !== best) f.style.setProperty('display', 'none', 'important'); });
//                         best.style.cssText = 'position:fixed !important;top:0 !important;left:0 !important;width:100vw !important;height:100vh !important;z-index:2147483645 !important;border:none !important;background:#000 !important;display:block !important;visibility:visible !important;';
//                     }
//                 }, 1000);
//             }, ENABLE_STREAM_AUDIO).catch(() => {});
//         }
//     } catch (e) {}
// }

// // =========================================================================================
// // 🖼️ VISUAL FRAME HASH FREEZE & LOOP DETECTION
// // =========================================================================================
// async function checkVisualFreshness(p) {
//     const now = Date.now();
//     if (now - visualStats.lastCheckTime < 6000) {
//         return { visualStatus: 'OK' };
//     }
//     visualStats.lastCheckTime = now;

//     if (!p || p.isClosed()) return { visualStatus: 'OK' };

//     try {
//         const buf = await p.screenshot({
//             type: 'jpeg',
//             quality: 25,
//             clip: {
//                 x: Math.floor(RES_W * 0.15),
//                 y: Math.floor(RES_H * 0.15),
//                 width: Math.floor(RES_W * 0.7),
//                 height: Math.floor(RES_H * 0.7)
//             }
//         });

//         const frameHash = crypto.createHash('md5').update(buf).digest('hex').slice(0, 12);

//         if (visualStats.lastHash === frameHash) {
//             const frozenMs = now - visualStats.sameHashSince;
//             if (frozenMs > 20000) { // Increased slightly to 20s to tolerate brief loading spinners
//                 return { visualStatus: 'VISUAL_FROZEN', frozenSec: Math.round(frozenMs / 1000), hash: frameHash };
//             }
//         } else {
//             visualStats.lastHash = frameHash;
//             visualStats.sameHashSince = now;

//             visualStats.recentHashes.push(frameHash);
//             if (visualStats.recentHashes.length > 18) visualStats.recentHashes.shift();

//             const occurrences = visualStats.recentHashes.filter(h => h === frameHash).length;
//             if (occurrences >= 6) {
//                 return { visualStatus: 'CONTENT_LOOP', hash: frameHash };
//             }
//         }

//         return { visualStatus: 'OK', hash: frameHash };
//     } catch (e) {
//         return { visualStatus: 'OK' };
//     }
// }

// // =========================================================================================
// // 💓 PLAYBACK HEALTH & COMBINED WATCHDOG
// // =========================================================================================
// async function checkStreamHealth(p) {
//     if (!p || p.isClosed()) return { status: 'DEAD' };
//     try {
//         const checks = p.frames().map(async (frame) => {
//             if (frame.isDetached()) return null;
//             try {
//                 return await Promise.race([
//                     frame.evaluate(() => {
//                         const v = document.querySelector('video');
//                         if (!v) return null;

//                         const frames = v.getVideoPlaybackQuality
//                             ? v.getVideoPlaybackQuality().totalVideoFrames
//                             : (v.webkitDecodedFrameCount || 0);

//                         if (v.paused) {
//                             v.play().catch(() => {});
//                             const btns = document.querySelectorAll('.jw-icon-display, .jw-icon-live, .vjs-play-control, .vjs-live-control, button[data-plyr="play"]');
//                             btns.forEach(b => { try { b.click(); } catch(e){} });
//                             return {
//                                 status: 'PAUSED_RESUMING',
//                                 paused: true,
//                                 readyState: v.readyState,
//                                 currentTime: v.currentTime,
//                                 frames
//                             };
//                         }

//                         if (v.readyState >= 2 || frames > 0) {
//                             return {
//                                 status: 'HEALTHY',
//                                 paused: false,
//                                 readyState: v.readyState,
//                                 currentTime: v.currentTime,
//                                 frames
//                             };
//                         }
//                         return null;
//                     }),
//                     new Promise(r => setTimeout(() => r(null), 1500))
//                 ]);
//             } catch (e) { return null; }
//         });

//         const results = await Promise.all(checks);
//         const healthy = results.find(r => r && r.status === 'HEALTHY');
//         if (healthy) return healthy;

//         const pausedStream = results.find(r => r && r.status === 'PAUSED_RESUMING');
//         if (pausedStream) return pausedStream;

//         return { status: 'LOADING_OR_DEAD' };
//     } catch (e) {
//         return { status: 'DEAD' };
//     }
// }

// async function loadCurrentUrl(reason) {
//     const targetUrl = urlList[currentUrlIndex];
//     console.log(`\n[🔄] ${reason} -> Loading URL [${currentUrlIndex + 1}/${urlList.length}]: ${targetUrl}`);
//     resetMonitorStats();

//     try { await obs.call('SetCurrentProgramScene', { sceneName: 'WaitingScene' }); } catch (e) {}
//     try {
//         if (!page || page.isClosed()) {
//             page = (await browser.pages())[0] || await browser.newPage();
//             await setupPageProtections(page);
//         }
//         await page.goto('about:blank');
//         await page.bringToFront();
//         keepChromeOnTopAndHideOBS();
//         await showLoadingOverlay(page, "CONNECTING STREAM", `Server ${currentUrlIndex + 1} of ${urlList.length}`);
//         await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
//         await showLoadingOverlay(page, "OPTIMIZING PLAYER", "Locking fullscreen video...");
//         await lockAndPlayVideo(page);
//         await hideLoadingOverlay(page);
//         keepChromeOnTopAndHideOBS();
//     } catch (e) {
//         console.log(`[⚠️] Page navigation warning: ${e.message}`);
//     }
//     try { await obs.call('SetCurrentProgramScene', { sceneName: 'MainScene' }); } catch (e) {}
// }

// async function startWatchdog() {
//     let lastTime = -1, lastFrames = -1, lastWallClock = Date.now();
//     let freezeStart = Date.now(), urlStart = Date.now();
//     let deadStrikes = 0, ticks = 0;

//     // Give player 10 seconds to initialize after boot before counting strikes
//     await new Promise(r => setTimeout(r, 10000));

//     while (!isCleaningUp) {
//         if (!browser || !browser.isConnected()) throw new Error('Browser disconnected');

//         keepChromeOnTopAndHideOBS();
//         const currentUrl = urlList[currentUrlIndex];
//         const health = await checkStreamHealth(page);

//         let networkState = 'OK';
//         if (netStats.segmentErrorCount >= 6) {
//             networkState = `NET_ERROR_${netStats.lastHttpStatus}`;
//         } else if (netStats.seenManifest && (Date.now() - netStats.lastSeqAdvanceTime > 25000)) {
//             networkState = 'STALE_MANIFEST';
//         }

//         if (health.status === 'HEALTHY' || health.status === 'PAUSED_RESUMING') {
//             deadStrikes = 0;

//             if (health.status === 'PAUSED_RESUMING') {
//                 console.log(`[⏯️] Live Video was PAUSED -> Sent Auto-Play & Live-Edge click!`);
//                 await lockAndPlayVideo(page);
//             }

//             const now = Date.now();
//             const wallElapsed = (now - lastWallClock) / 1000;
//             const timeDelta = lastTime !== -1 ? Math.abs(health.currentTime - lastTime) : wallElapsed;
//             const speedRatio = wallElapsed > 0 ? (timeDelta / wallElapsed).toFixed(2) : '1.00';
//             lastWallClock = now;

//             const framesMoved = (lastFrames === -1) || (health.frames !== lastFrames);
//             const timeMoved = (lastTime === -1) || (health.currentTime !== lastTime);
//             const isMoving = framesMoved || timeMoved;

//             const visualCheck = await checkVisualFreshness(page);

//             if (!isMoving) {
//                 if (Date.now() - freezeStart > 18000) {
//                     currentUrlIndex = (currentUrlIndex + 1) % urlList.length;
//                     await loadCurrentUrl('PLAYBACK FROZEN (No Frame/Time Movement for 18s)');
//                     freezeStart = Date.now(); urlStart = Date.now(); lastTime = -1; lastFrames = -1;
//                     continue;
//                 }
//             } else if (visualCheck.visualStatus === 'VISUAL_FROZEN') {
//                 currentUrlIndex = (currentUrlIndex + 1) % urlList.length;
//                 await loadCurrentUrl(`VISUAL SCREEN FROZEN (${visualCheck.frozenSec}s Static Frame)`);
//                 freezeStart = Date.now(); urlStart = Date.now(); lastTime = -1; lastFrames = -1;
//                 continue;
//             } else if (visualCheck.visualStatus === 'CONTENT_LOOP') {
//                 currentUrlIndex = (currentUrlIndex + 1) % urlList.length;
//                 await loadCurrentUrl('FRESHNESS FAIL (Repeating Visual Loop Detected)');
//                 freezeStart = Date.now(); urlStart = Date.now(); lastTime = -1; lastFrames = -1;
//                 continue;
//             } else if (networkState === 'STALE_MANIFEST' || networkState.startsWith('NET_ERROR')) {
//                 currentUrlIndex = (currentUrlIndex + 1) % urlList.length;
//                 await loadCurrentUrl(`NETWORK/MANIFEST FAIL (${networkState})`);
//                 freezeStart = Date.now(); urlStart = Date.now(); lastTime = -1; lastFrames = -1;
//                 continue;
//             } else {
//                 lastTime = health.currentTime;
//                 lastFrames = health.frames;
//                 freezeStart = Date.now();
//                 await hideLoadingOverlay(page);
//             }

//             const isExempt = NO_REFRESH_DOMAINS.some(d => currentUrl.includes(d));
//             if (!isExempt && (Date.now() - urlStart > FORCE_REFRESH_MS)) {
//                 await loadCurrentUrl('SCHEDULED REFRESH');
//                 freezeStart = Date.now(); urlStart = Date.now(); lastTime = -1; lastFrames = -1;
//             }

//             ticks++;
//             if (ticks === 1 || ticks % 10 === 0) {
//                 console.log(
//                     `[💓] REPORT | Net: ${networkState} (HTTP:${netStats.lastHttpStatus}, Seq:${netStats.lastMediaSeq ?? 'N/A'}) | ` +
//                     `Playback: ${health.status} (Speed:${speedRatio}x, Time:${health.currentTime !== undefined ? health.currentTime.toFixed(1) + 's' : 'N/A'}, Frames:${health.frames ?? 'N/A'}) | ` +
//                     `Freshness: ${visualCheck.visualStatus} | URL [${currentUrlIndex + 1}/${urlList.length}]`
//                 );
//             }
//         } else {
//             deadStrikes++;
//             console.log(`[⚠️] Stream Unhealthy (${health.status} | Net: ${networkState}) - Strike ${deadStrikes}/6`);
//             if (deadStrikes >= 6) {
//                 deadStrikes = 0;
//                 currentUrlIndex = (currentUrlIndex + 1) % urlList.length;
//                 await loadCurrentUrl('6 STRIKES -> FAILOVER NEXT URL');
//                 freezeStart = Date.now(); urlStart = Date.now(); lastTime = -1; lastFrames = -1;
//             }
//         }

//         await new Promise(r => setTimeout(r, 2000));
//     }
// }

// // =========================================================================================
// // 🚀 ENGINE STARTUP & AUTO-RESTART
// // =========================================================================================
// async function startEngine() {
//     isCleaningUp = false;
//     console.log('[*] Configuring & Starting OBS Studio...');
//     setupOBSConfig();

//     obsProcess = spawn('obs', ['--startstreaming', '--minimize-to-tray', '--disable-updater'], {
//         env: { ...process.env, DISPLAY: process.env.DISPLAY || ':99' }
//     });

//     obsProcess.stdout.on('data', (data) => {
//         const line = data.toString().trim();
//         if (line.includes('rtmp') || line.includes('stream') || line.includes('Websocket') || line.includes('output')) {
//             console.log(`[OBS]: ${line}`);
//         }
//     });
//     obsProcess.stderr.on('data', (data) => {
//         const msg = data.toString().trim();
//         if (msg.toLowerCase().includes('error') || msg.toLowerCase().includes('fail')) {
//             console.log(`[OBS Error]: ${msg}`);
//         }
//     });

//     await new Promise(r => setTimeout(r, 6000));

//     let obsConnected = false;
//     for (let i = 0; i < 15; i++) {
//         try {
//             await obs.connect('ws://127.0.0.1:4455', 'secret');
//             obsConnected = true;
//             console.log('[+] OBS WebSocket Connected!');
//             break;
//         } catch (e) {
//             await new Promise(r => setTimeout(r, 2000));
//         }
//     }

//     if (obsConnected) {
//         try { 
//             const status = await obs.call('GetStreamStatus');
//             if (!status.outputActive) {
//                 await obs.call('StartStream'); 
//             }
//         } catch (e) {}
//     } else {
//         console.log('[⚠️] Could not connect to OBS WebSocket, but OBS --startstreaming flag may still be active.');
//     }

//     const args = [
//         '--no-sandbox', '--disable-setuid-sandbox', `--window-size=${RES_W},${RES_H}`,
//         '--window-position=0,0', '--kiosk', '--start-fullscreen',
//         '--autoplay-policy=no-user-gesture-required', '--disable-dev-shm-usage',
//         '--disable-blink-features=AutomationControlled', '--use-gl=egl'
//     ];

//     if (PROXY_ENGINE.includes('Cloudflare')) args.push('--proxy-server=socks5://127.0.0.1:40000');

//     const ublockPath = path.join(process.cwd(), 'ublock-lite');
//     if (fs.existsSync(path.join(ublockPath, 'manifest.json'))) {
//         args.push(`--disable-extensions-except=${ublockPath}`);
//         args.push(`--load-extension=${ublockPath}`);
//         console.log('[🛡️] uBlock Origin Lite MV3 Extension Loaded!');
//     }

//     browser = await puppeteer.launch({
//         headless: false,
//         defaultViewport: { width: RES_W, height: RES_H },
//         ignoreDefaultArgs: ['--enable-automation'],
//         args
//     });

//     page = (await browser.pages())[0];

//     browser.on('targetcreated', async (target) => {
//         if (target.type() === 'page') {
//             const newPage = await target.page().catch(() => null);
//             if (newPage && newPage !== page) {
//                 setTimeout(() => newPage.close().catch(() => {}), 300);
//             }
//         }
//     });

//     keepChromeOnTopAndHideOBS();
//     await setupPageProtections(page);
//     await loadCurrentUrl('INITIAL BOOT');
//     await startWatchdog();
// }

// async function cleanup() {
//     isCleaningUp = true;
//     try { await obs.disconnect(); } catch (e) {}
//     if (browser) { try { await browser.close(); } catch (e) {} browser = null; }
//     if (obsProcess) { try { obsProcess.kill('SIGKILL'); } catch (e) {} obsProcess = null; }
//     try { execSync('pkill -9 obs chrome ffplay || true', { stdio: 'ignore' }); } catch (e) {}
// }

// // =========================================================================================
// // ⏱️ DURATION PARSER & WORKFLOW RELAY ENGINE
// // =========================================================================================
// const RAW_DURATION = (process.env.CUSTOM_DURATION || '24/7').trim();
// const MAX_SINGLE_RUN_MS = 21000000; // 5h 50m (350 mins)

// function parseFlexibleDuration(input) {
//     if (!input) return null;
//     const str = input.toLowerCase().trim();
//     if (str === '24/7' || str === 'infinite' || str === 'forever' || str === '0') return null;

//     let totalMs = 0;
//     let matched = false;
//     const regex = /(\d+(?:\.\d+)?)\s*(hours?|hrs?|h|minutes?|mins?|m|seconds?|secs?|s)/g;
//     let match;
//     while ((match = regex.exec(str)) !== null) {
//         matched = true;
//         const val = parseFloat(match[1]);
//         const unit = match[2];
//         if (unit.startsWith('h')) totalMs += val * 3600 * 1000;
//         else if (unit.startsWith('m')) totalMs += val * 60 * 1000;
//         else if (unit.startsWith('s')) totalMs += val * 1000;
//     }

//     if (!matched && /^\d+(\.\d+)?$/.test(str)) {
//         totalMs = parseFloat(str) * 60 * 1000;
//         matched = true;
//     }

//     return (matched && totalMs > 0) ? Math.round(totalMs) : null;
// }

// function formatMsToDurationString(ms) {
//     const totalSeconds = Math.max(1, Math.round(ms / 1000));
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     const parts = [];
//     if (hours > 0) parts.push(`${hours}h`);
//     if (minutes > 0) parts.push(`${minutes}m`);
//     if (hours === 0 && minutes === 0 && seconds > 0) parts.push(`${seconds}s`);
//     return parts.join(' ') || '1m';
// }

// function triggerNextWorkflow(nextDurationValue) {
//     try {
//         console.log(`\n[🔄] Handover Initiated -> Launching Next Action with custom_duration="${nextDurationValue}"...`);
//         const args = [
//             'workflow', 'run', 'main.yml',
//             '-f', `target_urls=${process.env.TARGET_URLS || ''}`,
//             '-f', `okru_stream_channel=${SELECTED_CHANNEL}`,
//             '-f', `server_selection=${SERVER_SELECTION}`,
//             '-f', `stream_quality=${selectedQuality}`,
//             '-f', `proxy_engine=${PROXY_ENGINE}`,
//             '-f', `enable_stream_audio=${process.env.ENABLE_STREAM_AUDIO || 'ON'}`,
//             '-f', `custom_duration=${nextDurationValue}`
//         ];
//         const res = spawn('gh', args, { stdio: 'inherit' });
//         res.on('close', (code) => {
//             console.log(`[+] Next workflow triggered (Exit Code: ${code}). Keeping current stream alive for 60s overlap...`);
//             setTimeout(async () => {
//                 try { await obs.call('StopStream'); } catch (e) {}
//                 await cleanup();
//                 process.exit(0);
//             }, 60000);
//         });
//         res.on('error', (err) => {
//             console.error('[⚠️] gh CLI spawn error:', err.message);
//         });
//     } catch (e) {
//         console.error('[⚠️] Failed to trigger next workflow:', e.message);
//     }
// }

// const totalRequestedMs = parseFlexibleDuration(RAW_DURATION);

// if (totalRequestedMs === null) {
//     console.log(`[♾️] Duration Mode: 24/7 Infinite | Current Runner will hand over after 5h 50m.`);
//     setTimeout(() => { triggerNextWorkflow('24/7'); }, MAX_SINGLE_RUN_MS);
// } else if (totalRequestedMs <= MAX_SINGLE_RUN_MS) {
//     console.log(`[⏱️] Duration Mode: Fixed (${RAW_DURATION} -> ${formatMsToDurationString(totalRequestedMs)}) | Stream will STOP completely when timer ends.`);
//     setTimeout(async () => {
//         console.log(`\n[🛑] Target Duration (${RAW_DURATION}) Reached! Stopping OBS & Ending Action...`);
//         try { await obs.call('StopStream'); } catch (e) {}
//         await cleanup();
//         process.exit(0);
//     }, totalRequestedMs);
// } else {
//     const remainingMs = totalRequestedMs - MAX_SINGLE_RUN_MS;
//     const nextDurationStr = formatMsToDurationString(remainingMs);
//     console.log(`[⏱️] Duration Mode: Long Relay (${RAW_DURATION} total) | Running 5h 50m now, then passing "${nextDurationStr}" to Next Action!`);
//     setTimeout(() => { triggerNextWorkflow(nextDurationStr); }, MAX_SINGLE_RUN_MS);
// }

// // Main Execution Loop
// (async () => {
//     while (true) {
//         try { 
//             await startEngine(); 
//         } catch (err) {
//             console.error('[🚨] Engine Error, restarting in 5s:', err.message);
//             await cleanup();
//             await new Promise(r => setTimeout(r, 5000));
//         }
//     }
// })();
