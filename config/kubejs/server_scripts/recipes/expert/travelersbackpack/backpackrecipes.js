//packmode: expert
ServerEvents.recipes(event => {
    event.remove({ mod: 'travelersbackpack' })

    event.shaped('travelersbackpack:standard', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'restitution:tanned_leather',
        B: 'gtceu:steel_ingot',
        C: 'gtceu:iron_ring',
        D: 'ironchests:iron_chest',
        E: '#travelersbackpack:sleeping_bags'
    })
})