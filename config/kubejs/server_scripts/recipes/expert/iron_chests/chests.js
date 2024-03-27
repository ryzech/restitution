//packmode: expert
function tieredChest(event, tier)  {
    event.shaped(`ironchests:${tier}_chest`, [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: `#forge:plates/${tier}`,
        B: '#forge:chests'
    })
    event.shaped(`ironchests:${tier}_barrel`, [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: `#forge:plates/${tier}`,
        B: '#forge:barrels'
    })
}

ServerEvents.recipes(event => {
    tieredChest(event, "copper")
    tieredChest(event, "iron")
    tieredChest(event, "gold")
    tieredChest(event, "diamond")
    
    //special cases
    event.shaped(`ironchests:crystal_barrel`, [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: `#forge:plates/amethyst`,
        B: '#forge:barrels'
    })
    event.shaped(`ironchests:crystal_chest`, [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: `#forge:plates/amethyst`,
        B: '#forge:chests'
    })
})