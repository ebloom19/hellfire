import "../../styling/scss/SpellData.scss";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ReactDOM } from "react";
import { FC, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

import { SpellIconsType } from "./spell-icons.types";

export const SpellIcons: FC<SpellIconsType> = ({ index, spellData }) => {
	const [levelTooltip, showLevelTooltip] = useState(true);
	const [attackTooltip, showAttackTooltip] = useState(true);
	const [schoolTooltip, setSchoolTooltip] = useState(true);
	const [castingTooltip, showCastingTooltip] = useState(true);
	const [componentsTooltip, setComponentsTooltip] = useState(true);
	const [concentrationTooltip, showConcentrationTooltip] = useState(true);
	const [rangeTooltip, showRangeTooltip] = useState(true);
	const [ritualTooltip, showRitualTooltip] = useState(true);
	const [durationTooltip, showDurationTooltip] = useState(true);
	const [classesTooltip, setClassesTooltip] = useState(true);

	// For if multiple spells selected
	const level = `level${index}`;
	const attack = `attack${index}`;
	const school = `school${index}`;
	const casting = `casting${index}`;
	const components = `components${index}`;
	const concentration = `concentration${index}`;
	const range = `range${index}`;
	const ritual = `ritual${index}`;
	const duration = `duration${index}`;
	const classes = `classes${index}`;

	return (
		<>
			<div className="icons-list">
				{spellData.level >= 0 && (
					<div
						className="icons"
						data-tip
						data-for={level}
						onMouseEnter={() => showLevelTooltip(true)}
						onMouseLeave={() => {
							showLevelTooltip(false);
							setTimeout(() => showLevelTooltip(true), 50);
						}}
					>
						<FontAwesomeIcon icon={solid("arrow-up-9-1")} className="mb-2" />
						<p>{spellData.level}</p>
					</div>
				)}
				{spellData.attack_type && (
					<div
						className="icons"
						data-tip
						data-for={attack}
						onMouseEnter={() => showAttackTooltip(true)}
						onMouseLeave={() => {
							showAttackTooltip(false);
							setTimeout(() => showAttackTooltip(true), 50);
						}}
					>
						<FontAwesomeIcon icon={solid("skull")} className="mb-2" />
						<p>{spellData.attack_type.charAt(0).toUpperCase() + spellData.attack_type.slice(1)}</p>
					</div>
				)}
				{spellData.school && (
					<div
						className="icons"
						data-tip
						data-for={school}
						onMouseEnter={() => setSchoolTooltip(true)}
						onMouseLeave={() => {
							setSchoolTooltip(false);
							setTimeout(() => setSchoolTooltip(true), 50);
						}}
					>
						<FontAwesomeIcon icon={solid("graduation-cap")} className="mb-2" />
						<p>{spellData?.school.name}</p>
					</div>
				)}
				{spellData.components && spellData.components.length > 0 && (
					<div
						className="icons"
						data-tip
						data-for={casting}
						onMouseEnter={() => showCastingTooltip(true)}
						onMouseLeave={() => {
							showCastingTooltip(false);
							setTimeout(() => showCastingTooltip(true), 50);
						}}
					>
						<FontAwesomeIcon icon={solid("wand-magic")} className="mb-2" />
						<p>{spellData?.casting_time}</p>
					</div>
				)}
				{spellData.casting_time && (
					<div
						className="icons"
						data-tip
						data-for={components}
						onMouseEnter={() => setComponentsTooltip(true)}
						onMouseLeave={() => {
							setComponentsTooltip(false);
							setTimeout(() => setComponentsTooltip(true), 50);
						}}
					>
						<FontAwesomeIcon icon={solid("meteor")} className="mb-3" />
						<div>
							{spellData.components.map((component, i) => {
								return (
									<p key={i} style={{ margin: "-5px 5px 0 5px" }}>
										{component}
									</p>
								);
							})}
						</div>
					</div>
				)}
				{typeof spellData.concentration == "boolean" && (
					<div
						className="icons"
						data-tip
						data-for={concentration}
						onMouseEnter={() => showConcentrationTooltip(true)}
						onMouseLeave={() => {
							showConcentrationTooltip(false);
							setTimeout(() => showConcentrationTooltip(true), 50);
						}}
					>
						<FontAwesomeIcon icon={solid("brain")} className="mb-2" />
						{spellData.concentration ? (
							<FontAwesomeIcon className="mt-2" icon={solid("check")} />
						) : (
							<FontAwesomeIcon className="mt-2" icon={solid("xmark")} />
						)}
					</div>
				)}
				{spellData.range && (
					<div
						className="icons"
						data-tip
						data-for={range}
						onMouseEnter={() => showRangeTooltip(true)}
						onMouseLeave={() => {
							showRangeTooltip(false);
							setTimeout(() => showRangeTooltip(true), 50);
						}}
					>
						<FontAwesomeIcon icon={solid("maximize")} className="mb-2" />
						<p>{spellData.range}</p>
					</div>
				)}
				{typeof spellData.ritual == "boolean" && (
					<div
						className="icons"
						data-tip
						data-for={ritual}
						onMouseEnter={() => showRitualTooltip(true)}
						onMouseLeave={() => {
							showRitualTooltip(false);
							setTimeout(() => showRitualTooltip(true), 50);
						}}
					>
						<FontAwesomeIcon icon={solid("dragon")} className="mb-2" />
						{spellData.ritual ? (
							<FontAwesomeIcon className="mt-2" icon={solid("check")} />
						) : (
							<FontAwesomeIcon className="mt-2" icon={solid("xmark")} />
						)}
					</div>
				)}
				{spellData.duration && (
					<div
						className="icons"
						data-tip
						data-for={duration}
						onMouseEnter={() => showDurationTooltip(true)}
						onMouseLeave={() => {
							showDurationTooltip(false);
							setTimeout(() => showDurationTooltip(true), 50);
						}}
					>
						<FontAwesomeIcon icon={solid("stopwatch")} className="mb-2" />
						<p>{spellData.duration}</p>
					</div>
				)}
				{spellData.classes && spellData.classes.length > 0 && (
					<div
						className="icons"
						data-tip
						data-for={classes}
						onMouseEnter={() => setClassesTooltip(true)}
						onMouseLeave={() => {
							setClassesTooltip(false);
							setTimeout(() => setClassesTooltip(true), 50);
						}}
					>
						<FontAwesomeIcon icon={solid("book-bookmark")} className="mb-3" />
						<div>
							{spellData.classes.map((className, i) => {
								return (
									<p key={i} style={{ margin: "-5px 5px 0 5px" }}>
										{className.name}
									</p>
								);
							})}
						</div>
					</div>
				)}
			</div>
			{/* Hidden div for tooltips */}
			<div>
				{levelTooltip && (
					<ReactTooltip id={level} place="bottom" role="tooltip">
						<h4 style={{ textAlign: "left" }}>Level</h4>
						<p className="tooltip-text">
							Every spell has a level from 0 to 9. A spell’s level is a general indicator of how powerful it is, with
							the lowly (but still impressive) Magic Missile at 1st Level and the earth--shaking wish at 9th.
							Cantrips—simple but powerful Spells that Characters can cast almost by rote—are level 0. The higher a
							spell’s level, the higher level a Spellcaster must be to use that spell. Spell Level and character level
							don’t correspond directly. Typically, a character has to be at least 17th level, not 9th level, to cast a
							9th--level spell.
						</p>
						{spellData.higher_level.length > 0 && (
							<>
								<h5 style={{ textAlign: "left" }}>Higher Level:</h5>
								<p className="tooltip-text">{spellData.higher_level}</p>
							</>
						)}
					</ReactTooltip>
				)}
				{attackTooltip && (
					<ReactTooltip id={attack} place="bottom" role="tooltip">
						<h4 style={{ textAlign: "left" }}>Attack Type</h4>
						<p className="tooltip-text">
							Different attacks, damaging Spells, and other harmful Effects deal different types of damage. Damage Types
							have no rules of their own, but other rules, such as damage Resistance, rely on the types.
						</p>
					</ReactTooltip>
				)}
				{schoolTooltip && (
					<ReactTooltip id={school} place="bottom" role="tooltip">
						<h4 style={{ textAlign: "left" }}>The Schools of Magic</h4>
						<p className="tooltip-text">
							Academies of magic group Spells into eight categories called Schools of Magic. Scholars, particularly
							wizards, apply these categories to all Spells, believing that all magic functions in essentially the same
							way, whether it derives from rigorous study or is bestowed by a deity. The Schools of Magic help describe
							spells; they have no rules of their own, although some rules refer to the schools.
						</p>
					</ReactTooltip>
				)}
				{castingTooltip && (
					<ReactTooltip id={casting} place="bottom" role="tooltip">
						<h4 style={{ textAlign: "left" }}>Casting</h4>
						<p className="tooltip-text">
							Most spells do have a casting time of 1 action, so a spellcaster often uses his or her action in combat to
							cast such a spell. So, if you cast a spell with a casting time of 1 Action, you resolve it the exact same
							way that you would resolve an attack.
						</p>
					</ReactTooltip>
				)}
				{componentsTooltip && (
					<ReactTooltip id={components} place="bottom" role="tooltip">
						<h4 style={{ textAlign: "left" }}>Components</h4>
						<p className="tooltip-text">
							A spell’s Components are the physical requirements you must meet in order to cast it. Each spell’s
							description indicates whether it requires Verbal (V), Somatic (S), or Material (M) Components. If you
							can’t provide one or more of a spell’s Components, you are unable to cast the spell.
						</p>
						{spellData.material && (
							<>
								<h5 style={{ textAlign: "left" }}>Material:</h5>
								<p className="tooltip-text">{spellData.material}</p>
							</>
						)}
					</ReactTooltip>
				)}
				{concentrationTooltip && (
					<ReactTooltip id={concentration} place="bottom" role="tooltip">
						<h4 style={{ textAlign: "left" }}>Concentration</h4>
						<p className="tooltip-text">
							The spell lasts as long as you concentrate on it. Concentrating to maintain a spell is a standard action
							that does not provoke attacks of opportunity. Anything that could break your concentration when casting a
							spell can also break your concentration while you’re maintaining one, causing the spell to end. You can’t
							cast a spell while concentrating on another one. Sometimes a spell lasts for a short time after you cease
							concentrating.
						</p>
					</ReactTooltip>
				)}
				{rangeTooltip && (
					<ReactTooltip id={range} place="bottom" role="tooltip">
						<h4 style={{ textAlign: "left" }}>Range</h4>
						<p className="tooltip-text">
							All powers will list a range, in one form or another. Some powers have a specific numerical value,
							denoting the distance in squares that the attack can reach, typically starting from the characters square.
							Other attacks, usually with the weapon keyword, will be listed as either melee or ranged - these ranges
							are defined by the melee or ranged weapon used to make the attack. Some powers also use Personal, which
							will only affect the user and do not need an additional value.
						</p>
					</ReactTooltip>
				)}
				{ritualTooltip && (
					<ReactTooltip id={ritual} place="bottom" role="tooltip">
						<h4 style={{ textAlign: "left" }}>Ritual</h4>
						<p className="tooltip-text">
							Certain Spells have a Special tag: ritual. Such a spell can be cast following the normal rules for
							Spellcasting, or the spell can be cast as a ritual. The ritual version of a spell takes 10 minutes longer
							to cast than normal. It also doesn’t expend a spell slot, which means the ritual version of a spell can’t
							be cast at a higher level. To Cast a Spell as a ritual, a Spellcaster must have a feature that grants the
							ability to do so. The Cleric and the druid, for example, have such a feature. The caster must also have
							the spell prepared or on his or her list of Spells known, unless the character’s ritual feature specifies
							otherwise, as the wizard’s does.
						</p>
					</ReactTooltip>
				)}
				{durationTooltip && (
					<ReactTooltip id={duration} place="bottom" role="tooltip">
						<h4 style={{ textAlign: "left" }}>Duration</h4>
						<p className="tooltip-text">
							Many durations are measured in rounds, minutes, hours, or some other increment. When the time is up, the
							magic goes away and the spell ends. If a spell’s duration is variable the duration is rolled secretly (the
							caster doesn’t know how long the spell will last).
						</p>
					</ReactTooltip>
				)}
				{classesTooltip && (
					<ReactTooltip id={classes} place="bottom" role="tooltip">
						<h4 style={{ textAlign: "left" }}>Classes</h4>
						<p className="tooltip-text">
							Classes are the mechanical heart of characters in Dungeons and Dragons. While your race and background
							carry equal weight in who your character is, your class defines what your character does. Understanding
							how to build and play a class effectively is the most important part of building an effective DnD
							character.
						</p>
						{spellData.subclasses && (
							<>
								<h5 style={{ textAlign: "left" }}>Sub Classes:</h5>
								{spellData.subclasses.map((subClass, i) => (
									<h6 key={i}>{subClass.name}</h6>
								))}
							</>
						)}
					</ReactTooltip>
				)}
			</div>
		</>
	);
};
