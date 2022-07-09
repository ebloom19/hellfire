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
    const [concentrationTooltip, showConcentrationTooltip] = useState(true);
    const [rangeTooltip, showRangeTooltip] = useState(true);
    const [ritualTooltip, showRitualTooltip] = useState(true);
    const [durationTooltip, showDurationTooltip] = useState(true);

    return (
            <div className="d-flex justify-content-evenly align-items-start">
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
                {/* Hidden div for tooltips */}
                <div>
                    {levelTooltip &&
                        <ReactTooltip id='level' role='example'>
                            <p>Level Info</p>
                            <p style={{maxWidth: '150px', fontWeight: '600'}}>{props.spellData.higher_level}</p>
                        </ReactTooltip>
                    }
                    {castingTooltip &&
                        <ReactTooltip id='casting' role='example'>
                            <p>Casting Info</p>
                        </ReactTooltip>
                    }
                    {concentrationTooltip &&
                        <ReactTooltip id='concentration' role='example'>
                            <p>Concentration Info</p>
                        </ReactTooltip>
                    }
                    {rangeTooltip &&
                        <ReactTooltip id='range' role='example'>
                            <p>Range Info</p>
                        </ReactTooltip>
                    }
                    {ritualTooltip &&
                        <ReactTooltip id='ritual' role='example'>
                            <p>Ritual Info</p>
                        </ReactTooltip>
                    }
                    {durationTooltip &&
                        <ReactTooltip id='duration' role='example'>
                            <p>Duration Info</p>
                        </ReactTooltip>
                    }
                </div>
            </div>
    )
}