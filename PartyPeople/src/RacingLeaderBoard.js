import { React, useState, useEffect } from 'react';
import './RacingLeaderBoard.scss';
import { motion } from 'framer-motion';
// add pitstop implementation
// add fastest lap feature

const Tyre = (size) => {
    return (
        <div class="tyreContainer">
            <span class={`leftArc ${size}`} />
            <span class="size">{size[0]}</span>
            <span class={`rightArc ${size}`} />
        </div>
    );
};

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
};

const DetailCard = (driver) => {
    const [side, toggleSide] = useState('front');
    const dude = driver.driver;
    return (
        <div
            class="detailCardContainer"
            onClick={() =>
                side === 'front' ? toggleSide('back') : toggleSide('front')
            }
        >
            <div class="detailCardTop flex">
                <div class="driverPosition">
                    {dude.current_position || dude.grid_position}
                </div>{' '}
                <span class={`line ${dude.color}`}></span>{' '}
                <span class="driverName">{dude.name.split(' ')[0]}</span>
                <span class="driverName bold uppercase">
                    {dude.name.split(' ')[1]}
                </span>
                <span class="driverNumber">#{dude.number}</span>
            </div>
            {side === 'front' ? (
                <div class="detailCardBottom flex">
                    <div class="center quarter">
                        <div class="largeText">
                            {dude.grid_position}
                            <span class="ordinal">
                                {getProperOrdinalNumber(dude.grid_position)}
                            </span>
                        </div>
                        <div class="smallText">STARTED</div>
                    </div>
                    <div class="center quarter">
                        <div class="largeText">
                            <div class="driverInterval">
                                {dude.difference > 0 ? (
                                    <div>
                                        <span class="uparrow">&#x25B2;</span>{' '}
                                        {String(dude.difference)}
                                    </div>
                                ) : dude.difference < 0 ? (
                                    <div>
                                        <span class="downarrow">&#x25BC;</span>{' '}
                                        {String(Math.abs(dude.difference))}
                                    </div>
                                ) : (
                                    <div>
                                        <span class="flatline" /> 0
                                    </div>
                                )}
                            </div>
                        </div>
                        <div class="smallText">PLACES</div>
                    </div>
                    <div class="center quarter">
                        <div class="largeTire">{Tyre(dude.tires)}</div>
                        <div class="smallText uppercase">{dude.tires}</div>
                    </div>
                    <div class="center quarter">
                        <div class="largeText">0</div>
                        <div class="smallText">PIT STOPS</div>
                    </div>
                </div>
            ) : (
                <div class="flex">
                    <img class="profileimage" src={dude.image} alt="profile" />
                    <img class="flag" src={dude.flag} alt="flag" />
                    <p class="teamdetail">{dude.team}</p>
                </div>
            )}
        </div>
    );
};

const Lap = (props) => {
    return (
        <section id="lap">
            <div>LAP</div>
            <div id="seperator"></div>
            <div>
                {Math.ceil((props.lap.current_distance / 305354) * 71) || 1} /
                71
            </div>
        </section>
    );
};

const convertDistanceToTime = (lead, follow) => {
    let difference = follow - lead;
    return `+${Math.abs(difference * 0.055).toFixed(3)}`;
};

const Leaderboard = (props) => {
    const spring = {
        type: 'tween',
        damping: 100,
        stiffness: 500,
        mass: 2.5,
        restDelta: 6,
        duration: 1,
        ease: 'easeOut',
    };
    return (
        <section id="leaderboard">
            {props.view === 'gain' ? (
                <div id="detailtitle">GAINED/LOST</div>
            ) : props.view === 'tyres' ? (
                <div id="detailtitle">CURRENT TYRES</div>
            ) : null}
            {props.activeDrivers.map((driver, driverIndex, allDrivers) => {
                const lastDriver =
                    driverIndex !== 0 ? allDrivers[driverIndex - 1] : null;
                const difference = driver.grid_position - (driverIndex + 1);
                const DriverInterval = (
                    <div class="driverInterval">
                        {driverIndex === 0
                            ? 'Interval'
                            : convertDistanceToTime(
                                  lastDriver.current_distance,
                                  driver.current_distance
                              )}
                    </div>
                );
                const Tyrez = (
                    <div class="tireDetail flex">
                        {Tyre(driver.tires)}{' '}
                        <span class="tireHardness">{driver.tires}</span>
                    </div>
                );
                return (
                    <motion.div key={driver.name} layout transition={spring}>
                        <div
                            class="driverContainer"
                            key={driver.abb}
                            onClick={() => {}}
                        >
                            <div class="driverLeft">
                                <div class="driverPosition">
                                    {driverIndex + 1}
                                </div>
                                <span class={`line ${driver.color}`}></span>
                                <div class="driverName">{driver.abb}</div>
                            </div>
                            <div class="driverRight">{DriverInterval}</div>
                        </div>
                    </motion.div>
                );
            })}
        </section>
    );
};
const PlayerLeaderboard = (props) => {
    const spring = {
        type: 'tween',
        damping: 100,
        stiffness: 500,
        mass: 2.5,
        restDelta: 6,
        duration: 0.5,
        ease: 'easeOut',
    };
    function ExpBySymbol(value) {
        let ret = value;
        let length = ret.length;
        let isPlus = true;
        if (ret.charAt() === '-') {
            ret = ret.substring(1, length);
            length -= 1;
            isPlus = false;
        }
        let color = isPlus ? '#e53935' : '#1e88e5';
        let ans = '';
        if (length >= 9) {
            // 199489230 -> 1억 9948만 9230
            ans += ret.substring(0, ret.length - 9 + 1) + '억 '; // 1억
            ret = ret.substring(ret.length - 9 + 1);
        }
        if (length >= 5) {
            // value 99489230
            ans += ret.substring(0, ret.length - 5 + 1) + '만 '; // 9948만
            ret = ret.substring(ret.length - 5 + 1);
        }
        ans += ret;
        let minus = isPlus ? '+' : '-';
        ans = minus + ans;
        return (
            <>
                <span style={{ color: ans === '+' ? 'grey' : color }}>
                    {ans === '+' ? '0 원' : ans +' 원'}
                </span>
            </>
        );
    }

    const parseWonToStr = (won) => {
        if (typeof won == 'number') {
            won = won - 100000000;
            won = won.toString();
        }
        return won;
    };
    return (
        <section id="leaderboard">
            {props.view === 'gain' ? (
                <div id="detailtitle">GAINED/LOST</div>
            ) : props.view === 'tyres' ? (
                <div id="detailtitle">CURRENT TYRES</div>
            ) : null}
            {props.activeDrivers.map((driver, driverIndex, allDrivers) => {
                const DriverInterval = (
                    <div class="driverInterval">
                        {ExpBySymbol(parseWonToStr(driver.asset))}
                        {/* {driverIndex === 0 ? 'Interval' : convertDistanceToTime(lastDriver.current_distance, driver.current_distance)}  */}
                    </div>
                );
                return (
                    <motion.div
                        key={driver.playerID}
                        layout
                        transition={spring}
                    >
                        <div
                            class="driverContainer"
                            key={driver.abb}
                            onClick={() => {}}
                        >
                            <div class="driverLeft">
                                <div class="driverPosition">
                                    {driverIndex + 1}
                                </div>
                                <span class={`line ${driver.color}`}></span>
                                <div class="driverName">{driver.playerID}</div>
                            </div>
                            <div class="driverRight">{DriverInterval}</div>
                        </div>
                    </motion.div>
                );
            })}
        </section>
    );
};

export default function RacingLeaderBoard(props) {
    const [view, toggleView] = useState('interval');
    const [players, setPlayers] = useState([
        {
            socketID: 'socketID',
            playerID: 'playerID',
            asset: 'asset',
        },
    ]);

    useEffect(() => {
        if (props.socket == null) {
            console.log('socket이 없습니다.', 'RacingLeaderBoard.js');
        } else {
            props.socket.on('roomRank', (playerArray) => {
                setPlayers(playerArray);
            });
        }
    }, []);

    return (
        <section id="container">
            <PlayerLeaderboard activeDrivers={players} view={view} />
        </section>
    );
}
