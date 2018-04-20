export const adaptListFromBackend = (speciesList) => {
  return speciesList.map((speciesData) => {
    return adaptSpecies(speciesData)
  })
}

const adaptSpecies = (data) => {
  return {
    'id': data.id,
    'name': data.name,
    'origin': data.homeworld + ', ' + data.quadrant,
    'warpCapable': data.warp_capable.toString(),
    'sightings': data.sightings,
    'attributes': collectAttributes(data)
  }
}

const collectAttributes = (data) => {
  let attributes = []

  let ATTRIBUTE_KEYS =[
    'extinct', 
    'extra_galactic', 
    'humanoid', 
    'reptilian', 
    'non_corporeal', 
    'shape_shifting',
    'spaceborne', 
    'telepathic', 
    'trans_dimentional', 
    'alternate_reality'
  ]

  ATTRIBUTE_KEYS.forEach((attribute_key) => {
    if (data[attribute_key] === true) {
      attributes.push(attribute_key)
    }
  })

  return attributes
}
