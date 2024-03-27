//packmode: expert
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('restitution:mv_assembler/space_chestplate')
    .itemInputs(
        '8x #ad_astra:steel_plates',
        '2x ad_astra:gas_tank',
        '1x ad_astra:oxygen_gear',
        '8x botania:mana_string'
    )
    .itemOutputs('ad_astra:space_suit')
    .duration(600)
    .EUt(80)
})