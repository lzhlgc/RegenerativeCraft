// Listen to item registry event
StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  // If you want to specify a different texture location you can do that too, like this:
  event.create('wheat_ash').texture('regenerative_craft:item/wheat_ash').maxStackSize(64)

})

