const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./tuning-panel-oN6XJEPM.js","./preload-helper-CRzLMJPS.js","./heatmap-DsKp3dVB.js","./recorder-DHKu8ROz.js","./version-DTKOM47w.js","./level-DcVR-XU-.js"])))=>i.map(i=>d[i]);
import{t as e}from"./params-CasFOAKM.js";import{t}from"./recorder-DHKu8ROz.js";import{t as n}from"./preload-helper-CRzLMJPS.js";var r=`
.pg-dev-btn{padding:7px 11px;border-radius:10px;border:0;cursor:pointer;background:rgba(10,10,12,.78);color:#fafafa;font:500 12px 'Inter',system-ui,sans-serif;box-shadow:inset 0 0 0 1px rgba(255,255,255,.16)}
.pg-dev-btn:hover{box-shadow:inset 0 0 0 1px #ffd23f}
.pg-tune{position:absolute;z-index:6;top:16px;right:16px;display:flex;flex-direction:column;align-items:flex-end;gap:8px;max-height:calc(100% - 90px)}
.pg-tune-panel,.pg-heat-panel{width:min(340px,calc(100vw - 32px));overflow:auto;padding:12px 14px;border-radius:14px;background:rgba(8,8,10,.92);color:#fafafa;
  font:12.5px/1.45 'Inter',system-ui,sans-serif;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1),0 12px 40px rgba(0,0,0,.5)}
.pg-tune-panel[hidden],.pg-heat-panel[hidden]{display:none}
.pg-tune-head{display:flex;justify-content:space-between;gap:10px;margin-bottom:8px}
.pg-tune-head b{font:600 11px 'JetBrains Mono',ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase}
.pg-tune .mute,.pg-heat .mute{color:#9a9a9a}
.pg-tune-note{margin:0 0 8px;padding:6px 8px;border-radius:8px;background:#2a2410;color:#ffe9a8}
.pg-tune details{margin:2px 0}.pg-tune summary{cursor:pointer;padding:3px 0;color:#d6d6d6;font-weight:500}
.pg-tune-tree{padding-left:10px;border-left:1px solid rgba(255,255,255,.08)}
.pg-tune-doc{margin:2px 0 6px;color:#8a8a8a;font-size:11px}
.pg-tune-row{display:grid;grid-template-columns:minmax(80px,1fr) 1.1fr 64px;align-items:center;gap:6px;padding:2px 0}
.pg-tune-row span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11.5px}
.pg-tune-row.changed span::before{content:'● ';color:#ffd23f}
.pg-tune-row input[type=number],.pg-tune-row input[type=text]{width:100%;padding:3px 5px;border-radius:6px;border:0;background:#151517;color:#fff;font:11.5px 'JetBrains Mono',monospace;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
.pg-tune-row input[type=text]{grid-column:span 2}
.pg-tune-row input[type=checkbox]{justify-self:start}
.pg-tune-row input[type=range]{width:100%;accent-color:#ffd23f}
.pg-tune-btns,.pg-heat-modes{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.pg-tune-btns button,.pg-heat-modes button{padding:6px 9px;border-radius:8px;border:0;cursor:pointer;background:#161618;color:#fafafa;font:500 11.5px 'Inter',sans-serif;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
.pg-heat-modes button[aria-pressed="true"]{background:#2a2410;box-shadow:inset 0 0 0 1px #ffd23f}
.pg-tune-out{margin:8px 0 0;min-height:16px}
.pg-heat{position:absolute;z-index:6;left:16px;bottom:40px;display:flex;flex-direction:column-reverse;align-items:flex-start;gap:8px}
.pg-heat canvas{display:block;width:100%;max-width:280px;border-radius:10px;image-rendering:pixelated}
.pg-heat-info{margin:8px 0 0}
`;function i({host:i,session:a,game:o}){let s=t({session:a,game:o}),c=[],l=!1;if(e.dev&&typeof document<`u`){if(!document.getElementById(`pg-dev-tools-css`)){let e=document.createElement(`style`);e.id=`pg-dev-tools-css`,e.textContent=r,document.head.appendChild(e)}n(()=>import(`./tuning-panel-oN6XJEPM.js`).then(e=>e.mountTuningPanel({container:i,game:o,session:a})),__vite__mapDeps([0,1]),import.meta.url).then(e=>{l?e.dispose():c.push(e)}).catch(e=>console.error(`[ajustes] o painel não abriu:`,e)),n(()=>import(`./heatmap-DsKp3dVB.js`).then(e=>{let t=e.mountHeatmap({container:i,game:o,session:a});l?t.dispose():c.push(t)}),__vite__mapDeps([2,3,4,5]),import.meta.url).catch(e=>console.error(`[calor] o mapa não abriu:`,e))}let u=a.on(`ended`,()=>d());function d(){if(!l){l=!0,u?.();for(let e of c.splice(0))e.dispose()}}return{dispose:d,telemetry:s}}export{i as attachGameTools};