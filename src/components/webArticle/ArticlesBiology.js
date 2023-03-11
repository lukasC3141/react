import React from 'react'

// all article for biology websites
export const Prvoci =  (
    <>
        <li>jednobuněční mnohobuneční živočichové</li>
        <li>většinou heterotrofie</li>
        <li>růst
            <ol className='circle'>
                <li>aktivní</li>
                <li>omezený růst</li>
                <li>neomezený růst</li>
            </ol></li>
        <li>nervová činnost</li>

        <h2>Cévní soustava</h2>
        
        <li>cévy</li>
        <li>srdce 
            <ol className='circle'>
                <li>aktivní</li>
                <li>omezený růst</li>
                <li>neomezený růst</li>
            </ol></li>   
    </>)




export const Členovci = (
  <>
    <li>mají článkované tělo a končetiny</li>
    <li>segmentace(článkování) heteronomní - př: hlava, hruď, zadeček</li>
    <li>tělo:
        <ol className='decimal'>
            <li>hlava + trup -> př. stonožky</li>
            <li>hlava + trup + zadeček -> př. hmyz</li>
            <li>hlavohruď + zadeček -> př. pavouk</li>
            <li>1 celek -> př. sekáč, roztoč</li>
        </ol></li>
    <li>pokryv těla:
        <ol className='circle'>
            <li>jednovrstevná pokožka (epidermis) s kutikulou + chitin + CaCO<sub>3</sub> = exoskelet</li>
            <li>krunýř: tvrdý exoskelet</li>
        </ol></li>
    <li>ekdyse(svlékání) -> pevný krunýř neumožňuje růst těla</li>

    <h4>trávicí soustava</h4>
    <li>trubicovitá</li>
    <li>rozlišena na úseky -> ústní otvor, hltan, jícen, žaludek, střevo, řitní otvor</li>
    <li>vyvinuté trávicí žlázy <span className='un-txt'>(hepatopankreas)</span></li>
    <li>kolem ústního otvoru často nějaké přeměnené končetiny</li>
    <li>suchozemští členovci mají vyvinuté slinné žlázy, které umožňují příjem suché potravy</li>
    
    <h4>dýchací soustava</h4>
    <li>3 typy dýchacích orgánů:
        <ol className='decimal'>
            <li><span className='un-txt'>žábry</span> - př: korýši, trilobiti, hrotnatci</li>
            <li><span className='un-txt'>plicní vaky</span> - př: pavoukovci</li>
            <li><span className='un-txt'>vzdušnice(tracheje)</span> = hustě rozvětvené chitinové trubičky, které zasahují do všech částí těla, př: stonožky, mnohonožky, hmyz</li>
            <li>celým povrchem těla</li>
        </ol></li>

    <h4>cévní soustava</h4>
    <li>otevřená tělní tekutina hemolymfa</li>
    <li>trubicové srdce na hřbetní straně těla</li>
    <li>krevní barvivo: <span className='un-txt'>hemocyanin</span></li>
    <h4>vylučovací soustava</h4>
    <li><span className='un-txt'>metanefridie</span>:
        <ol className='circle'>
            <li>mají vodní členovci</li>
            <li>vzhled: obrvená nálevka</li>
            <li>antenální žlázy: metanefridie u tykadel</li>
            <li>coxální žlázy: metanefridie pod končetinami</li>
            <li>maxilární žlázy: metanefridie u ústního otvoru</li>
        </ol></li>
    <li><span className='un-txt'>Malpighiho žlázy(Malpigické trubice)</span>:
        <ol className='circle'>
            <li>jsou tenké trubičky, které ústí do střeva</li>
            <li>zpětné vstřebávání - do těla vrací užitečné látky</li>
            <li>mají př: pavoukovci, stonožky a hmyz</li>
        </ol></li>
    
    <h4>nervová soustava</h4>
    <li>uzlinová</li>
    <li>na břišní části těla, břišní nervová páska</li>
    <h4>smysly</h4>
    <li>především na hlavě</li>
    <li>často vznik z přeměnených končetin: 
        <ol className='circle'>
            <li>tykadla - čichová a hmatová funkce</li>
            <li>makadla - chuťová funkce</li>
        </ol></li>
    <li>oči: složené(fasetové) oči z velkého množství drobných oček(omatidií), jednoduché oči</li>
    
    <h4>rozmnožovací soustava</h4>
    <li>pohlavní rozmnožování, u některých parthenogeneze(jedinci se rodí z neoplozených vajíček)</li>
    <li>gonochoristé - některé druhy pohlavní dimorfismus</li>
    <li>často nepřímý vývin</li>

    <li><span className='un-txt'>4 podkmeny:</span> 
        <ol className='decimal'>
            <li><span className='green-text'>Trojlaločnatci</span></li>
            <li><span className='red-text'>Klepítkatci</span></li>
            <li><span className='blue-text'>Korýši</span></li>
            <li>Vzdušnicovci</li>
        </ol></li>

    <h2 className='green-text'>podkmen Trojlaločnatci</h2>
    <li>známí především trilobity</li>
    <li>tělo rozdělené na tři podélné úseky</li>
    <li>vývojově nejstarší členovci</li>
    <li>vyhynulí</li>
    <li>žili v prvohorních mořích</li>
    <li>ve středních Čechách - fosílie, Barrandien(mezi Prahou a Klatovy)</li>
    
    
    <h2 className='red-text'>podkmen Klepítkatci</h2>
    <li>významné třídy: <span className='orange-text'>hrotnatci a pavoukovci</span> </li>
    <li>tělo rozlišené na hlavohruď a zadeček</li>
    <li>na hlavohrudi 6 párů končetin: 
        <ol className='circle'>
            <li><span className='un-txt'>1. pár klepítka (chelicery)</span> - lov a zpracování potravy</li>
            <li><span className='un-txt'>2. pár makadla (pedipalpy)</span> - většinou hmat, vyjímečně lov</li>
            <li>čtyři páry kráčivých končetin</li>
        </ol></li>
    
    <h3 className='orange-text'>třída hrotnatci</h3>
    <li>vzdáleně se podobají trilobitům</li>
    <li>mořští - dýchají žábrami</li>
    <li>tělo kryté širokým štítem</li>
    <li>zadeček zakončemý silným hrotem</li>
    <li>zástupci: ostrorep</li>

    <h3 className='orange-text'>třída pavoukovci</h3>
    <li>významné řády: 
        <ol className='circle'>
            <li><span className='yellow-text'>pavovuci</span></li>
            <li><span className='yellow-text'>sekáči</span></li>
            <li><span className='yellow-text'>štíři</span></li>
            <li><span className='yellow-text'>štírci</span></li>
            <li><span className='yellow-text'>solifugy</span></li>
            <li><span className='yellow-text'>roztoči</span></li>
        </ol></li>
    <li>většinou na souši</li>
    <li>většinou jsou draví</li>
    <li>dýchají plicními vaky - na břišní straně zadečku</li>
    <li>vylučovací soustava: Malpighiho žlázy - koxální(kyčelní) žlázy</li>

    <h4 className='yellow-text'>řád pavouci</h4>
    <li>hlavohruď oddělena od zadečku stopkou</li>
    <li>v chelicerách jedové žlázy</li>
    <li>pedipalpy mají podobu kratších nohou</li>
    <li>na zadečku ústí snovací žlázy: vytvářejí pavučinu - lov, úkryt, tvorba kokonu pro vajíčka, keson, obalování kořisti</li>
    <li>mimotělní trávení - trávicí žlázy vypoštějí do kořisti a nasávají obsah</li>
    <li>orientují se především hmatem, vnímáním ořevů</li>
    <li>6-8 jednoduchých oček</li>
    <li>hemolymfa - rozvod živin a hormonů, ne dýchací plyny</li>
    <li>pohlavní dimorfismus, samičky jsou větší</li>
    <li>kopulace - sameček přenáší spermatofor do těla samičky makadly</li>
    <li>zástupci: 
        <ol className='circle'>
            <li>sklípkani</li>
            <li>křižáci - staví svislé sítě</li>
            <li>snovačky</li>
            <li>pokoutník - tvoří horizontální sítě, synantropní(žije v okolí lidí)</li>
            <li>vodouch - staví kesony(zvonítá struktura, ze které dýchá pod vodou)</li>
            <li>slíďák</li>
            <li>lovčíci</li>
            <li>běžníci</li>
            <li>skákavka</li>
            <li>třesavka</li>
        </ol></li>

    <h4 className='yellow-text'>řád sekáči</h4>
    <li>hlavohruď a zadeček tvoří souvislý celek</li>
    <li>chybí stopka</li>
    <li>nemají jedové a snovací žlázy(netvoří pavučiny)</li>
    <li>konají autonomii(odseknutí nohou v nebezpečí)</li>
    <li>některé druhy synantropní</li>
    <li>zástupci: sekáč domácí</li>

    <h4 className='yellow-text'>řád štíři</h4>
    <li>drobné chelicery</li>
    <li>makadla mohutná, podoba klepet</li>
    <li>zadeček rozlišený na dvě části 
        <ol className='circle'>
            <li>přední - je širší</li>
            <li>zadní - je užší, nazývána <span className='un-txt'>postabdomen</span> </li>
        </ol></li>
    <li>do trnu na posledním článku ústí jedová žláza</li>
    <li>poštní druhy - úzká klepeta, jedovatější</li>
    <li>pralesní druhy - mohutná klepeta, slabší jed</li>
    <li><span className='un-txt' >pečují o mláďata</span></li>
    <li>zástupci: 
        <ol>
            <li>štír tlustorepý</li>
            <li>veleštír obrovský - měří až 23cm</li>
            <li>štír středomořstký</li>
            <li>štír kýlnatý</li>
        </ol></li>
    
    <h4 className='yellow-text'>řád štírci</h4>
    <li>makadla podoba klepet</li>
    <li>narozdíl od štírů nemají zadeček rozlišený nadvě části</li>
    <li>drobní - nanejvýš několik mm</li>
    <li>nacházejí se pod kůrou stromů, v muzeích, sbírkách, na půdách</li>
    <li>zástupci: 
        <ol className='circle'>
            <li>štírek obecný</li>
            <li>štírek knihovní</li>
        </ol></li>
    
    <h4 className='yellow-text'>řád solifugy</h4>
    <li>žijí ve stepích</li>
    <li>noční dravci</li>
    <li>živí se termity</li>
    <li>obrovsé chelicery</li>
    <li>nemají jdovou žlázu</li>
    <li>po páření dochází k manželskému kanibalismu</li>

    <h4 className='yellow-text'>řád roztoči</h4>
    <li>miniaturní</li>
    <li>hlavohruď a zadeček tvoří jeden souvislý celek</li>
    <li>parazitují, živí se organickým odpadem nebo jsou draví</li>
    <li>půdní roztoči - významná složka edafonu(všeho živého v půdě)</li>
    <li>u parazitujících roztočů jsou chelicery a pedipalpy přeměnena na bodec</li>
    <li>rozdělení:
        <ol className='circle'>
            <li>škůdci potravin: tzv. skladokazové, př: roztoč moučný</li>
            <li>parazité: 
                <ol className='circle'>
                    <li>rostlin: svilušky, vlnovníci</li>
                    <li>živočichů: 
                        <ol>
                            <li>včel: kleštík obecný, choroba varoáza včel, , člověka</li>
                            <li>drůbeže: čmelík kuří</li>
                            <li>člověka: klíště obecné - sají jen samičky- klíšťová encefalitida, borelóza, zákožka svrabová- svrab, trudník lidský trudovina(akné)</li>
                        </ol></li>
                </ol></li>
            <li>půdní: pancířníci, sametky</li>
        </ol></li>

    <h2 className='blue-text'>podkmen Korýši</h2>
    <li>většinou vodní</li>
    <li>většionu žábry</li>
    <li>mají dva páry tykadel</li>
    <li>tělo tvořeno z hlavohruďi a zadečku</li>
    <li>často mají krunýř(karapax)</li>
    <li>často nepřímý vývin, raci mají vývin přímý</li>

  </>)
