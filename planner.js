const diagnosisStyles = document.createElement('link');
diagnosisStyles.rel = 'stylesheet';
diagnosisStyles.href = 'diagnosis-polish.css';
document.head.appendChild(diagnosisStyles);
document.querySelector('.diagnosis b').textContent = 'WHY THIS FITS';

const AFFILIATE_TAG = 'carkitcost-20';
const icon = paths => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;
const icons = {
  camping: icon('<path d="M3 19L12 5l9 14M7 19l5-8 5 8M12 11v8"/>'),
  beach: icon('<circle cx="12" cy="7" r="3"/><path d="M12 1v2M5 7H3M21 7h-2M6.5 1.5L8 3M17.5 1.5L16 3M3 20c3-4 6-4 9 0 3-4 6-4 9 0"/>'),
  cross: icon('<path d="M5 19c5-1 3-7 8-8h6M15 7l4 4-4 4"/>'),
  weekend: icon('<path d="M5 8h14v11H5zM9 8V5h6v3M5 12h14M10 12v2h4v-2"/>'),
  custom: icon('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>'),
  Storage: icon('<path d="M4 8h16v11H4zM8 8V5h8v3M9 12h6"/>'),
  Power: icon('<path d="M13 2L6 13h6l-1 9 7-12h-6z"/>'),
  Safety: icon('<path d="M12 3l8 4v5c0 5-3.4 8-8 9-4.6-1-8-4-8-9V7zM9 12l2 2 4-5"/>'),
  Comfort: icon('<path d="M6 13V8a3 3 0 016 0v5M12 13V9a3 3 0 016 0v4M4 13h16v6H4z"/>'),
  Food: icon('<path d="M7 3v7M4 3v4a3 3 0 006 0V3M7 10v11M16 3v18M16 3c4 2 4 7 0 9"/>'),
  Climate: icon('<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>'),
  Kids: icon('<circle cx="12" cy="8" r="3"/><path d="M6 21v-3a6 6 0 0112 0v3M4 12l3 2M20 12l-3 2"/>'),
  Pets: icon('<circle cx="12" cy="15" r="4"/><circle cx="6" cy="9" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="9" r="2"/>'),
  Overnight: icon('<path d="M20 15a8 8 0 01-11-11 8 8 0 1011 11z"/>'),
  Cleanup: icon('<path d="M8 3h8l1 5-5 13-5-2 4-11zM9 14l6 2"/>')
};
const catIcon = {Storage:icons.Storage,Power:icons.Power,Safety:icons.Safety,Comfort:icons.Comfort,'Food & drink':icons.Food,Climate:icons.Climate,Kids:icons.Kids,Pets:icons.Pets,Overnight:icons.Overnight,Cleanup:icons.Cleanup,Visibility:icons.Safety};

const trips = {
  camping:{label:'Camping',icon:icons.camping,desc:'Camp-ready gear',focuses:{established:'Established campground',remote:'Remote / off-grid',vehicle:'Sleep in vehicle'}},
  beach:{label:'Beach',icon:icons.beach,desc:'Sand & water',focuses:{day:'Day at the beach',family:'Family beach trip',watersports:'Water-sports gear'}},
  cross:{label:'Cross-country',icon:icons.cross,desc:'Long-haul comfort',focuses:{balanced:'Balanced route',fast:'Covering miles quickly',family:'Family road trip'}},
  weekend:{label:'Weekend',icon:icons.weekend,desc:'Pack light',focuses:{city:'City break',outdoors:'Outdoor weekend',relaxed:'Relaxed getaway'}},
  custom:{label:'Custom trip',icon:icons.custom,desc:'Choose a goal',focuses:{organization:'Better organization',safety:'Emergency readiness',comfort:'Passenger comfort',foodpower:'Food & device power',weather:'Weather protection'}}
};

const item = (cat,name,q,p,why,price) => [cat,name,q,p,why,price];
const groups = {
  core:[
    item('Storage','Collapsible trunk organizer','collapsible car trunk organizer','essential','Keeps frequently used gear assigned to one reachable zone.',['$20–30','$30–50','$55+']),
    item('Power','Dual USB-C fast charger','dual usb c car charger fast','essential','Keeps navigation and passenger devices powered without cable swapping.',['$13–18','$19–30','$32+']),
    item('Comfort','Leakproof travel trash can','car trash can leakproof','upgrade','Contains wrappers and spills between planned stops.',['$8–13','$14–22','$25+'])
  ],
  medium:[item('Safety','12V tire inflator','portable tire inflator 12v','essential','Corrects pressure changes before they become a roadside delay.',['$25–40','$45–70','$85+'])],
  long:[
    item('Safety','Portable jump starter','portable car jump starter','essential','Restarts the vehicle independently on longer routes.',['$40–60','$65–90','$100+']),
    item('Safety','Compact first-aid kit','compact car first aid kit travel','essential','Handles minor injuries when the next stop is still far away.',['$15–22','$25–40','$45+'])
  ],
  camping:[
    item('Food & drink','Hard-sided cooler','hard cooler camping car','essential','Protects camp food and stays stable in the cargo area.',['$35–55','$60–100','$120+']),
    item('Comfort','Rechargeable area lantern','rechargeable camping lantern','essential','Lights the site without draining the vehicle battery.',['$17–24','$26–36','$42+']),
    item('Food & drink','Portable water container','camping water container spigot','upgrade','Keeps drinking and cleanup water available at camp.',['$16–25','$28–42','$50+'])
  ],
  campingRemote:[
    item('Power','Portable power station','portable power station camping','essential','Provides off-grid power when the vehicle should remain off.',['$120–180','$220–350','$450+']),
    item('Safety','Recovery traction boards','compact traction boards off road','essential','Adds self-recovery capability on loose or muddy access roads.',['$45–70','$80–130','$160+']),
    item('Storage','Weatherproof gear tote','weatherproof camping storage tote','upgrade','Keeps critical camp gear dry and grouped outdoors.',['$20–35','$40–65','$80+'])
  ],
  campingVehicle:[
    item('Overnight','Vehicle privacy shade set','car window privacy shades camping','essential','Adds privacy and blocks early light inside the vehicle.',['$22–32','$35–55','$60+']),
    item('Overnight','Compact sleeping pad','car camping sleeping pad compact','essential','Adds insulation and comfort without consuming the cargo area.',['$30–50','$55–85','$95+'])
  ],
  beach:[
    item('Cleanup','Waterproof cargo liner','waterproof car trunk liner','essential','Keeps sand, salt water and wet towels out of the carpet.',['$18–30','$35–55','$60+']),
    item('Cleanup','Dry bag / wet-gear tote','large dry bag beach wet gear','essential','Separates wet gear from the rest of the cabin.',['$15–25','$28–45','$55+']),
    item('Cleanup','Portable rinse kit','portable shower rinse kit beach','upgrade','Removes sand before people and equipment return to the car.',['$30–45','$55–70','$78+'])
  ],
  beachFamily:[item('Climate','Portable beach shade','portable pop up beach shade','essential','Creates reliable shade for longer family beach days.',['$35–55','$65–100','$130+'])],
  beachWater:[item('Storage','Waterproof phone pouch set','waterproof phone pouch beach','upgrade','Protects phones and documents around water.',['$10–16','$18–28','$35+'])],
  cross:[
    item('Comfort','Driver lumbar support','car lumbar support pillow long drive','essential','Reduces fatigue during repeated multi-hour driving blocks.',['$17–26','$28–40','$45+']),
    item('Safety','Reflective roadside kit','car emergency roadside kit reflector','essential','Makes an unplanned stop safer in unfamiliar conditions.',['$18–28','$30–45','$50+']),
    item('Comfort','Dashboard phone mount','car phone mount dashboard navigation','essential','Keeps navigation visible without taking a hand off the wheel.',['$14–22','$25–40','$50+']),
    item('Food & drink','Compact travel cooler','small car cooler road trip','upgrade','Keeps food and water available between planned stops.',['$25–40','$45–70','$90+'])
  ],
  crossFast:[item('Power','High-output multiport charger','high output multi port car charger','essential','Keeps every essential device charged during fewer, shorter stops.',['$20–30','$35–55','$70+'])],
  weekend:[
    item('Storage','Compact seat-gap organizer','car seat gap organizer','upgrade','Keeps small essentials reachable without using trunk space.',['$9–14','$16–24','$28+']),
    item('Comfort','Windshield sunshade','car windshield sun shade','optional','Keeps the cabin comfortable during daytime stops.',['$12–18','$20–30','$40+'])
  ],
  kids:[
    item('Kids','Seat-back activity organizer','car seat back organizer kids road trip','essential','Gives each child a reachable place for snacks, toys and headphones.',['$18–25','$27–38','$42+']),
    item('Kids','Spill-resistant snack tray','kids car travel snack tray','upgrade','Contains food, drawing supplies and small toys around each seat.',['$18–28','$30–45','$55+'])
  ],
  pets:[
    item('Pets','Hammock seat protector','dog car seat cover hammock waterproof','essential','Protects upholstery and creates a contained pet zone.',['$22–32','$35–50','$55+']),
    item('Pets','Travel water bowl','dog travel water bowl car','essential','Makes hydration easier without leaving an open bowl in the cabin.',['$8–14','$16–24','$30+']),
    item('Pets','Vehicle restraint harness','dog car safety restraint harness','upgrade','Limits unsafe movement during braking and stops.',['$15–24','$28–45','$55+'])
  ],
  warm:[
    item('Climate','Rear-window sun shades','car window sun shade kids','essential','Cuts direct sun exposure for rear passengers.',['$9–15','$18–28','$32+']),
    item('Food & drink','Insulated bottle set','insulated water bottle set car travel','upgrade','Keeps water cold and reduces convenience stops.',['$18–28','$30–45','$55+'])
  ],
  cool:[item('Climate','Packable travel blanket','packable travel blanket car','optional','Adds flexible comfort for cool mornings and unplanned stops.',['$15–22','$25–38','$45+'])],
  freezing:[
    item('Climate','Ice scraper & snow brush','ice scraper snow brush car','essential','Clears frosted windows before a cold-weather start.',['$8–14','$15–22','$25+']),
    item('Safety','Portable traction mats','portable traction mats snow car tire','essential','Adds grip on icy or snow-covered shoulders.',['$35–55','$65–95','$120+']),
    item('Safety','Thermal emergency blanket set','thermal emergency blanket car winter','essential','Provides backup warmth during a cold roadside delay.',['$10–16','$18–28','$35+'])
  ],
  rainy:[
    item('Cleanup','Microfiber drying towel set','microfiber car drying towel set','essential','Keeps wet gear and seats from soaking the cabin.',['$14–20','$22–30','$32+']),
    item('Visibility','Rain-repellent windshield treatment','rain repellent windshield treatment spray','upgrade','Improves visibility during sustained wet-weather driving.',['$10–15','$16–24','$28+'])
  ],
  overnight:[
    item('Overnight','Vehicle privacy shade set','car window privacy shades camping','essential','Adds privacy and blocks early light when sleeping in the vehicle.',['$22–32','$35–55','$60+']),
    item('Overnight','Compact sleeping pad','car camping sleeping pad compact','essential','Adds insulation and comfort without consuming the cargo area.',['$30–50','$55–85','$95+'])
  ],
  compact:[item('Storage','Slim roof cargo bag','waterproof car roof cargo bag compact','optional','Adds overflow capacity without permanently using cabin space.',['$45–65','$70–110','$130+'])],
  sedan:[item('Storage','Trunk cargo net','sedan trunk cargo net organizer','upgrade','Keeps soft bags and groceries from sliding across a wide trunk.',['$15–24','$28–42','$50+'])],
  suv:[item('Storage','Adjustable cargo divider','suv cargo divider organizer','upgrade','Creates stable zones in a large cargo area.',['$25–40','$45–70','$85+'])],
  truck:[
    item('Storage','Weatherproof truck-bed box','weatherproof truck bed storage box','essential','Protects trip gear from rain, dust and open-bed exposure.',['$55–90','$110–180','$240+']),
    item('Storage','Truck-bed cargo net','truck bed cargo net tie down','essential','Prevents loose items shifting or leaving the bed.',['$20–35','$40–65','$80+'])
  ],
  minivan:[item('Power','Rear-cabin multiport charger','multi port car charger rear seat minivan','upgrade','Supports several passenger devices without cable swapping.',['$18–28','$32–48','$60+'])],
  organization:[item('Storage','Seat-back organizer','car seat back organizer storage','essential','Moves small essentials off seats and floors.',['$15–24','$28–42','$50+'])],
  safety:[item('Safety','Reflective roadside kit','car emergency roadside kit reflector','essential','Makes an unplanned roadside stop more visible and manageable.',['$18–28','$30–45','$50+'])],
  comfort:[item('Comfort','Driver lumbar support','car lumbar support pillow long drive','essential','Reduces discomfort during extended seat time.',['$17–26','$28–40','$45+'])],
  foodpower:[item('Food & drink','Compact travel cooler','small car cooler road trip','essential','Keeps food and drinks available between stops.',['$25–40','$45–70','$90+'])],
  weather:[item('Climate','All-weather cargo liner','all weather car cargo liner','essential','Contains water, mud and weather-exposed gear.',['$25–40','$45–70','$85+'])]
};

const state = {trip:'camping',focus:'established',vehicle:'suv',budget:'balanced',climate:'warm',days:5,kids:true,pets:false,overnight:false,cat:'All',view:'all',owned:new Set()};
const $ = id => document.getElementById(id);
const amazon = q => `https://www.amazon.com/s?k=${encodeURIComponent(q)}&tag=${AFFILIATE_TAG}`;
const add = (target, group) => { if (groups[group]) target.push(...groups[group]); };

function selectedItems(){
  const result=[];
  add(result,'core');
  if(state.days>=3)add(result,'medium');
  if(state.days>=6)add(result,'long');
  if(state.trip==='camping'){
    add(result,'camping');
    if(state.focus==='remote')add(result,'campingRemote');
    if(state.focus==='vehicle')add(result,'campingVehicle');
  }
  if(state.trip==='beach'){
    add(result,'beach');
    if(state.focus==='family')add(result,'beachFamily');
    if(state.focus==='watersports')add(result,'beachWater');
  }
  if(state.trip==='cross'){
    add(result,'cross');
    if(state.focus==='fast')add(result,'crossFast');
    if(state.focus==='family'&&!state.kids)add(result,'kids');
  }
  if(state.trip==='weekend')add(result,'weekend');
  if(state.trip==='custom')add(result,state.focus);
  if(state.kids)add(result,'kids');
  if(state.pets)add(result,'pets');
  if(state.overnight)add(result,'overnight');
  add(result,state.climate);
  add(result,state.vehicle);
  const seen=new Set();
  return result.filter(x=>!seen.has(x[1])&&seen.add(x[1])).map((x,i)=>({cat:x[0],name:x[1],q:x[2],p:x[3],why:x[4],price:x[5],id:`${x[0]}-${x[1]}`}));
}

function renderFocus(){
  const options=trips[state.trip].focuses;
  if(!options[state.focus])state.focus=Object.keys(options)[0];
  $('focus').innerHTML=Object.entries(options).map(([value,label])=>`<option value="${value}">${label}</option>`).join('');
  $('focus').value=state.focus;
}

function tripButtons(){
  $('tripTypes').innerHTML=Object.entries(trips).map(([key,value])=>`<button class="trip-btn ${state.trip===key?'active':''}" data-trip="${key}" aria-pressed="${state.trip===key}"><span class="trip-icon">${value.icon}</span><span class="trip-copy"><b>${value.label}</b><small>${value.desc}</small></span></button>`).join('');
  document.querySelectorAll('[data-trip]').forEach(button=>button.onclick=()=>{state.trip=button.dataset.trip;state.focus=Object.keys(trips[state.trip].focuses)[0];state.cat='All';render();});
}

function diagnosis(){
  const vehicle=$('vehicle').selectedOptions[0].text;
  const focus=trips[state.trip].focuses[state.focus].toLowerCase();
  const profile={
    camping:`${vehicle} with an ${focus} focus prioritizes food storage, site lighting and reliable access to power and water.`,
    beach:`${vehicle} with a ${focus} focus prioritizes sand containment, wet-gear separation and heat management.`,
    cross:`${vehicle} with a ${focus} focus prioritizes driver comfort, reliable navigation and roadside independence.`,
    weekend:`${vehicle} with a ${focus} focus stays intentionally light, emphasizing organization and everyday comfort.`,
    custom:`Your ${focus} goal shapes this setup around the problem you most want to solve.`
  }[state.trip];
  const additions=[];
  if(state.days>=6)additions.push(`${state.days} days adds stronger breakdown preparation`);
  if(state.kids)additions.push('Kids add reachable storage and spill control');
  if(state.pets)additions.push('Pets add restraint, water and upholstery protection');
  return profile+(additions.length?` ${additions.join('; ')}.`:'');
}

function render(){
  tripButtons();renderFocus();
  const all=selectedItems();
  const cats=['All',...new Set(all.map(x=>x.cat))];
  const visible=all.filter(x=>(state.cat==='All'||x.cat===state.cat)&&(state.view==='all'||!state.owned.has(x.id)));
  $('dayCount').textContent=state.days;
  const flags=['kids','pets','overnight'].filter(k=>state[k]).map(k=>({kids:'kids',pets:'pets',overnight:'sleeping in car'}[k]));
  flags.push({warm:'warm weather',cool:'cool weather',rainy:'rainy weather',freezing:'freezing weather'}[state.climate]);
  $('meta').textContent=`${$('vehicle').selectedOptions[0].text} · ${state.days} ${state.days===1?'day':'days'} · ${trips[state.trip].label.toLowerCase()} · ${trips[state.trip].focuses[state.focus].toLowerCase()}${flags.length?' · '+flags.join(' · '):''}`;
  const unowned=all.filter(x=>!state.owned.has(x.id));
  $('needCount').textContent=unowned.length;$('mobileNeedCount').textContent=unowned.length;
  const tier={budget:0,balanced:1,premium:2}[state.budget];
  const midpoint=value=>{const nums=value.replace(/[$,]/g,'').match(/\d+/g).map(Number);return nums.length>1?(nums[0]+nums[1])/2:nums[0];};
  $('needCost').textContent=`~$${Math.round(unowned.reduce((sum,x)=>sum+midpoint(x.price[tier]),0))}`;$('mobileNeedCost').textContent=$('needCost').textContent;
  $('diagnosis').textContent=diagnosis();
  $('tabs').innerHTML=cats.map(cat=>`<button class="tab ${state.cat===cat?'active':''}" data-cat="${cat}">${cat}</button>`).join('');
  document.querySelectorAll('[data-cat]').forEach(button=>button.onclick=()=>{state.cat=button.dataset.cat;render();});
  $('list').innerHTML=visible.length?visible.map(x=>`<article class="item ${state.owned.has(x.id)?'owned':''}" data-category="${x.cat}"><button class="own ${state.owned.has(x.id)?'owned':''}" data-own="${x.id}" aria-label="Mark ${x.name} as owned" aria-pressed="${state.owned.has(x.id)}"></button><span class="item-icon">${catIcon[x.cat]||icons.custom}</span><div class="item-copy"><div class="item-top"><span class="item-name">${x.name}</span><span class="priority ${x.p}">${x.p==='upgrade'?'Useful upgrade':x.p}</span></div><div class="why"><b>Why it fits:</b> ${x.why}</div></div><div class="actions"><span class="price"><b>${x.price[tier]}</b><small>${state.budget}</small></span><a class="shop" href="${amazon(`${x.q} ${state.vehicle}`)}" target="_blank" rel="nofollow sponsored noopener">View picks <span aria-hidden="true">↗</span></a></div></article>`).join(''):'<div class="empty">Everything here is already covered. You’re road-ready.</div>';
  document.querySelectorAll('[data-own]').forEach(button=>button.onclick=()=>{state.owned.has(button.dataset.own)?state.owned.delete(button.dataset.own):state.owned.add(button.dataset.own);render();});
  document.querySelectorAll('[data-view]').forEach(button=>button.classList.toggle('active',button.dataset.view===state.view));
  document.querySelectorAll('[data-toggle]').forEach(button=>{const on=state[button.dataset.toggle];button.classList.toggle('on',on);button.setAttribute('aria-pressed',on);});
}

$('vehicle').onchange=e=>{state.vehicle=e.target.value;render();};
$('budget').onchange=e=>{state.budget=e.target.value;render();};
$('climate').onchange=e=>{state.climate=e.target.value;render();};
$('focus').onchange=e=>{state.focus=e.target.value;render();};
$('minus').onclick=()=>{state.days=Math.max(1,state.days-1);render();};
$('plus').onclick=()=>{state.days=Math.min(30,state.days+1);render();};
document.querySelectorAll('[data-toggle]').forEach(button=>button.onclick=()=>{state[button.dataset.toggle]=!state[button.dataset.toggle];render();});
document.querySelectorAll('[data-view]').forEach(button=>button.onclick=()=>{state.view=button.dataset.view;render();});
$('generate').onclick=()=>{document.querySelector('.results').scrollIntoView({behavior:'smooth'});render();};
$('print').onclick=e=>{e.preventDefault();window.print();};
$('mobileTop').onclick=()=>document.querySelector('.planner').scrollIntoView({behavior:'smooth'});
function loadSaved(){try{return JSON.parse(localStorage.getItem('carkitcost_trips')||'[]');}catch{return[];}}
function renderSaved(){
  const saved=loadSaved();
  $('savedTrips').innerHTML=saved.length?saved.map((s,i)=>`<span style="display:inline-flex;align-items:center;gap:6px;border:1px solid rgba(255,255,255,.24);border-radius:99px;padding:6px 6px 6px 12px;font-size:11px;color:#26312e"><button data-load="${i}" style="background:none;border:0;color:#173f35;font:700 11px 'DM Sans';cursor:pointer;padding:0">${s.label}</button><button data-del="${i}" aria-label="Delete" style="background:none;border:0;color:#68736e;cursor:pointer;padding:0 4px">×</button></span>`).join(''):'<span style="font-size:11px;color:#68736e">No saved trips yet.</span>';
  document.querySelectorAll('[data-load]').forEach(button=>button.onclick=()=>{const s=loadSaved()[+button.dataset.load];Object.assign(state,{trip:s.trip,focus:s.focus||Object.keys(trips[s.trip].focuses)[0],vehicle:s.vehicle,budget:s.budget,climate:s.climate,days:s.days,kids:s.kids,pets:s.pets,overnight:s.overnight});$('vehicle').value=state.vehicle;$('budget').value=state.budget;$('climate').value=state.climate;render();});
  document.querySelectorAll('[data-del]').forEach(button=>button.onclick=()=>{const data=loadSaved();data.splice(+button.dataset.del,1);localStorage.setItem('carkitcost_trips',JSON.stringify(data));renderSaved();});
}
$('saveTrip').onclick=()=>{const saved=loadSaved();const label=`${trips[state.trip].label} · ${state.days}d`;saved.unshift({label,trip:state.trip,focus:state.focus,vehicle:state.vehicle,budget:state.budget,climate:state.climate,days:state.days,kids:state.kids,pets:state.pets,overnight:state.overnight});localStorage.setItem('carkitcost_trips',JSON.stringify(saved.slice(0,8)));renderSaved();};
(function(){const params=new URLSearchParams(location.search);const trip=params.get('trip');const vehicle=params.get('vehicle');const focus=params.get('focus');if(trip&&trips[trip])state.trip=trip;if(vehicle&&$('vehicle').querySelector(`option[value="${vehicle}"]`))state.vehicle=vehicle;if(focus&&trips[state.trip].focuses[focus])state.focus=focus;$('vehicle').value=state.vehicle;})();
renderSaved();render();
