var recipes = {
  carrots: "1 cup",
  peppers: "3 cups",
  corn: "1 cup"
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign(recipes, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes.key
  return recipes
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return recipes
} 




/* var recipes = {
  prop: 1,
  milk: "1 cup",
  butter: "stick"
}

var newRecipes = Object.assign ({}, recipes)

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign( {}, recipes, {prop2: 2 } )
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign(recipes, {prop2: 2} )
}

function deleteFromObjectByKey(key, value) {
  delete recipes.prop
  return Object.assign({}, recipes)
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes.key
  return Object.assign(recipes)
}  */