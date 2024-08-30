import{w as Z,a3 as G,d as P,r as i,C as Q,a4 as W,a5 as X,f as Y,a as g,c as _,e as s,a0 as d,p as k,Z as M,F as V,b as T,a6 as j,u as ee,a7 as ae,$ as le,R as b,a8 as oe,g as se,a1 as te,a2 as ne,_ as ue}from"./index-DMHdJRV5.js";import{k as ce}from"./knapsackItem-BPS502C3.js";import{s as ve,a as $}from"./function-call-CEtVxpZb.js";import{O as de}from"./mount-component-BzZheQFa.js";Z(ve);const re=G({id:"message",state:()=>({messages:[]}),actions:{addMessage(r){this.messages.push(r)},clearMessages(){this.messages=[]}},getters:{singleMessages:r=>r.messages.map(N=>N)}}),h=r=>(te("data-v-cde1f957"),r=r(),ne(),r),me={class:"main-wrap"},pe=h(()=>s("span",null,"怪物名称：",-1)),ie={class:"enemy-name"},fe=h(()=>s("span",null,"怪物血量：",-1)),ge=h(()=>s("span",null,"人物：",-1)),he={class:"personnel-name"},_e={class:"flex-box"},ke=h(()=>s("span",null,"技能：",-1)),Me=h(()=>s("label",null,"战斗日志",-1)),Ie={class:"personnel-wrap"},be=h(()=>s("span",null,"人物：",-1)),Ne={class:"personnel-name"},xe=P({__name:"battlefield",setup(r){const N=ae(),D=le(),A=[{type:"consumables",name:"消耗品"}],C=i([]),e=i({}),x=i(0),B=i(0),a=i({}),v=i(Array()),E=i(0),y=i(!1),m=re(),q=Q(()=>m.messages);W(()=>{const l=JSON.parse(localStorage.getItem("game_personnelInfo"));C.value=l==null?void 0:l.skill,e.value=l,x.value=e.value.maxBlood,a.value=JSON.parse(N.query.enemy),B.value=a.value.blood,v.value=JSON.parse(localStorage.getItem("game_knapsackInfo")),console.log(a.value,"enemy.valueenemy.value")}),X(()=>{m.clearMessages()});const O=(l,t)=>{const u=e.value.levle*2/(e.value.levle+a.value.levle)*(e.value.attack/2)/(e.value.attack/2+a.value.agile),c=a.value.levle*2/(a.value.levle+e.value.levle)*(a.value.attack/2)/(a.value.attack/2+e.value.agile),f=1-c/(c+Math.pow(e.value.agile/4,.8)),J=1-u/(u+Math.pow(a.value.agile/4,.8));if(u>J){if(t==="skill"){const n=Math.round(Math.pow(l.attack,2)/(a.value.agile+a.value.defense));a.value.blood-=n,l.cd=0-l.maxCd,console.log(`你使用了${l.name}攻击了${a.value.name}，造成了${n}点伤害`),m.addMessage(`你使用了${l.name}攻击了${a.value.name}，造成了${n}点伤害`)}else{const n=Math.round(Math.pow(e.value.attack,2)/(a.value.agile+a.value.defense));a.value.blood-=n,console.log(`你攻击了${a.value.name}，造成了${n}点伤害`),m.addMessage(`你攻击了${a.value.name}，造成了${n}点伤害`)}e.value.skill.forEach(n=>{n.cd<0&&n.itemNo!==(l==null?void 0:l.itemNo)&&n.cd++})}else m.addMessage(`你攻击了${a.value.name}，但被闪避了`);if(c>f)if(Math.floor(Math.random()*11)<4){const o=a.value.skills;H(o);const S=Math.round(Math.pow(o[0].attack,2)/(e.value.agile+e.value.defense));e.value.blood-=S,m.addMessage(`${a.value.name}使用${o[0].name}攻击了你，造成了${S}点伤害`)}else{const o=Math.round(Math.pow(a.value.attack,2)/(e.value.agile+e.value.defense));e.value.blood-=o,m.addMessage(`${a.value.name}攻击了你，造成了${o}点伤害`)}else m.addMessage(`${a.value.name}攻击了你，但被闪避了`);a.value.blood<1&&($("击杀成功"),z(a.value.dropItem).forEach(o=>{if(v.value.some(p=>o.itemNo===p.itemNo)?v.value.forEach(p=>{o.itemNo===p.itemNo&&(o.itemNo==="0010000"&&(p.price+=o.hasNum),p.hasNum+=o.hasNum)}):v.value.push(o),o.itemNo==="0000000"){let p=0;e.value.maxExp.some(K=>{if(p+=K.value,p>o.hasNum){const R=e.value.maxExp[e.value.levle-1].value;if(e.value.exp+=o.hasNum,e.value.exp>R&&e.value.levle<100){e.value.exp=e.value.exp-R,e.value.levle++;const I=Math.round(e.value.levle*Math.pow(1+.05,10));e.value.blood+=I,e.value.maxBlood+=I,e.value.attack+=I,e.value.defense+=I}return!0}return!1})}}),e.value.skill.forEach(o=>o.cd=o.maxCd),localStorage.setItem("game_knapsackInfo",JSON.stringify(v.value)),localStorage.setItem("game_personnelInfo",JSON.stringify(e.value)),w()),e.value.blood<1&&($("菜就多练"),e.value.blood=1,e.value.skill.forEach(n=>n.cd=n.maxCd),localStorage.setItem("game_personnelInfo",JSON.stringify(e.value)),w())},w=()=>{D.replace({path:"/gameworld/mainworld",query:{scrollTo:"dungeon"}})},F=()=>{E.value=new Date().getTime(),console.log(v.value,"knapsackItem.valueknapsackItem.value"),setTimeout(()=>{y.value=!0},100)},H=l=>{for(let t=l.length-1;t>0;t--){const u=Math.floor(Math.random()*(t+1));[l[t],l[u]]=[l[u],l[t]]}return l},L=l=>{l.effect==="blood"&&e.value.maxBlood>=e.value.blood&&(e.value.blood+=l.value,e.value.blood=e.value.blood<=e.value.maxBlood?e.value.blood:e.value.maxBlood),v.value.forEach(t=>{t.itemNo===l.itemNo&&t.hasNum--}),v.value=v.value.filter(t=>t.hasNum>0),console.log(e.value,"personnelInfopersonnelInfo",v.value),$("使用成功")},U=()=>{e.value.skill.forEach(l=>l.cd=l.maxCd),localStorage.setItem("game_personnelInfo",JSON.stringify(e.value)),w()},z=l=>{const t=JSON.parse(JSON.stringify(l)),u=[];return t.forEach(c=>{Math.random()<=c.dropRate&&(delete c.dropRate,u.push(c))}),u};return(l,t)=>{const u=Y("van-button");return g(),_("div",me,[s("div",null,[pe,s("span",ie,d(a.value.name)+"；",1),fe,s("span",null,d(a.value.blood)+"/"+d(B.value),1)]),s("div",null,[s("div",null,[ge,s("span",he,d(e.value.name),1),s("span",null,d(e.value.blood)+"/"+d(x.value),1)]),s("div",_e,[k(u,{type:"primary",onClick:O},{default:M(()=>[b("攻击")]),_:1}),k(u,{type:"success",onClick:F},{default:M(()=>[b("药水")]),_:1}),k(u,{type:"danger",onClick:U},{default:M(()=>[b("逃跑")]),_:1})]),s("div",null,[ke,(g(!0),_(V,null,T(C.value,(c,f)=>(g(),_("div",{key:f},[k(u,{type:"default",disabled:c.cd<0,onClick:J=>O(c,"skill")},{default:M(()=>[b(d(c.name),1)]),_:2},1032,["disabled","onClick"])]))),128))]),Me,(g(!0),_(V,null,T(q.value,(c,f)=>(g(),_("div",{key:f},[s("p",{class:oe(f%2===0?"personnel-name":"enemy-name")},d(c),3)]))),128))]),k(ee(de),{show:y.value,onClick:t[0]||(t[0]=j(c=>y.value=!1,["self"]))},{default:M(()=>[s("div",Ie,[be,s("span",Ne,d(e.value.name),1),s("span",null,d(e.value.blood)+"/"+d(x.value),1)]),(g(),se(ce,{knapsack:v.value,typeList:A,defaultItemType:"consumables",key:E.value,onUseItem:L},null,8,["knapsack"]))]),_:1},8,["show"])])}}}),Ce=ue(xe,[["__scopeId","data-v-cde1f957"]]);export{Ce as default};
