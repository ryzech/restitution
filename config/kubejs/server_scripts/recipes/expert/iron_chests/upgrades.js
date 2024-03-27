//packmode: expert
function tieredUpgrade(event, tier)  {
    event.shaped(`ironchests:${tier}_chest_upgrade`, [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: `#forge:plates/${tier}`,
        B: '#minecraft:planks'
    })
}

ServerEvents.recipes(event => {
    tieredUpgrade(event, "copper")
    tieredUpgrade(event, "iron")
    tieredUpgrade(event, "gold")
    tieredUpgrade(event, "diamond")

    //special cases
    event.shaped(`ironchests:crystal_chest_upgrade`, [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: `#forge:plates/amethyst`,
        B: '#minecraft:planks'
    })
})