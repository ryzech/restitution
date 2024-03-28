//packmode: expert
ServerEvents.recipes(event => {
    event.remove({ mod: 'railcraft' })

    event.shaped('railcraft:white_iron_tank_wall', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/iron',
        B: '#forge:ingots/iron',
        C: '#forge:tools/hammers'
    })

    event.shaped('railcraft:water_tank_siding', [
        'AAA',
        'BBB',
        'AAA'
    ], {
        A: '#forge:treated_wood',
        B: 'gtceu:sticky_resin'
    })
})