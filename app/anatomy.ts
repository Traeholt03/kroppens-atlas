export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'Skelet',color:'#e2d9ba',description:'Knoglerne udgør kroppens bærende skelet, beskytter organerne og giver musklerne noget at hæfte på. Knoglevævet lagrer desuden mineraler og danner blodceller.'},
 {id:'muscular',name:'Muskler',color:'#a85b50',description:'Skeletmusklerne skaber bevægelse ved at trække i deres hæftepunkter. Sammen med senerne bevæger de leddene, holder kroppen stabil og producerer varme.'},
 {id:'cardiac',name:'Hjerte',color:'#b96760',description:'Hjertet er en muskelpumpe med fire kamre. Klapperne sørger for, at blodet kun løber fremad gennem lunge- og kropskredsløbet.'},
 {id:'sensory',name:'Sanseorganer',color:'#b0c8ce',description:'Disse strukturer står for sanserne, blandt andet syn, hørelse og balance. Deres specialiserede væv registrerer påvirkninger og sender information videre via nervesystemet.'},
 {id:'arterial',name:'Arterier',color:'#c05245',description:'Hjertet driver blodet rundt i kredsløbet. Arterierne fører blodet væk fra hjertet ud til vævene, og i lungekredsløbet til lungerne.'},
 {id:'venous',name:'Vener',color:'#527c9f',description:'Venerne fører blodet tilbage mod hjertet. Overfladiske og dybe netværk samler blod fra vævene, og lungevenerne bringer iltet blod tilbage fra lungerne.'},
 {id:'nervous',name:'Nervesystem',color:'#d8b565',description:'Hjernen, rygmarven og de perifere nerver sender og bearbejder signaler. De styrer sansning, bevægelse, koordination og kroppens automatiske funktioner.'},
 {id:'respiratory',name:'Åndedræt',color:'#b98991',description:'Luftvejene leder luften ned til lungerne, hvor ilt og kuldioxid udveksles mellem luft og blod. Vejrtrækningen drives af trykændringer skabt af åndedrætsmusklerne.'},
 {id:'digestive',name:'Fordøjelse',color:'#b8916b',description:'Fordøjelseskanalen nedbryder maden, optager næringsstoffer og vand og fører affaldsstoffer videre. Hjælpeorganer bidrager med galde og fordøjelsesenzymer.'},
 {id:'urinary',name:'Urinveje',color:'#b47961',description:'Nyrerne filtrerer blodet og regulerer væske-, salt- og syre-base-balancen. Urinen løber gennem urinlederne til blæren og ud gennem urinrøret.'},
 {id:'lymphatic',name:'Lymfesystem',color:'#879f7c',description:'Lymfekarrene fører overskydende vævsvæske tilbage til blodkredsløbet. Lymfeknuder og andre lymfoide organer overvåger kroppen og understøtter immunforsvaret.'},
 {id:'endocrine',name:'Hormonsystem',color:'#c5a09a',description:'De hormonproducerende organer frigiver hormoner til blodet og koordinerer processer som stofskifte, vækst, stressreaktioner og forplantning.'},
 {id:'reproductive',name:'Forplantning',color:'#bda098',description:'De mandlige kønsorganer, som vises her, står for produktion, modning og transport af sædceller samt dannelse af kønshormoner.'},
 {id:'integumentary',name:'Kropsoverflade',color:'#ba9b7d',description:'Kropsoverfladen fungerer som ydre anatomisk reference. Huden danner en beskyttende barriere og bidrager til følesans og temperaturregulering.'},
 {id:'connective',name:'Bindevæv',color:'#aec3bb',description:'Brusk, ledbånd og andet bindevæv støtter, forbinder og adskiller kroppens strukturer. De stabiliserer leddene og fordeler mekanisk belastning.'},
];
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
/** Nøglerne er de engelske navne fra datasættet; teksterne vises på dansk. */
export const EXPLANATIONS:Record<string,string> = {
 'heart':'En muskelpumpe i brystkassen. Højre side sender blodet til lungerne, og venstre side sender det ud i resten af kroppen.',
 'liver':'Et stort organ under højre side af mellemgulvet. Leveren bearbejder optagne næringsstoffer, producerer galde og danner mange af blodets proteiner.',
 'brain':'Nervesystemets centrale organ. Hjernens forbundne områder styrer sansning, bevægelse, hukommelse, sprog og reguleringen af kroppens funktioner.',
 'stomach':'Et muskuløst kammer mellem spiserøret og tyndtarmen. Mavesækken opbevarer maden og blander den med syre og enzymer, før den sendes videre til tolvfingertarmen.',
 'spleen':'Et lymfoidt organ øverst i venstre side af bughulen. Milten filtrerer blodet, fjerner gamle blodceller og deltager i immunforsvaret.',
 'pancreas':'Et organ i bughulen med både fordøjelses- og hormonfunktion. Bugspytkirtlen leverer enzymer til tyndtarmen og frigiver hormoner som insulin og glukagon.',
 'urinary bladder':'Et muskuløst reservoir i bækkenet, der opbevarer urin fra nyrerne, som kommer ind gennem urinlederne.',
 'trachea':'Hovedluftvejen, der forbinder strubehovedet med bronkierne. Bruskringene holder luftrøret åbent under vejrtrækningen.',
 'diaphragm':'En bred muskel, der adskiller brystkasse og bughule. Når mellemgulvet trækker sig sammen, udvides brystkassen, og luft trækkes ind i lungerne.',
};
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}
