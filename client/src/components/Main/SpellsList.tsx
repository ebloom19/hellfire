import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Select from 'react-select';
import { SpellCard } from "./SpellCard";
import { Rings } from 'react-loader-spinner';
import { SpellsObject } from "../../types/SpellsList";
import '../scss/SpellData.scss';

function callServer() {
    axios.get('http://localhost:8000/test', {
      params: {
        table: 'sample',
      },
    }).then((response) => {
      console.log(response.data);
    });
}

export function SpellsList() {
    const [spells, setSpells] = useState<SpellsObject[]>();
    const [selectedSpell, setSelectedSpell] = useState<SelectOptionType[]>();
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        axios.get('https://www.dnd5eapi.co/api/spells')
            .then(response => {
                setSpells(response.data.results);
                setLoading(false);
            })
    }, []);

    const optionList = spells?.map(s => {
        return {value: s.index, label: s.name}
    })

    type SelectOptionType = { label: string, value: string }

    // const handleSelectionChange = (option: SelectOptionType | null) => {
    //     if (option) {
    //         setSelectedSpell(option)
    //     }
    // };

    const handleSelectionChange = (option: any) => {
        if (option) {
            setSelectedSpell(option)
            console.log(option, 'ghjkl');
        }
    };

    const customStyles = {
        option: (provided: any, state: any) => ({
        //   ...provided,
          borderBottom: '2px solid #264c5e',
          color: state.isSelected ? 'black' : '#264c5e',
          padding: 20,
        }),

      }
      
      
    return (
        <>
        {!loading ?
            <div style={{width: '60vw'}}>
                <>
                {callServer()}
                <h2 style={{margin: '25px 0', textAlign: 'left'}}>Select your spell</h2>
                {optionList &&
                    <Select
                        options={optionList}
                        placeholder="Select a spell"
                        value={selectedSpell}
                        onChange={handleSelectionChange}
                        styles={customStyles}
                        isSearchable={true}
                        isMulti
                    />
                }   
                </>
            </div>
            :
                <Rings 
                    color="#cec2ae"
                    height="240"
                    width="240"
                />
        }
        {selectedSpell &&
            selectedSpell.map((s, i) => {
                return (
                    <SpellCard spellIndex={s.value} index={i} />
                )
            })

        }
        </>
    )
};