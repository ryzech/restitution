//packmode: expert
ServerEvents.recipes(event => {

    event.shaped('restitution:bound_leather', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'minecraft:leather',
        B: 'minecraft:string'
    })

    event.smelting('restitution:tanned_leather', 'restitution:bound_leather')

})