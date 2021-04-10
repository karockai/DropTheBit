import { React, useState } from 'react';
import './RacingLeaderBoard.scss'
import { motion } from "framer-motion"

// add pitstop implementation
// add fastest lap feature


const API = [
  {
    'name' : 'Daniel Ricciardo',
    'abb' : 'RIC',
    'team': 'Red Bull Racing-TAG Heuer',
    'color' : 'redBull',
    'grid_position': 1,
    'current_distance': 2000,
    'weights': '1.001',
    'tires': 'soft',
    'number': '3',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4510.png&h=112&w=112&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/aus.png'
  },
  {
    'name' : 'Max Verstappen',
    'abb' : 'VER',
    'team': 'Red Bull Racing-TAG Heuer',
    'color' : 'redBull',
    'grid_position': 2,
    'current_distance': 1950,
    'weights': '1.0015',
    'tires': 'soft',
    'number': '33',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4665.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/ned.png'
  },
  { 'name': 'Lewis Hamiliton',
   'abb' : 'HAM',
   'team': 'Mercedes',
   'color' : 'mercedes',
   'grid_position': 3,
   'current_distance': 1900,
   'weights': '1.002',
    'tires': 'med',
    'number': '44',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/868.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/gbr.png'
  },
  {
    'name' : 'Sebastian Vettel',
    'abb' : 'VET',
    'team': 'Ferrari',
    'color' : 'ferrari',
    'grid_position': 4,
    'current_distance': 1800,
    'weights': '1.0016',
    'tires': 'med',
    'number': '5',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/864.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png'
  },
  {
    'name' : 'Valtteri Bottas',
    'abb' : 'BOT',
    'team': 'Mercedes',
    'color' : 'mercedes',
    'grid_position': 5,
    'current_distance': 1750,
    'weights': '1.001',
    'tires': 'soft',
    'number': '77',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4520.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png'
  },
  { 
    'name' : 'Kimi Räikkönen',
    'abb' : 'RAI',
    'team': 'Ferrari',
    'color' : 'ferrari',
    'grid_position': 6,
    'current_distance': 1700,
    'weights': '1.0009',
    'tires': 'med',
    'number': '7',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/337.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/fin.png'
  },
  { 
    'name' : 'Nico Hülkenberg',
    'abb' : 'HUL',
    'team': 'Renault',
    'color' : 'renault',
    'grid_position': 7,
    'current_distance': 1650,
    'weights': '1.0006',
    'tires': 'soft',
    'number': '27',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4396.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/ger.png'
  },
  {
    'name' : 'Carlos Sainz Jr.',
    'abb' : 'SAI',
    'team': 'Renault',
    'color' : 'renault',
    'grid_position': 8,
    'current_distance': 1560,
    'weights': '1.0005',
    'tires': 'med',
    'number': '55',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4686.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/esp.png'
  },
  { 
    'name' : 'Charles Leclerc',
    'abb' : 'LEC',
    'team': 'Sauber-Ferrari',
    'color' : 'sauber',
    'grid_position': 9,
    'current_distance': 1450,
    'weights': '1.0009',
    'tires': 'hard',
    'number': '16',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5498.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/mon.png'
  },
  { 
    'name' : 'Marcus Ericsson',
    'abb' : 'ERI',
    'team': 'Sauber-Ferrari',
    'color' : 'sauber',
    'grid_position': 10,
    'current_distance': 1420,
    'weights': '1.0004',
    'tires': 'soft',
    'number': '9',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4624.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png'
  },
  { 
    'name' : 'Esteban Ocon',
    'abb' : 'OCO',
    'team': 'Force India-Mercedes',
    'color' : 'forceIndia',
    'grid_position': 11,
    'current_distance': 1300,
    'weights': '1.0003',
    'tires': 'hard',
    'number': '31',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4624.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png'
  },
  { 
    'name' : 'Fernando Alonso',
    'abb' : 'ALO',
    'team': 'McLaren',
    'color' : 'mclaren',
    'grid_position': 12,
    'current_distance': 1210,
    'weights': '1.0003',
    'tires': 'med',
    'number': '14',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4624.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png'
  },
  { 
    'name' : 'Sergio Pérez',
    'abb' : 'PER',
    'team': 'Force India-Mercedes	',
    'color' : 'forceIndia',
    'grid_position': 13,
    'current_distance': 1100,
    'weights': '1.0002',
    'tires': 'hard',
    'number': '11',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4472.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/mex.png'
  },
  { 
    'name' : 'Brendon Hartley',
    'abb' : 'HAR',
    'team': 'Scuderia Toro Rosso-Honda',
    'color' : 'toroRosso',
    'grid_position': 14,
    'current_distance': 1000,
    'weights': '1.0001',
    'tires': 'soft',
    'number': '28',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4624.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png'
  },
  { 
    'name' : 'Pierre Gasly',
    'abb' : 'GAS',
    'team': 'Scuderia Toro Rosso-Honda',
    'color' : 'toroRosso',
    'grid_position': 15,
    'current_distance': 900,
    'weights': '1.0002',
    'tires': 'hard',
    'number': '10',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/5501.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png'
  },
  { 
    'name' : 'Romain Grosjean',
    'abb' : 'GRO',
    'team': 'Hass-Ferrari',
    'color' : 'haas',
    'grid_position': 16,
    'current_distance': 800,
    'weights': '1.0002',
    'tires': 'med',
    'number': '8',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4374.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/fra.png'
  },
  { 
    'name' : 'Stoffel Vandoorne',
    'abb' : 'VAN',
    'team': 'McLaren-Renault',
    'color' : 'mclaren',
    'grid_position': 17,
    'current_distance': 770,
    'weights': '1.0001',
    'tires': 'soft',
    'number': '2',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4624.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png'
  },
  { 
    'name' : 'Kevin Magnussen',
    'abb' : 'MAG',
    'team': 'Haas-Ferrari',
    'color' : 'haas',
    'grid_position': 18,
    'current_distance': 750,
    'weights': '1.0001',
    'tires': 'hard',
    'number': '20',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4623.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/den.png'
  },
  { 
    'name' : 'Lance Stroll',
    'abb' : 'STR',
    'team': 'Williams-Mercedes',
    'color' : 'williams',
    'grid_position': 19,
    'current_distance': 650,
    'weights': '1.0001',
    'tires': 'soft',
    'number': '18',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4775.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/can.png'
  },
  { 
    'name' : 'Sergey Sirotkin',
    'abb' : 'SIR',
    'team': 'Williams-Mercedes',
    'color' : 'williams',
    'grid_position': 20,
    'current_distance': 600,
    'weights': '1.0001',
    'tires': 'hard',
    'number': '35',
    'image': 'https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4624.png&h=128&w=128&scale=crop',
    'flag': 'https://a.espncdn.com/i/teamlogos/countries/500/rus.png'
  }
];

const Tyre = (size) => {
  return (
    <div class='tyreContainer'>
      <span class={`leftArc ${size}`}/><span class="size">{size[0]}</span><span class={`rightArc ${size}`}/>
    </div>
  )
}

const getProperOrdinalNumber = (number) => {
  if (number === 1) {
    return 'st';
  } else if (number === 2) {
    return 'nd';
  } else if (number === 3) {
    return 'rd';
  } else {
    return 'th';
  }
}

const DetailCard = (driver) => {
  const [side, toggleSide] = useState('front');
  const dude = driver.driver;
  return (
    <div class='detailCardContainer' onClick={()=>side==='front' ? toggleSide('back') : toggleSide('front') }>
      <div class='detailCardTop flex'>
        <div class="driverPosition">{dude.current_position || dude.grid_position}</div> <span class={`line ${dude.color}`}></span> <span class='driverName'>{dude.name.split(' ')[0]}</span>
        <span class='driverName bold uppercase'>{dude.name.split(' ')[1]}</span><span class='driverNumber'>#{dude.number}</span>
      </div>
      {side === 'front' ? (
      <div class='detailCardBottom flex'>
       <div class='center quarter'>
         <div class='largeText'>{dude.grid_position}<span class='ordinal'>{getProperOrdinalNumber(dude.grid_position)}</span></div>
         <div class='smallText'>STARTED</div>
        </div>
        <div class='center quarter'>
          <div class='largeText'>
            <div class="driverInterval">
            {dude.difference > 0 ? <div><span class='uparrow'>&#x25B2;</span> {String(dude.difference)}</div> : 
            dude.difference < 0 ?
              <div><span class='downarrow'>&#x25BC;</span> {String(Math.abs(dude.difference))}</div>
              : <div><span class='flatline'/>  0</div>
            }
          </div>
          </div>
          <div class='smallText'>PLACES</div>
        </div>
        <div class='center quarter'>
        <div class='largeTire'>{Tyre(dude.tires)}</div>
         <div class='smallText uppercase'>{dude.tires}</div>
        </div>
        <div class='center quarter'>
          <div class='largeText'>0</div>
          <div class='smallText'>PIT STOPS</div>
        </div>
      </div>
      
      ) : (
      <div class='flex'>
          <img class='profileimage' src={dude.image} alt='profile'/>
          <img class='flag' src={dude.flag} alt='flag'/>
          <p class='teamdetail'>{dude.team}</p>
      </div>
      )}
      
    </div> 
  )
}

const Lap = (props) => {
  return (
    <section id='lap'>
      <div>LAP</div>
      <div id='seperator'></div>
      <div>{Math.ceil(((props.lap.current_distance / 305354)) * 71) || 1}  / 71</div>
    </section>
  )
}

const convertDistanceToTime = (lead, follow) => {
  let difference = follow - lead;
  return `+${Math.abs(difference * .055).toFixed(3)}`;
}

const Leaderboard = (props) => {
  const spring = {
    type: "tween",
    damping: 100,
    stiffness: 500,
    mass: 2.5,
    restDelta: 6,
    duration: 1,
    ease: 'easeOut'
  };
  return (
    <section id='leaderboard'>
      {props.view === 'gain' ? <div id='detailtitle'>GAINED/LOST</div> : props.view === 'tyres' ? <div id='detailtitle'>CURRENT TYRES</div> : null}
      {props.activeDrivers.map((driver, driverIndex, allDrivers )=> {
        const lastDriver = driverIndex !== 0 ?allDrivers[driverIndex - 1] : null;
        const difference = driver.grid_position - (driverIndex + 1);
        const DriverInterval = (<div class="driverInterval">
                {driverIndex === 0 ? 'Interval' : convertDistanceToTime(lastDriver.current_distance, driver.current_distance)} 
                </div>)
        const GainedLost = (
          <div class="driverInterval">
            {difference > 0 ? <div><span class='uparrow'>&#x25B2;</span> {String(difference)}</div> : 
            difference < 0 ?
              <div><span class='downarrow'>&#x25BC;</span> {String(Math.abs(difference))}</div>
              : <div><span class='flatline'/>  0</div>
            }
          </div>
        )
        const Tyrez = (<div class='tireDetail flex'>{Tyre(driver.tires)} <span class='tireHardness'>{driver.tires}</span></div>)
        return (
          <motion.div
            key={driver.name}
            layoutTransition={spring}
            >
            <div class="driverContainer" key={driver.abb} onClick={()=>props.selectDriver({...driver, current_position: driverIndex + 1, difference: difference})}>
              <div class='driverLeft'>
                <div class="driverPosition">{driverIndex + 1}</div>
                <span class={`line ${driver.color}`}></span>
                <div class="driverName">{driver.abb}</div>
              </div>
              <div class='driverRight'>
                {props.view === 'interval' ? DriverInterval : props.view === 'gain' ? GainedLost: Tyrez}
              </div>
            </div>
          </motion.div>
        )
      })}
    </section>
  )
}

const Inactive = (props) => {
  return (
    <section id='inactive'>
      {props.inActiveDrivers && props.inActiveDrivers.length? (
        <div>
          {props.inActiveDrivers.map(driver => {
            return (
              <div class="driverContainer driverInactive" key={driver.abb}>
                <div class='driverLeft'>
                  <span class={`line ${driver.color}`}></span>
                  <div class="driverName">{driver.abb}</div>
                </div>
                <div class='driverRight'>
                  OUT
                </div>
              </div>
            )
          })} 
        </div>
      ) : null}
    </section>
  )
}


export default function RacingLeaderBoard() {
  const [view, toggleView] = useState('interval');
  const [activeDrivers, updateDrivers] = useState(API);
  const [driver, selectDriver] = useState(activeDrivers[0]);
  const [inActiveDrivers, updateInActiveDrivers] = useState([]);
  const outDriverSet = new Set();
  // rough estimation on who will be inactive from race
  const dnf = () => Math.floor(Math.random() * 25000) === 415;

  const simulateRace = () => {
    let updated = [];
    let temp = [];
    activeDrivers.forEach(driver => {
      driver.current_distance += Math.floor(driver.weights * (Math.random() * 10) + 10);
      let out = dnf();
      if (out) {
        if (!outDriverSet.has(driver.name) && activeDrivers.length > 6) {
          temp.push(driver);
          outDriverSet.add(driver.name);
        }
      } else if (!outDriverSet.has(driver.name)) {
        updated.push(driver);
      }
    })
    updated.sort((a,b) => {
      return b.current_distance - a.current_distance;
    })
    updateState(updated, temp);
  }

  const updateState = (active, inactive) => {
    updateDrivers(result => [...active]);
    updateInActiveDrivers(result => [...result, ...inactive]);
  }

  const startRace = () => {
    setInterval(()=> simulateRace(), 150);
  }

  return (
    <section id='container'>
      <Lap lap={activeDrivers[0]}/>
      <Leaderboard activeDrivers={activeDrivers} view={view} selectDriver={selectDriver}/>
      <Inactive inActiveDrivers={inActiveDrivers}/>
      <div id='controls'> 
        <button id='startRace' onClick={startRace}>Start Race!</button>
        <div class='ferrari'>
          <p style={{textAlign: 'center'}}>Change Views</p>
          <button class='control' onClick={()=>toggleView('gain')}>Gain/Lost</button>
          <button class='control' onClick={()=>toggleView('interval')}>Interval</button>
          <button class='control' onClick={()=>toggleView('tyres')}>Tyres</button>
        </div>
      </div>
      <DetailCard driver={driver}/>
    </section>
  )
}