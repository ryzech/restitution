function createAntiRecipe(event, color)  {
    event.shaped(`restitution:antiblock_${color}`, [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: '#forge:stone',
        B: '#forge:dusts/glowstone',
        C: `#forge:dyes/${color}_dye`
    })
}

ServerEvents.recipes(event => {
    createAntiRecipe(event, "black")
    createAntiRecipe(event, "blue")
    createAntiRecipe(event, "brown")
    createAntiRecipe(event, "cyan")
    createAntiRecipe(event, "green")
    createAntiRecipe(event, "gray")
    createAntiRecipe(event, "lime")
    createAntiRecipe(event, "light_blue")
    createAntiRecipe(event, "light_gray")
    createAntiRecipe(event, "magenta")
    createAntiRecipe(event, "orange")
    createAntiRecipe(event, "purple")
    createAntiRecipe(event, "red")
    createAntiRecipe(event, "white")
    createAntiRecipe(event, "yellow")
    createAntiRecipe(event, "pink")
})