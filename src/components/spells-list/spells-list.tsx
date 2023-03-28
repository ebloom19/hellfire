import React from "react";
import axios from "axios";
import { useMemo, useState, FC } from "react";
import Select from 'react-select';
import { SpellCard } from "../spell-card/spell-card";
import { Rings } from 'react-loader-spinner';
import { SpellsListType, SpellsObject, SelectOption } from './spells-list.types';
import '../../styling/scss/SpellData.scss';

export const SpellsList:FC<SpellsListType> = ({ handleDelete, handleSave, favouriteList }) => {
    const [spells, setSpells] = useState<SpellsObject[]>();
    const [errorMessage, setErrorMessage] = useState<string>();
    const [selectedSpell, setSelectedSpell] = useState<SelectOption[]>();
    const [loading, setLoading] = useState<boolean>(true);
    
    useMemo(() => {
        axios.get('https://www.dnd5eapi.co/api/spells')
            .then(response => {
                setSpells(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                setErrorMessage(error.message);
                setLoading(false);
            })
    }, []);

    const optionList = spells?.map(s => {
        return {value: s.index, label: s.name};
    });


    const handleSelectionChange = (option: any) => {
        if (option) {
            setSelectedSpell(option);
        };
    };

    const customStyles = {
        option: (state: any) => ({
          borderBottom: '2px solid #264c5e',
          color: state.isSelected ? 'black' : '#264c5e',
          padding: 20,
        })
      }
      
      
    return (
        <>
        {!loading && spells ?
            <div style={{width: '60vw'}}>
                <>
                <h2 style={{margin: '25px 0', textAlign: 'left'}}>
                    Select your spell
                </h2>
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
            </div> :
            <Rings 
                color="#cec2ae"
                height="240"
                width="240"
            />
        }
        {!loading && errorMessage &&
            <h2 style={{margin: '25px 0', textAlign: 'left'}}>
                {errorMessage}
            </h2>
        }
        {selectedSpell &&
            selectedSpell.map((s, i) => {
                return (
                    <SpellCard 
                        spellIndex={s.value} 
                        index={i} 
                        favouriteList={favouriteList} 
                        handleDelete={handleDelete} 
                        handleSave={handleSave} 
                    />
                );
            })

        }
        </>
    )
};