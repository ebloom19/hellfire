import React from "react";
import { ReactDOM } from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import ReactTooltip from 'react-tooltip';
import { SpellIconsProps } from "../../types/SpellData";
import '../scss/SpellData.scss';

export function SpellIcons(props: SpellIconsProps) {
    const [levelTooltip, showLevelTooltip] = useState(true);
    const [castingTooltip, showCastingTooltip] = useState(true);
    const [classesTooltip, setClassesTooltip] = useState(true);
    const [concentrationTooltip, showConcentrationTooltip] = useState(true);
    const [rangeTooltip, showRangeTooltip] = useState(true);
    const [ritualTooltip, showRitualTooltip] = useState(true);
    const [durationTooltip, showDurationTooltip] = useState(true);

    return (
        <>
        <div className="iconsList">
            {props.spellData.level &&
                <div 
                    className="icons" 
                    data-tip 
                    data-for='level'
                    onMouseEnter={() => showLevelTooltip(true)}
                    onMouseLeave={() => {
                        showLevelTooltip(false);
                        setTimeout(() => showLevelTooltip(true), 50);
                    }}
                >
                    <FontAwesomeIcon icon={solid('arrow-up-9-1')} />
                    <p>{props.spellData.level}</p>
                </div>
            }
            {/* <div 
                className="icons" 
                data-tip 
                data-for='attack'
                onMouseEnter={() => showLevelTooltip(true)}
                onMouseLeave={() => {
                    showLevelTooltip(false);
                    setTimeout(() => showLevelTooltip(true), 50);
                }}
            >
                <FontAwesomeIcon icon={solid('arrow-up-9-1')} />
                <p>{props.spellData.at}</p>
            </div> */}
            {props.spellData.casting_time &&
                <div 
                    className="icons" 
                    data-tip 
                    data-for='casting'
                    onMouseEnter={() => showCastingTooltip(true)}
                    onMouseLeave={() => {
                        showCastingTooltip(false);
                        setTimeout(() => showCastingTooltip(true), 50);
                    }}
                >
                    <FontAwesomeIcon icon={solid('wand-magic')} />
                    <p>{props.spellData?.casting_time}</p>
                </div>
            }
            {typeof props.spellData.concentration == "boolean" &&
                <div 
                    className="icons"
                    data-tip 
                    data-for='concentration'
                    onMouseEnter={() => showConcentrationTooltip(true)}
                    onMouseLeave={() => {
                        showConcentrationTooltip(false);
                        setTimeout(() => showConcentrationTooltip(true), 50);
                    }}
                >
                    <FontAwesomeIcon icon={solid('brain')} />
                    {props.spellData.concentration ? <FontAwesomeIcon className="mt-2" icon={solid('check')} /> : <FontAwesomeIcon className="mt-2" icon={solid('xmark')} />}
                </div>
            }
            {props.spellData.range &&
                <div 
                    className="icons"
                    data-tip 
                    data-for='range'
                    onMouseEnter={() => showRangeTooltip(true)}
                    onMouseLeave={() => {
                        showRangeTooltip(false);
                        setTimeout(() => showRangeTooltip(true), 50);
                    }}
                >
                    <FontAwesomeIcon icon={solid('maximize')} />
                    <p>{props.spellData.range}</p>
                </div>
            }
            {typeof props.spellData.ritual == "boolean" &&
                <div 
                    className="icons"
                    data-tip 
                    data-for='ritual'
                    onMouseEnter={() => showRitualTooltip(true)}
                    onMouseLeave={() => {
                        showRitualTooltip(false);
                        setTimeout(() => showRitualTooltip(true), 50);
                    }}
                >
                    <FontAwesomeIcon icon={solid('dragon')} />
                    {props.spellData.ritual ? <FontAwesomeIcon className="mt-2" icon={solid('check')} /> : <FontAwesomeIcon className="mt-2" icon={solid('xmark')} />}
                </div>
            }
            {props.spellData.duration &&
                <div 
                    className="icons"
                    data-tip 
                    data-for='duration'
                    onMouseEnter={() => showDurationTooltip(true)}
                    onMouseLeave={() => {
                        showDurationTooltip(false);
                        setTimeout(() => showDurationTooltip(true), 50);
                    }}
                >
                    <FontAwesomeIcon icon={solid('stopwatch')} />
                    <p>{props.spellData.duration}</p>
                </div>
            }
            {props.spellData.classes && props.spellData.classes.length > 0 &&
                <div 
                    className="icons"
                    data-tip 
                    data-for='classes'
                    onMouseEnter={() => setClassesTooltip(true)}
                    onMouseLeave={() => {
                        setClassesTooltip(false);
                        setTimeout(() => setClassesTooltip(true), 50);
                    }}
                >
                    <FontAwesomeIcon icon={solid('binoculars')} />
                    <div>
                        {props.spellData.classes.map(c => {
                            return <p style={{margin: '-5px 5px 0 5px'}}>{c.name}</p>
                        })}
                    </div>
                </div>
            }
        </div>
        // Hidden div for tooltips
        <div>
            {levelTooltip &&
                <ReactTooltip id='level' place="bottom" role='example'>
                    <h4 style={{textAlign: 'left'}}>Level</h4>
                    <p style={{maxWidth: '250px', fontWeight: '500', textAlign: 'left'}}>{props.spellData.higher_level}</p>
                </ReactTooltip>
            }
            {castingTooltip &&
                <ReactTooltip id='casting' place="bottom" role='example'>
                    <h4 style={{textAlign: 'left'}}>Casting</h4>
                    <p style={{maxWidth: '250px', fontWeight: '500', textAlign: 'left'}}>
                        Most spells do have a casting time of 1 action, so a spellcaster often uses 
                        his or her action in combat to cast such a spell. So, if you cast a spell 
                        with a casting time of 1 Action, you resolve it the exact same way that 
                        you would resolve an attack.
                    </p>
                </ReactTooltip>
            }
            {classesTooltip &&
                <ReactTooltip id='classes' place="bottom" role='example'>
                    <h4 style={{textAlign: 'left'}}>Classes</h4>
                    <p style={{maxWidth: '250px', fontWeight: '500', textAlign: 'left'}}>
                        Classes are the mechanical heart of characters in Dungeons and Dragons. 
                        While your race and background carry equal weight in who your character is, 
                        your class defines what your character does. Understanding how to build 
                        and play a class effectively is the most important part of building an 
                        effective DnD character.
                    </p>
                </ReactTooltip>
            }
            {concentrationTooltip &&
                <ReactTooltip id='concentration' place="bottom" role='example'>
                    <h4 style={{textAlign: 'left'}}>Concentration</h4>
                    <p style={{maxWidth: '250px', fontWeight: '500', textAlign: 'left'}}>
                        The spell lasts as long as you concentrate on it. Concentrating to maintain a 
                        spell is a standard action that does not provoke attacks of opportunity. 
                        Anything that could break your concentration when casting a spell can also 
                        break your concentration while you’re maintaining one, causing the spell to 
                        end. You can’t cast a spell while concentrating on another one. Sometimes a 
                        spell lasts for a short time after you cease concentrating.
                    </p>
                </ReactTooltip>
            }
            {rangeTooltip &&
                <ReactTooltip id='range' place="bottom" role='example'>
                    <h4 style={{textAlign: 'left'}}>Range</h4>
                    <p style={{maxWidth: '250px', fontWeight: '500', textAlign: 'left'}}>
                        All powers will list a range, in one form or another. Some powers have a specific 
                        numerical value, denoting the distance in squares that the attack can reach, typically 
                        starting from the characters square. Other attacks, usually with the weapon keyword, 
                        will be listed as either "melee" or "ranged" - these ranges are defined by the melee 
                        or ranged weapon used to make the attack. Some powers also use "Personal", which will 
                        only affect the user and do not need an additional value.
                    </p>
                </ReactTooltip>
            }
            {ritualTooltip &&
                <ReactTooltip id='ritual' place="bottom" role='example'>
                    <h4 style={{textAlign: 'left'}}>Ritual</h4>
                    <p style={{maxWidth: '250px', fontWeight: '500', textAlign: 'left'}}>
                        Ritual Spells in D&D 5e are spells that are able to be cast without using a spell slot. 
                        These spells are typically utility spells that aid the caster by creating some effect.
                        Some of these spells allow the caster to magically identify items or summon an invisible 
                        servant to assist them with mundane tasks. Others allow the caster to communicate with 
                        powerful beings beyond the Material Planes or attempt to divine the results of future 
                        events.
                    </p>
                </ReactTooltip>
            }
            {durationTooltip &&
                <ReactTooltip id='duration' place="bottom" role='example'>
                    <h4 style={{textAlign: 'left'}}>Duration</h4>
                    <p style={{maxWidth: '250px', fontWeight: '500', textAlign: 'left'}}>
                        Many durations are measured in rounds, minutes, hours, or some other increment. When the 
                        time is up, the magic goes away and the spell ends. If a spell’s duration is variable the 
                        duration is rolled secretly (the caster doesn’t know how long the spell will last).
                    </p>
                </ReactTooltip>
            }
        </div>
        </>
    )
}